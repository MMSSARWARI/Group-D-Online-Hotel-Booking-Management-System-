// Frontend script for the Aysan Hotel website.
// It gets data from the backend (server.js) through the /api/... addresses.

// Picture for each room type (the pictures are in the access folder)
const roomImages = {
  "Family Room": "access/family.jpg",
  "Double Room": "access/big room.jpg",
  "Room with View": "access/view.jpg",
  "Deluxe Suite": "access/195290476.jpg",
  "Single Room": "access/Hotel_Room.jpg",
  "Luxury Room": "access/Romm with TV4.jpg",
  "Connecting Rooms": "access/connection room.jpg",
  "Twin Room": "access/twing rooma.jpg"
};

const SERVER_HINT = "Could not reach the server. Start it with 'npm start' in the backend folder and open http://localhost:3000";

// Send a request to the backend and return the JSON answer
async function api(url, options = {}) {
  const token = getAdminToken();
  if (token) {
    options.headers = { ...(options.headers || {}), Authorization: "Bearer " + token };
  }
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }
  return data;
}

// The admin token is kept only for this browser tab
function getAdminToken() {
  try { return sessionStorage.getItem("adminToken"); } catch (e) { return null; }
}
function setAdminToken(token) {
  try {
    if (token) sessionStorage.setItem("adminToken", token);
    else sessionStorage.removeItem("adminToken");
  } catch (e) { /* storage not available */ }
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ------------------------------ Rooms ------------------------------
async function loadRooms() {
  const roomList = document.querySelector(".room-list");
  if (!roomList) return;

  try {
    const rooms = await api("/api/rooms");
    if (rooms.length === 0) {
      roomList.innerHTML = "<p>No rooms in the database yet.</p>";
      return;
    }
    roomList.innerHTML = rooms.map(room => `
      <div class="room-card">
        <img src="${encodeURI(roomImages[room.type] || "access/Hotel_Room.jpg")}" alt="${escapeHtml(room.type)}">
        <div class="room-card-content">
          <h3>${escapeHtml(room.type)}</h3>
          <p><strong>ID:</strong> R${String(room.id).padStart(3, "0")}</p>
          <p><strong>Price:</strong> $${room.price} per night</p>
          <p><strong>Status:</strong>
            <span style="color: ${room.availability ? "green" : "red"}">
              ${room.availability ? "Available" : "Not available"}
            </span>
          </p>
          ${room.availability
            ? `<a href="booking.html?id=${room.id}" class="btn">Book Now</a>`
            : `<span class="btn" style="background-color: #999; cursor: not-allowed;">Not available</span>`}
        </div>
      </div>
    `).join("");
  } catch (err) {
    roomList.innerHTML = `<p style="color: red;">${SERVER_HINT}</p>`;
  }
}

// ------------------------------ Admin page ------------------------------
function setupAdminPage() {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  const loginBox = document.getElementById("loginBox");
  const reportSection = document.getElementById("reporting");
  const logoutLink = document.getElementById("logoutLink");
  const loginMessage = document.getElementById("loginMessage");

  function showReport(loggedIn) {
    loginBox.style.display = loggedIn ? "none" : "block";
    reportSection.style.display = loggedIn ? "block" : "none";
    logoutLink.style.display = loggedIn ? "inline" : "none";
    if (loggedIn) loadReport();
  }

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const result = await api("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: document.getElementById("adminUsername").value.trim(),
          password: document.getElementById("adminPassword").value
        })
      });
      setAdminToken(result.token);
      loginForm.reset();
      loginMessage.textContent = "";
      loginMessage.className = "";
      showReport(true);
    } catch (err) {
      showMessage(loginMessage, err.message === "Failed to fetch" ? SERVER_HINT : err.message, false);
    }
  });

  logoutLink.addEventListener("click", async () => {
    try { await api("/api/admin/logout", { method: "POST" }); } catch (e) { /* already logged out */ }
    setAdminToken(null);
    showReport(false);
  });

  showReport(!!getAdminToken());
}

