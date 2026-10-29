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
| Functional testing | Each function works as described in the user stories: list rooms, book a room, cancel a booking, report | Backend test cases TC01 to TC17 |
| Negative testing | The system rejects wrong input with a clear message and does not save it | TC06 to TC10, TC12, TC17, TC19, TC20, UI08 |
| Boundary testing | Values at the limit: check-in and check-out on the same day, a booking that starts on the check-out day of another booking, a phone number of 16 characters | TC07, TC11, TC19 |
| Integration testing | The website, the backend and the MySQL database work together, and the numbers on the website are the same as in the database | TC13, TC14, UI04, UI05, UI09, UI10 |
| User interface testing | Pages, pictures, buttons and forms in the browser | UI01 to UI12 |
| Regression testing | After each fix, all test cases were run again to check that nothing else stopped working | Full run after the fixes of D08 and D09 |

### 3.2 Steps

1. Reset the database by running database/database.sql in MySQL Workbench, so every run starts with the same test data (8 rooms, 3 customers, 3 bookings).
2. Start the server with start.bat or `npm start` in the backend folder.
3. Run the backend tests with `node docs/testing/api-test.js` in a second terminal. The script sends requests to the backend and prints PASS or FAIL for each test case.
4. Do the website tests in the browser at http://localhost:3000, following the table in section 5.
5. Compare the results with the data in MySQL Workbench, for example with `SELECT * FROM Booking;`.
6. Write every failed test case in the defect table (section 6) with what went wrong and where.
7. Fix the defect in the code, then repeat steps 1 to 5 for all test cases, not only for the failed one.
8. Mark the defect as fixed only when all test cases pass.

### 3.3 How to repeat the tests

Any team member can repeat the backend tests on their own laptop:

```
node docs/testing/api-test.js
```

The script needs a running server and fresh test data. On 29 October 2026 the result was "20 passed, 0 failed". The tests add test bookings to the database, so run database.sql again afterwards.

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
| TC14 | Report totals | GET /api/report | Totals equal the counts in the database | 6 bookings, 6 available rooms, 5 customers, same as in MySQL | Pass |
| TC15 | List bookings | GET /api/bookings | All bookings with customer and room | 6 bookings | Pass |
| TC16 | Cancel booking | DELETE /api/bookings/4 | Booking deleted | HTTP 200, "Booking cancelled." | Pass |
| TC17 | Cancel the same booking again | DELETE /api/bookings/4 | Rejected with message | HTTP 404, "Booking not found." | Pass |
| TC18 | Name with an apostrophe | Name "O'Brien" | Saved correctly | Saved as O'Brien | Pass |
| TC19 | Phone number longer than 15 characters | "+123456789012345" (16 characters) | Rejected with a clear message | First run: HTTP 500 with a database error. After fix: HTTP 400, "Phone number can have at most 15 characters." | Pass after fix |
| TC20 | Text instead of a date | "hello" and "world" | Rejected with a clear message | First run: HTTP 500 with a database error. After fix: HTTP 400, "Please enter valid dates." | Pass after fix |

## 5. Website Test Cases

| ID | Test case | Expected result | Actual result | Status |
|---|---|---|---|---|
| UI01 | Rooms on the home page | 8 room cards from the database | 8 cards | Pass |
| UI02 | Room pictures | All 8 pictures load | 8 of 8 | Pass |
| UI03 | Unavailable rooms | No Book Now button for the 2 unavailable rooms | 2 rooms show "Not available" | Pass |
| UI04 | Report totals | Numbers come from the database | Total bookings shown | Pass |
| UI05 | Current bookings table | Bookings from the database are listed | Rows shown | Pass |
| UI06 | Book Now button | Booking page opens with the chosen room selected | booking.html?id=1, Family Room selected | Pass |
| UI07 | Past dates | Dates before today cannot be chosen | Minimum date is today | Pass |
| UI08 | Wrong dates in the form | Message shown, nothing saved | "Check-out date must be after the check-in date." | Pass |
| UI09 | Booking from the form | Green message with booking number and price | "Booking confirmed! Booking number 9: Family Room, 2 night(s), total $518." | Pass |
| UI10 | Cancel button in the report | Booking removed from the list | 8 rows before, 7 rows after | Pass |
| UI11 | Contact form | Thank you message | Message shown | Pass |
| UI12 | Page opened without the server | Clear message telling the user to start the server | Message shown | Pass |

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

## 7. Summary

| Item | Number |
|---|---|
| Test cases | 32 |
| Passed on first run | 30 |
| Passed after fix | 2 |
| Failed | 0 |
| Defects found and fixed | 9 |
