# Test Report

Project: Aysan Luxury Hotel Booking System (Group D)
Sprint: Sprint 6
Test date: 29 October 2026
Tested version: backend (Node.js and Express), frontend (HTML, CSS, JavaScript), database hotel_db (MySQL)

## 1. Scope

This report covers the testing of the complete system at the end of the project. In the earlier sprints, the team checked the pages by opening them in the browser, but these checks were not written down as test cases. In Sprint 6 the team tested all functions with the test cases below and wrote down the results.

The tests use the test data in database/database.sql. Before each test run the database was reset by running database.sql again.

## 2. Test Environment

| Item | Value |
|---|---|
| Server | Node.js with Express, started with `npm start` |
| Database | MySQL compatible server, database hotel_db |
| Browser | Chromium |
| Address | http://localhost:3000 |

## 3. Testing Process

### 3.1 Types of testing

| Type | What we tested | How |
|---|---|---|
| Functional testing | Each function works as described in the user stories: list rooms, book a room, cancel a booking, report, admin login | Backend test cases TC01 to TC17 |
| Negative testing | The system rejects wrong input with a clear message and does not save it | TC06 to TC10, TC12, TC17, TC19, TC20, UI08 |
| Boundary testing | Values at the limit: check-in and check-out on the same day, a booking that starts on the check-out day of another booking, a phone number of 16 characters | TC07, TC11, TC19 |
| Integration testing | The website, the backend and the MySQL database work together, and the numbers on the website are the same as in the database | TC13, TC14, UI04, UI05, UI09, UI10 |
| User interface testing | Pages, pictures, buttons and forms in the browser | UI01 to UI12 |
| Security testing | Only the admin can see all bookings and the report, and cancel bookings | TC21 to TC27, TC29, UI13 to UI19 |
| Regression testing | After each fix, all test cases were run again to check that nothing else stopped working | Full run after the fixes of D08, D09 and D10 |

### 3.2 Steps

1. Reset the database by running database/database.sql in MySQL Workbench, so every run starts with the same test data (8 rooms, 3 customers, 3 bookings).
2. Start the server with start.bat or `npm start` in the backend folder.
3. Run the backend test cases in section 4 by sending requests to the backend and comparing the answer with the expected result.
4. Do the website tests in the browser at http://localhost:3000, following the table in section 5.
5. Compare the results with the data in MySQL Workbench, for example with `SELECT * FROM Booking;`.
6. Write every failed test case in the defect table (section 6) with what went wrong and where.
7. Fix the defect in the code, then repeat steps 1 to 5 for all test cases, not only for the failed one.
8. Mark the defect as fixed only when all test cases pass.

## 4. Backend Test Cases

| ID | Test case | Input | Expected result | Actual result | Status |
|---|---|---|---|---|---|
| TC01 | List rooms | GET /api/rooms | 8 rooms, 6 available | 8 rooms, 6 available | Pass |
| TC02 | Open home page | GET / | Page loads (HTTP 200) | HTTP 200 | Pass |
| TC03 | Open booking page | GET /booking.html | Page loads (HTTP 200) | HTTP 200 | Pass |
| TC04 | Load room picture | GET /access/big room.jpg | Picture loads (HTTP 200) | HTTP 200 | Pass |
| TC05 | Valid booking | Room 6, 10 to 13 Nov 2026 | Booking saved, 3 nights, total $1797 | Booking 4 saved, 3 nights, $1797 | Pass |
| TC06 | Check-out before check-in | 20 Nov to 18 Nov | Rejected with message | HTTP 400, "Check-out date must be after the check-in date." | Pass |
| TC07 | Check-in and check-out on the same day | 20 Nov to 20 Nov | Rejected with message | HTTP 400, same message | Pass |
| TC08 | Missing fields | Only name and room | Rejected with message | HTTP 400, "Please fill in all fields." | Pass |
| TC09 | Room not available | Room 2 (Double Room) | Rejected with message | HTTP 409, "This room is not available for booking." | Pass |
| TC10 | Overlapping dates | Room 6, 12 to 15 Nov (room 6 is booked 10 to 13 Nov) | Rejected with message | HTTP 409, "This room is already booked for these dates." | Pass |
| TC11 | Booking that starts on the check-out day of another booking | Room 6, 13 to 15 Nov | Booking saved | Booking 5 saved | Pass |
| TC12 | Room that does not exist | Room 99 | Rejected with message | HTTP 404, "Room not found." | Pass |
| TC13 | Same customer books again | Same email as TC05 | Booking saved, no second customer row | Booking saved, 1 customer row for this email | Pass |
| TC14 | Report totals (logged in as admin) | GET /api/report | Totals equal the counts in the database | 6 bookings, 6 available rooms, 5 customers, same as in MySQL | Pass |
| TC15 | List bookings (logged in as admin) | GET /api/bookings | All bookings with customer and room | 6 bookings | Pass |
| TC16 | Cancel booking (logged in as admin) | DELETE /api/bookings/4 | Booking deleted | HTTP 200, "Booking cancelled." | Pass |
| TC17 | Cancel the same booking again (logged in as admin) | DELETE /api/bookings/4 | Rejected with message | HTTP 404, "Booking not found." | Pass |
| TC18 | Name with an apostrophe | Name "O'Brien" | Saved correctly | Saved as O'Brien | Pass |
| TC19 | Phone number longer than 15 characters | "+123456789012345" (16 characters) | Rejected with a clear message | First run: HTTP 500 with a database error. After fix: HTTP 400, "Phone number can have at most 15 characters." | Pass after fix |
| TC20 | Text instead of a date | "hello" and "world" | Rejected with a clear message | First run: HTTP 500 with a database error. After fix: HTTP 400, "Please enter valid dates." | Pass after fix |