async function loadReport() {
  try {
    const [report, bookings, rooms] = await Promise.all([
      api("/api/report"),
      api("/api/bookings"),
      api("/api/rooms")
    ]);

    document.getElementById("totalBookings").textContent = report.totalBookings;
    document.getElementById("availableRooms").textContent = report.availableRooms;
    document.getElementById("totalCustomers").textContent = report.totalCustomers;

    const bookingsTable = document.getElementById("bookingsTable");
    bookingsTable.innerHTML = bookings.length === 0
      ? `<tr><td colspan="7">No bookings yet.</td></tr>`
      : bookings.map(b => `
        <tr>
          <td>${b.id}</td>
          <td>${escapeHtml(b.customer)}</td>
          <td>${escapeHtml(b.email)}</td>
          <td>${escapeHtml(b.room_type)}</td>
          <td>${b.check_in}</td>
          <td>${b.check_out}</td>
          <td><button class="btn btn-sm" onclick="cancelBooking(${b.id})">Cancel</button></td>
        </tr>`).join("");

    document.getElementById("roomsTable").innerHTML = rooms.map(r => `
      <tr>
        <td>R${String(r.id).padStart(3, "0")}</td>
        <td>${escapeHtml(r.type)}</td>
        <td>$${r.price}</td>
        <td>${r.availability ? "Available" : "Not available"}</td>
      </tr>`).join("");
  } catch (err) {
    if (/admin/i.test(err.message)) {
      // The token is no longer valid, for example after the server was restarted
      setAdminToken(null);
      location.reload();
      return;
    }
    document.getElementById("bookingsTable").innerHTML =
      `<tr><td colspan="7" style="color: red;">${SERVER_HINT}</td></tr>`;
  }
}

async function cancelBooking(id) {
  if (!confirm("Do you want to cancel booking " + id + "?")) return;
  try {
    await api("/api/bookings/" + id, { method: "DELETE" });
    loadReport();
  } catch (err) {
    alert(err.message);
  }
}

// ------------------------------ Booking ------------------------------
async function setupBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  const roomSelect = document.getElementById("roomSelect");
  const message = document.getElementById("bookingMessage");
  const checkIn = document.getElementById("checkIn");
  const checkOut = document.getElementById("checkOut");

  // Do not allow dates in the past
  const today = new Date().toISOString().split("T")[0];
  checkIn.min = today;
  checkOut.min = today;

  // Fill the room list with the available rooms from the database
  try {
    const rooms = await api("/api/rooms");
    const available = rooms.filter(r => r.availability);
    roomSelect.innerHTML = `<option value="">-- Choose a room --</option>` +
      available.map(r => `<option value="${r.id}">${escapeHtml(r.type)} ($${r.price} per night)</option>`).join("");

    // If the guest came from a "Book Now" button, select that room
    const chosenId = new URLSearchParams(window.location.search).get("id");
    if (chosenId) roomSelect.value = chosenId;
  } catch (err) {
    roomSelect.innerHTML = `<option value="">Server not running</option>`;
    showMessage(message, SERVER_HINT, false);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (checkIn.value >= checkOut.value) {
      showMessage(message, "Check-out date must be after the check-in date.", false);
      return;
    }

    const booking = {
      name: document.getElementById("guestName").value.trim(),
      email: document.getElementById("guestEmail").value.trim(),
      phone: document.getElementById("guestPhone").value.trim(),
      roomId: roomSelect.value,
      checkIn: checkIn.value,
      checkOut: checkOut.value
    };

    try {
      const result = await api("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking)
      });
      showMessage(message,
        `Booking confirmed! Booking number ${result.bookingId}: ${result.roomType}, ` +
        `${result.nights} night(s), total $${result.totalPrice}.`, true);
      form.reset();
    } catch (err) {
      showMessage(message, err.message, false);
    }
  });
}

function showMessage(element, text, success) {
  element.textContent = text;
  element.className = "message " + (success ? "success" : "error");
}

// ------------------------------ Contact ------------------------------
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const text = document.getElementById("message").value.trim();

    if (name && email && text) {
      formMessage.textContent = "Thank you for contacting us, " + name + "! We will get back to you shortly.";
      formMessage.style.color = "green";
      form.reset();
    } else {
      formMessage.textContent = "Please fill in all the fields.";
      formMessage.style.color = "red";
    }
  });
}

// Start everything when the page has loaded
document.addEventListener("DOMContentLoaded", () => {
  loadRooms();
  setupAdminPage();
  setupBookingForm();
  setupContactForm();
});
