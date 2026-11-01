# Requirements of the Implemented System

Project: Aysan Luxury Hotel Booking System (Group D)
Course: Software Engineering, ITC315
Version: 2.0, 1 November 2026

This document describes the requirements of the system as it was built at the end of Sprint 6. The general requirements that the team agreed at the start are in docs/Requirement_Specification.md (version 1.0, Product Owner). Here we write which of them were implemented, how, and how they were tested. The test case IDs (TC and UI) refer to docs/testing/test-report.md.

## 1. Scope

The system is a website for one hotel. Guests can read about the hotel, see the rooms with prices and photos, book a room and send a message. The hotel admin can log in, see all bookings and cancel a booking.

The system has three parts:

| Part | Technology | Files |
|---|---|---|
| Frontend | HTML, CSS, JavaScript | frontend/index.html, booking.html, admin.html, script.js, styles.css |
| Backend | Node.js with Express | backend/server.js |
| Database | MySQL, database hotel_db | database/database.sql |

The website runs on the computer of the user at http://localhost:3000. It is not published on the internet.

## 2. Users of the System

| Actor | Description | What the actor can do |
|---|---|---|
| Guest | Any person who opens the website. No login is needed. | See hotel information and rooms, book a room, send a contact message |
| Admin | A hotel staff member with the admin ID and password | Log in, see the report with all bookings and customers, cancel bookings, log out |

## 3. Functional Requirements

Status: Done means the requirement is implemented and the tests passed. Partly done means only a part is implemented.

| ID | Requirement | User story | Status | Tests |
|---|---|---|---|---|
| FR-01 | The home page shows the hotel name and a welcome text. | US-01 | Done | TC02 |
| FR-02 | The home page has an About Us section with information about the hotel. | US-02 | Done | TC02 |
| FR-03 | The Rooms section shows all rooms from the Room table. For each room it shows the room type, the room ID, the price per night and the status (Available or Not available). | US-03, US-05 | Done | TC01, UI01 |
| FR-04 | Each room shows a photo that matches its room type. | US-04 | Done | TC04, UI02 |
| FR-05 | A room that is not available has no Book Now button. | US-06 | Done | UI03 |
| FR-06 | The Book Now button opens the booking page with this room already selected. | US-07 | Done | UI06 |
| FR-07 | The booking form asks for full name, email and phone number. All three are required. | US-08, US-09 | Done | TC08 |
| FR-08 | The room list in the booking form shows only available rooms, with the price per night. | US-10 | Done | UI06 |
| FR-09 | The guest chooses a check-in date and a check-out date. Dates before today cannot be chosen. | US-11, US-12 | Done | UI07 |
| FR-10 | The system checks the booking before it is saved: all fields are filled, the dates are real dates, the check-out date is after the check-in date, the phone number has at most 15 characters, and name and email have at most 100 characters. The check is done in the browser and again in the backend. | US-13 | Done | TC06, TC07, TC08, TC19, TC20, UI08 |
| FR-11 | The system refuses a booking for a room that is marked as not available, and for a room that is already booked on any of the chosen nights. A booking can start on the day another booking of the same room ends. | US-06 | Done | TC09, TC10, TC11 |
| FR-12 | When the booking is accepted, the system saves the customer in the Customer table and the booking in the Booking table. If a customer with the same email already exists, the system uses this customer and does not create a second one. Both steps are done in one database transaction. | US-15, US-16 | Done | TC05, TC13 |
| FR-13 | After a successful booking the guest sees a message with the booking number, the room type, the number of nights and the total price. If the booking is refused, the guest sees the reason. | US-14 | Done | TC05, UI09 |
| FR-14 | The Contact section shows the hotel email, phone and address, and has a form with name, email and message. After sending, the guest sees a thank you message. | US-18 | Partly done: the message is not saved and not sent to the hotel | UI11 |
| FR-15 | The menu links lead to the correct section or page. | US-20 | Done | Not in the test report |
| FR-16 | The admin logs in on admin.html with an admin ID and a password, and can log out. A wrong ID or password shows "Wrong admin ID or password." | ENH-01 | Done | TC25, TC26, TC27, TC29, UI15, UI16, UI19 |
| FR-17 | After login the admin sees the report: total bookings, available rooms, total customers, a list of all bookings (number, customer name, email, room type, dates) and a list of all rooms with their status. | US-17 | Done | TC14, TC15, UI04, UI05, UI17 |
| FR-18 | The admin can cancel a booking with the Cancel button. The system asks for confirmation first. | US-17 | Done | TC16, TC17, UI10 |
| FR-19 | Guests cannot see the report or the list of bookings, and cannot cancel bookings. The backend refuses these requests without a valid admin login, even if they are sent directly. | ENH-01 | Done | TC21, TC22, TC23, TC24, UI13, UI14 |
| FR-20 | The website can be used on a computer and on a phone. | US-19 | Partly done: the room cards adapt to the screen width, but the menu bar has fixed margins and does not fit on a phone screen. Not tested on a phone. | None |

## 4. Non-Functional Requirements

