# Online Hotel Booking Management System (Group D)

Software Engineering Scrum Project.

## 1. Project Overview

**Description:** The Online Hotel Booking Management System is a web application where guests can search for rooms, book them, pay and manage their reservations online. Hotel staff and administrators can manage rooms, prices, bookings and customers from one dashboard.

**Objective:** To build a working booking system using software engineering principles and the Scrum model, with all requirements, diagrams, backlogs and meeting records stored in this repository.

## 2. Team Structure

| Role | Member Name | Responsibilities |
|---|---|---|
| Product Owner | Masoma Rezaie | Maintains the product backlog, hosts sprint planning and review meetings, records minutes |
| Scrum Master | Razia Alizada | Facilitates daily stand-ups, manages sprint timing, helps write user stories |
| Developer 1 | Mohammad Mahdi Sarwari | Requirements, system modeling, development |
| Developer 2 | Raufa Rauf | Development, testing documentation,UML diagrams |

## 3. Scrum Framework

Total sprints: 6

| Sprint | Dates | Delivery |
|---|---|---|
| Sprint 1 | 11 to 13 Oct 2026 | Kickoff meeting, roles, repository and Trello setup, tech stack, first draft of user stories |
| Sprint 2 | 14 to 21 Oct 2026 | 20 user stories, prioritised product backlog, requirement specification, use case diagram |
| Sprint 3 | 20 to 24 Oct 2026 | Sequence diagrams, database design, user registration and login |
| Sprint 4 | 24 to 28 Oct 2026 | Room search, room booking, booking cancellation |
| Sprint 5 | 25 to 28 Oct 2026 | Payment, admin room management, booking history |
| Sprint 6 | 29 Oct to 1 Nov 2026 | Reports, testing, final review and retrospective, final documentation |

Meetings: at least two team meetings every week, plus sprint planning at the start and sprint review and retrospective at the end of each sprint.

## 4. Tech Stack

Frontend: HTML, CSS and JavaScript

Backend: Node.js with Express

Database: MySQL (hotel_db)

## 5. Repository Structure

| Folder | Content |
|---|---|
| docs/requirements | Requirement specification, user stories |
| docs/diagrams | Use case and sequence diagrams (draw.io) |
| docs/backlog | Product backlog and sprint backlogs |
| docs/meetings | Agendas and minutes for every meeting, by sprint |
| docs/review | Sprint review and retrospective documents |
| recordings | Meeting recordings or links, by sprint |
| sprint-analytics | Burndown charts |
| backend, frontend, database | Source code |

## How to Run the System

1. Install MySQL Server and MySQL Workbench, and Node.js (LTS) from https://nodejs.org
2. In MySQL Workbench, open database/database.sql and run the whole file (Ctrl+Shift+Enter). It creates hotel_db, the tables and test data.
3. On Windows, double-click start.bat. It installs the packages, asks for your MySQL root password, starts the server and opens the website.
   Other systems: open a terminal in the backend folder and run `npm install`, then `DB_PASSWORD=yourpassword npm start`.
4. The website runs at http://localhost:3000. Keep the server window open while you use it.

### Backend API

| Method | Address | Description |
|---|---|---|
| GET | /api/rooms | List all rooms |
| GET | /api/bookings | List all bookings |
| POST | /api/bookings | Create a booking |
| DELETE | /api/bookings/:id | Cancel a booking |
| GET | /api/report | Totals for the report |

## Tools

GitHub, Trello, Google Meet, Zoom, draw.io, Google Docs.
