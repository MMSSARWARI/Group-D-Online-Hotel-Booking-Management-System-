// Online Hotel Booking Management System - backend
// Node.js + Express server that connects the website to the MySQL database hotel_db.

const express = require("express");
const crypto = require("crypto");
const mysql = require("mysql2/promise");
const path = require("path");

// ---------- Database settings ----------
// Change DB_PASSWORD to the root password you use in MySQL Workbench.
const DB_CONFIG = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASSWORD || "your_mysql_password",
  database: "hotel_db",
  dateStrings: true // return DATE columns as "YYYY-MM-DD" text
};

const PORT = 3000;

// ---------- Admin settings ----------
// Login for the admin page (admin.html)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "1234";

const pool = mysql.createPool(DB_CONFIG);
const app = express();

app.use(express.json());
// Serve the website (index.html, booking.html, ...) from the frontend folder
app.use(express.static(path.join(__dirname, "..", "frontend")));

// ---------- Admin login ----------
// After a correct password the server gives the admin a random token.
// The admin page sends this token with every request that needs admin rights.
const adminTokens = new Set();

// Compare two texts in a way that does not leak information through timing
function sameText(given, expected) {
  const a = Buffer.from(String(given || ""));
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function requireAdmin(req, res, next) {
  const header = req.get("Authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!adminTokens.has(token)) {
    return res.status(401).json({ error: "Only the admin can do this. Please log in on the admin page." });
  }
  next();
}

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body || {};
  const userOk = sameText(username, ADMIN_USERNAME);
  const passOk = sameText(password, ADMIN_PASSWORD);
  if (!userOk || !passOk) {
    return res.status(401).json({ error: "Wrong admin ID or password." });
  }
  const token = crypto.randomBytes(24).toString("hex");
  adminTokens.add(token);
  res.json({ token });
});

app.post("/api/admin/logout", requireAdmin, (req, res) => {
  adminTokens.delete(req.get("Authorization").slice(7));
  res.json({ message: "Logged out." });
});

// ---------- Rooms ----------
// List all rooms
app.get("/api/rooms", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, type, price, availability FROM Room ORDER BY id"
    );
    res.json(rows.map(r => ({ ...r, price: Number(r.price), availability: !!r.availability })));
  } catch (err) {
    serverError(res, err);
  }
});

// ---------- Bookings ----------
// List all bookings with customer and room details (admin only)
app.get("/api/bookings", requireAdmin, async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT b.id, c.name AS customer, c.email, r.id AS room_id, r.type AS room_type,
              b.check_in, b.check_out
         FROM Booking b
         JOIN Customer c ON c.id = b.customer_id
         JOIN Room r ON r.id = b.room_id
        ORDER BY b.check_in`
    );
    res.json(rows);
  } catch (err) {
    serverError(res, err);
  }
});

// Create a new booking
app.post("/api/bookings", async (req, res) => {
  const { name, email, phone, roomId, checkIn, checkOut } = req.body || {};

  if (!name || !email || !phone || !roomId || !checkIn || !checkOut) {
    return res.status(400).json({ error: "Please fill in all fields." });
  }
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(checkIn) || !datePattern.test(checkOut) ||
      isNaN(new Date(checkIn)) || isNaN(new Date(checkOut))) {
    return res.status(400).json({ error: "Please enter valid dates." });
  }
  if (String(phone).length > 15) {
    return res.status(400).json({ error: "Phone number can have at most 15 characters." });
  }
  if (String(name).length > 100 || String(email).length > 100) {
    return res.status(400).json({ error: "Name and email can have at most 100 characters." });
  }
  if (checkIn >= checkOut) {
    return res.status(400).json({ error: "Check-out date must be after the check-in date." });
  }

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // 1. The room must exist and be open for booking
    const [rooms] = await conn.query("SELECT id, type, price, availability FROM Room WHERE id = ?", [roomId]);
    if (rooms.length === 0) {
      await conn.rollback();
      return res.status(404).json({ error: "Room not found." });
    }
    const room = rooms[0];
    if (!room.availability) {
      await conn.rollback();
      return res.status(409).json({ error: "This room is not available for booking." });
    }

    // 2. The room must not be booked for overlapping dates
    const [overlap] = await conn.query(
      "SELECT COUNT(*) AS n FROM Booking WHERE room_id = ? AND check_in < ? AND check_out > ?",
      [roomId, checkOut, checkIn]
    );
    if (overlap[0].n > 0) {
      await conn.rollback();
      return res.status(409).json({ error: "This room is already booked for these dates." });
    }

    // 3. Find the customer by email, or add a new customer
    let customerId;
    const [existing] = await conn.query("SELECT id FROM Customer WHERE email = ?", [email]);
    if (existing.length > 0) {
      customerId = existing[0].id;
      await conn.query("UPDATE Customer SET name = ?, phone = ? WHERE id = ?", [name, phone, customerId]);
    } else {
      const [result] = await conn.query(
        "INSERT INTO Customer (name, email, phone) VALUES (?, ?, ?)",
        [name, email, phone]
      );
      customerId = result.insertId;
    }

    // 4. Save the booking
    const [booking] = await conn.query(
      "INSERT INTO Booking (customer_id, room_id, check_in, check_out) VALUES (?, ?, ?, ?)",
      [customerId, roomId, checkIn, checkOut]
    );

    await conn.commit();

    const nights = Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000);
    res.status(201).json({
      bookingId: booking.insertId,
      roomType: room.type,
      nights,
      totalPrice: nights * Number(room.price)
    });
  } catch (err) {
    await conn.rollback();
    serverError(res, err);
  } finally {
    conn.release();
  }
});

// Cancel a booking (admin only)
app.delete("/api/bookings/:id", requireAdmin, async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM Booking WHERE id = ?", [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Booking not found." });
    }
    res.json({ message: "Booking cancelled." });
  } catch (err) {
    serverError(res, err);
  }
});

// ---------- Report (admin only) ----------
app.get("/api/report", requireAdmin, async (req, res) => {
  try {
    const [[bookings]] = await pool.query("SELECT COUNT(*) AS n FROM Booking");
    const [[available]] = await pool.query("SELECT COUNT(*) AS n FROM Room WHERE availability = TRUE");
    const [[customers]] = await pool.query("SELECT COUNT(*) AS n FROM Customer");
    res.json({
      totalBookings: bookings.n,
      availableRooms: available.n,
      totalCustomers: customers.n
    });
  } catch (err) {
    serverError(res, err);
  }
});

function serverError(res, err) {
  console.error(err.message);
  res.status(500).json({ error: "Database error: " + err.message });
}

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  try {
    await pool.query("SELECT 1");
    console.log("Connected to MySQL database hotel_db");
  } catch (err) {
    console.error("Could not connect to MySQL: " + err.message);
    console.error("Check the password in DB_CONFIG in server.js and that MySQL is running.");
  }
});