| ID | Requirement | Status | How it is met, or what is missing |
|---|---|---|---|
| NFR-01 | Security | Partly met | Admin functions are checked in the backend (TC21 to TC24). The MySQL password is not stored in the code; it is typed when the server starts. All database queries use placeholders, so input text cannot change the query (TC18). Missing: the admin ID and password are written in server.js and are the same for every installation, the website uses HTTP and not HTTPS because it only runs on localhost, and the admin must log in again after the server restarts. |
| NFR-02 | Performance | Not measured | The team did not measure page load times. |
| NFR-03 | Usability | Met | Every field has a label, and every error has a message in plain words (UI08, UI09, UI16). |
| NFR-04 | Browser compatibility | Partly met | Tested only in Google Chrome and Chromium. Firefox and Edge were not tested. |
| NFR-05 | Responsive design | Partly met | See FR-20. |
| NFR-06 | Data integrity | Met | Booking has foreign keys to Customer and Room. All columns are NOT NULL. A booking for a room that does not exist is refused (TC12). Double bookings are refused (TC10). One customer per email (TC13). |
| NFR-07 | Error handling | Partly met | Wrong input gets a clear message (TC06 to TC12, TC19, TC20). Missing: if the database itself fails, the backend sends the technical error text to the browser, and the admin page shows "Could not reach the server" for every kind of error. |
| NFR-08 | Maintainability | Met | Frontend, backend and database are in separate folders. The code has comments. The README explains how to install and run the system, also from VS Code. |
| NFR-09 | Reliability | Met | The success message is shown only after the backend has saved the booking (UI09). |
| NFR-10 | Privacy | Met | The system asks only for name, email and phone. Only the admin can see customer data (TC22, UI13). |
| NFR-11 | Data validation | Met | Input is checked in the browser and again in the backend (FR-10). |

## 5. Use Case Descriptions

| ID | Use case | Actor |
|---|---|---|
| UC-01 | View hotel information | Guest |
| UC-02 | Browse rooms | Guest |
| UC-03 | Book a room | Guest |
| UC-04 | Send a contact message | Guest |
| UC-05 | Log in as admin | Admin |
| UC-06 | View booking and room report | Admin |
| UC-07 | Cancel a booking | Admin |
| UC-08 | Log out | Admin |

### UC-03 Book a room

| Item | Description |
|---|---|
| Actor | Guest |
| Precondition | The server is running and the room is available. |
| Main flow | 1. The guest clicks Book Now on a room. 2. The booking page opens with the room selected. 3. The guest enters name, email, phone, check-in and check-out date. 4. The guest clicks Confirm Booking. 5. The browser checks the dates. 6. The backend checks all fields, the room and the dates. 7. The backend saves the customer and the booking. 8. The guest sees the booking number, the number of nights and the total price. |
| Alternative flow A | Step 5 or 6: the check-out date is not after the check-in date. The guest sees "Check-out date must be after the check-in date." Nothing is saved. |
| Alternative flow B | Step 6: the room is already booked on these dates. The guest sees "This room is already booked for these dates." Nothing is saved. |
| Alternative flow C | Step 6: a field is missing or too long. The guest sees a message that says which rule was broken. Nothing is saved. |
| Postcondition | One new row in Booking. A new row in Customer only if the email was not used before. |

### UC-07 Cancel a booking

| Item | Description |
|---|---|
| Actor | Admin |
| Precondition | The admin is logged in on admin.html. |
| Main flow | 1. The admin clicks Cancel next to a booking. 2. The browser asks "Do you want to cancel booking N?". 3. The admin confirms. 4. The backend checks the admin login and deletes the booking. 5. The report is loaded again without this booking. |
| Alternative flow A | Step 3: the admin clicks Cancel in the question. Nothing changes. |
| Alternative flow B | Step 4: the login is not valid any more, for example after a server restart. The booking is not deleted and the admin sees "Only the admin can do this. Please log in on the admin page." |
| Postcondition | The row is removed from Booking. The customer stays in Customer. |

## 6. Data Requirements

| Table | Columns | Rules |
|---|---|---|
| Room | id, type, price, availability | id is created by the database. type has at most 50 characters. price is a decimal number per night. availability is true or false. |
| Customer | id, name, email, phone | name and email have at most 100 characters, phone at most 15. The backend keeps one customer per email. |
| Booking | id, customer_id, room_id, check_in, check_out | customer_id must exist in Customer, room_id must exist in Room. check_out is after check_in. Two bookings of the same room cannot share a night. |

The full description of each column is in docs/data_dictionary.txt.

## 7. Booking Rules

1. A guest can book only a room whose availability is true.
2. The stay is at least one night. The number of nights is the check-out date minus the check-in date.
3. Total price = number of nights x price per night of the room.
4. A booking can start on the same day another booking of the same room ends, because the first guest leaves that day.
5. Only the admin can cancel a booking.

## 8. Not Implemented

These items were in the product backlog or the first plan but are not part of the final system.

| Item | Backlog ID |
|---|---|
| Search and filter in the booking list | ENH-02 |
| Booking status (for example confirmed, checked in); the admin can only cancel | ENH-03 |
| Email confirmation to the guest | ENH-05 |
| Admin page to add rooms or change prices and availability; this is done in MySQL Workbench | Sprint 5 plan in README |
| Saving or sending contact messages | US-18 |
| Online payment and customer accounts | Out of scope (Requirement Specification 2.2) |
| Publishing the website on the internet with HTTPS | NFR-001 |
