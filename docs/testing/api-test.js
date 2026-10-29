// Automated backend tests for the Aysan Hotel Booking System.
// How to run:
//   1. Run database/database.sql in MySQL Workbench (fresh test data).
//   2. Start the server (start.bat or npm start in the backend folder).
//   3. In a second terminal, in the project folder: node docs/testing/api-test.js

const BASE = "http://localhost:3000";
let passed = 0, failed = 0;

async function call(method, path, body) {
  const res = await fetch(BASE + path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  let data; try { data = JSON.parse(text); } catch { data = text; }
  return { status: res.status, data };
}

function check(id, name, ok, info) {
  if (ok) passed++; else failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${id}  ${name}${info ? "  (" + info + ")" : ""}`);
}

const guest = (extra) => ({ name: "Test Guest", email: "guest@test.com", phone: "+393330000000", ...extra });

(async () => {
  let r = await call("GET", "/api/rooms");
  check("TC01", "List rooms", r.status === 200 && r.data.length === 8, r.data.length + " rooms");

  r = await call("GET", "/");
  check("TC02", "Open home page", r.status === 200);

  r = await call("GET", "/booking.html");
  check("TC03", "Open booking page", r.status === 200);

  r = await call("GET", "/access/big%20room.jpg");
  check("TC04", "Load room picture", r.status === 200);

  r = await call("POST", "/api/bookings", guest({ roomId: 6, checkIn: "2026-11-10", checkOut: "2026-11-13" }));
  const firstBooking = r.data.bookingId;
  check("TC05", "Valid booking", r.status === 201 && r.data.nights === 3 && r.data.totalPrice === 1797, JSON.stringify(r.data));

  r = await call("POST", "/api/bookings", guest({ roomId: 6, checkIn: "2026-11-20", checkOut: "2026-11-18" }));
  check("TC06", "Check-out before check-in is rejected", r.status === 400, r.data.error);

  r = await call("POST", "/api/bookings", guest({ roomId: 6, checkIn: "2026-11-20", checkOut: "2026-11-20" }));
  check("TC07", "Same-day booking is rejected", r.status === 400, r.data.error);

  r = await call("POST", "/api/bookings", { name: "A", roomId: 6 });
  check("TC08", "Missing fields are rejected", r.status === 400, r.data.error);

  r = await call("POST", "/api/bookings", guest({ roomId: 2, checkIn: "2026-11-20", checkOut: "2026-11-22" }));
  check("TC09", "Unavailable room is rejected", r.status === 409, r.data.error);

  r = await call("POST", "/api/bookings", guest({ email: "b@test.com", roomId: 6, checkIn: "2026-11-12", checkOut: "2026-11-15" }));
  check("TC10", "Overlapping dates are rejected", r.status === 409, r.data.error);

  r = await call("POST", "/api/bookings", guest({ email: "b@test.com", roomId: 6, checkIn: "2026-11-13", checkOut: "2026-11-15" }));
  check("TC11", "Booking from the check-out day of another booking", r.status === 201);

  r = await call("POST", "/api/bookings", guest({ roomId: 99, checkIn: "2026-11-13", checkOut: "2026-11-15" }));
  check("TC12", "Room that does not exist is rejected", r.status === 404, r.data.error);

  const before = (await call("GET", "/api/report")).data.totalCustomers;
  r = await call("POST", "/api/bookings", guest({ roomId: 7, checkIn: "2026-11-10", checkOut: "2026-11-11" }));
  const after = (await call("GET", "/api/report")).data.totalCustomers;
  check("TC13", "Same customer books again, no new customer row", r.status === 201 && before === after);

  const report = (await call("GET", "/api/report")).data;
  const list = (await call("GET", "/api/bookings")).data;
  check("TC14", "Report total bookings equals the booking list", report.totalBookings === list.length, JSON.stringify(report));
  check("TC15", "List bookings", Array.isArray(list) && list.length > 0, list.length + " bookings");

  r = await call("DELETE", "/api/bookings/" + firstBooking);
  check("TC16", "Cancel booking", r.status === 200);

  r = await call("DELETE", "/api/bookings/" + firstBooking);
  check("TC17", "Cancel the same booking again is rejected", r.status === 404);

  r = await call("POST", "/api/bookings", { name: "O'Brien", email: "ob@test.com", phone: "1", roomId: 8, checkIn: "2026-12-01", checkOut: "2026-12-02" });
  check("TC18", "Name with an apostrophe", r.status === 201);

  r = await call("POST", "/api/bookings", guest({ phone: "+123456789012345", roomId: 8, checkIn: "2026-12-05", checkOut: "2026-12-06" }));
  check("TC19", "Phone longer than 15 characters is rejected", r.status === 400, r.data.error);

  r = await call("POST", "/api/bookings", guest({ roomId: 8, checkIn: "hello", checkOut: "world" }));
  check("TC20", "Text instead of a date is rejected", r.status === 400, r.data.error);

  console.log(`\n${passed} passed, ${failed} failed`);
  console.log("Run database/database.sql again to remove the test bookings.");
})().catch(err => {
  console.error("Could not run the tests. Is the server running at " + BASE + "?\n" + err.message);
});