| TC21 | Cancel a booking without admin login | DELETE /api/bookings/1, no token | Rejected | HTTP 401, "Only the admin can do this." | Pass |
| TC22 | See all bookings without admin login | GET /api/bookings, no token | Rejected | HTTP 401 | Pass |
| TC23 | See the report without admin login | GET /api/report, no token | Rejected | HTTP 401 | Pass |
| TC24 | Cancel with a made-up token | Authorization: Bearer abc | Rejected | HTTP 401 | Pass |
| TC25 | Admin login with a wrong password | ID "admin", password "guess" | Rejected | HTTP 401, "Wrong admin ID or password." | Pass |
| TC29 | Admin login with a wrong ID | ID "boss", password "1234" | Rejected | HTTP 401, "Wrong admin ID or password." | Pass |
| TC26 | Admin login with the right ID and password | ID "admin", password "1234" | Token returned | Token of 48 characters returned | Pass |
| TC27 | Use the token after log out | Old token | Rejected | HTTP 401 | Pass |
| TC28 | Customer can still book and see rooms without login | POST /api/bookings, GET /api/rooms | Booking saved, rooms listed | HTTP 201 and HTTP 200 | Pass |

## 5. Website Test Cases

| ID | Test case | Expected result | Actual result | Status |
|---|---|---|---|---|
| UI01 | Rooms on the home page | 8 room cards from the database | 8 cards | Pass |
| UI02 | Room pictures | All 8 pictures load | 8 of 8 | Pass |
| UI03 | Unavailable rooms | No Book Now button for the 2 unavailable rooms | 2 rooms show "Not available" | Pass |
| UI04 | Report totals on the admin page | Numbers come from the database | Total bookings shown | Pass |
| UI05 | Current bookings table on the admin page | Bookings from the database are listed | Rows shown | Pass |
| UI06 | Book Now button | Booking page opens with the chosen room selected | booking.html?id=1, Family Room selected | Pass |
| UI07 | Past dates | Dates before today cannot be chosen | Minimum date is today | Pass |
| UI08 | Wrong dates in the form | Message shown, nothing saved | "Check-out date must be after the check-in date." | Pass |
| UI09 | Booking from the form | Green message with booking number and price | "Booking confirmed! Booking number 9: Family Room, 2 night(s), total $518." | Pass |
| UI10 | Cancel button on the admin page | Booking removed from the list | 8 rows before, 7 rows after | Pass |
| UI11 | Contact form | Thank you message | Message shown | Pass |
| UI12 | Page opened without the server | Clear message telling the user to start the server | Message shown | Pass |

| UI13 | Public website | No report and no Cancel button for customers | Not shown | Pass |
| UI14 | Public menu | No Report link in the menu | Not shown | Pass |
| UI15 | Admin page before login | Only the login form is shown | Only login form | Pass |
| UI16 | Admin login with a wrong password | Message, report stays hidden | "Wrong admin ID or password." | Pass |
| UI17 | Admin login with the right ID and password | Report with bookings is shown | Report shown with all bookings | Pass |
| UI18 | Reload the admin page | Admin stays logged in in the same tab | Still logged in | Pass |
| UI19 | Log out | Report is hidden, login form is shown | Login form shown | Pass |

## 6. Defects Found and Fixed

| ID | Defect | Where | Fix | Status |
|---|---|---|---|---|
| D01 | "Book Now" buttons linked to book.html, a page that does not exist | index.html | Buttons now link to booking.html with the room ID | Fixed |
| D02 | Bootstrap was not loaded on the booking page because of a typing error in the link tag (`<linkhref`) | booking.html | Corrected the link tag | Fixed |
| D03 | Three rooms had the same ID (R006) | index.html | Rooms and IDs now come from the database | Fixed |
| D04 | The contact form script stopped with an error on the booking page, because that page has no contact form | script.js | The script checks first if the form exists | Fixed |
| D05 | Pictures did not load, because they were in access/access and the pages looked in frontend/access | repository | Pictures moved to frontend/access | Fixed |
| D06 | The header was outside the body tag | booking.html | Moved the header inside the body | Fixed |
| D07 | Rooms, prices and report numbers were typed into the HTML and did not come from the database | index.html, script.js | Added the backend, the pages now read the data from hotel_db | Fixed |
| D08 | A phone number longer than 15 characters caused a server error (TC19) | server.js | Added a length check with a clear message | Fixed |
| D09 | Text instead of a date caused a server error (TC20) | server.js | Added a date format check with a clear message | Fixed |

| D10 | Every visitor could see all customers' names and booking dates in the Report section and cancel any booking, because the report and the Cancel button were on the public home page and the backend did not check who sent the request | index.html, server.js | Moved the report to a separate admin page (admin.html) with an admin ID and password. The backend now accepts the booking list, the report and cancelling only from a logged-in admin | Fixed |

## 7. Summary

| Item | Number |
|---|---|
| Test cases | 48 |
| Passed on first run | 46 |
| Passed after fix | 2 |
| Failed | 0 |
| Defects found and fixed | 10 |
