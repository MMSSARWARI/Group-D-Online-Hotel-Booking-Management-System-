# Product Backlog
# Aysan Luxury Hotel Booking System Backlog

**Product Owner:** Masoma Rezaie  
**Course:** Software Engineering – ITC315  
**Project Title:** Online Hotel Booking System  
**Technology Stack:** HTML, CSS, JavaScript, MySQL  
**Prepared Date:** October 26, 2026

## 1. Introduction

The Product Backlog is the ordered list of work items required to develop, improve, and maintain the Aysan Luxury Hotel Booking System. It is derived from the system requirements and includes functional User Stories, non-functional requirements, and technical tasks.

Each backlog item includes a unique ID, description, acceptance criteria, priority, effort estimation in Story Points, proposed Sprint assignment, and responsible team member or role.

The purpose of the system is to provide users with an online platform where they can explore hotel information, browse room types, compare prices, and submit room booking requests. The system includes Home, About Us, Rooms, Booking, and Contact pages and uses HTML, CSS, JavaScript, and MySQL.

## 2. Functional Backlog Items (User Stories)

| ID | User Story | Acceptance Criteria | Priority | Estimation (Story Points) | Sprint | Responsible |
|---|---|---|---|---:|---|---|
| US-01 | As a visitor, I want to browse the hotel homepage so that I can learn about Aysan Luxury Hotel. | Homepage loads successfully; hotel introduction and main navigation are displayed; links work correctly. | High | 3 | Sprint 1 | Frontend Developer 1 |
| US-02 | As a visitor, I want to read hotel information so that I can understand the hotel's services and atmosphere. | About Us section or page is accessible; hotel information is displayed clearly; navigation works. | Medium | 2 | Sprint 1 | Frontend Developer 1 |
| US-03 | As a visitor, I want to browse room types so that I can compare my accommodation options. | Room listings are displayed; each listing identifies its room type; room information is readable. | High | 5 | Sprint 1 | Frontend Developer 1 |
| US-04 | As a visitor, I want to view room photos so that I can understand what each room looks like. | Each relevant room displays its photo; images load correctly; images fit the page layout. | Medium | 3 | Sprint 1 | Frontend Developer 1 |
| US-05 | As a visitor, I want to view room prices so that I can choose a room within my budget. | Prices are displayed beside the correct rooms; price formatting is consistent; room and price information match. | High | 3 | Sprint 1 | Frontend Developer 1 |
| US-06 | As a visitor, I want to check room availability so that I do not request a room that is already booked. | Availability is checked for the requested dates; overlapping confirmed bookings are handled correctly; unavailable rooms cannot be confirmed. | High | 8 | Sprint 3 | Backend/Database Developer |
| US-07 | As a visitor, I want to select Book Now for a room so that I can start a booking. | Book Now opens the booking form; the selected room is identified correctly; the user can continue entering booking details. | High | 3 | Sprint 2 | Frontend Developer 1 |
| US-08 | As a guest, I want to enter my full name so that the hotel can identify my booking. | A name field is provided; required-field validation works; the entered name is included in the booking request. | High | 2 | Sprint 2 | Frontend Developer 2 |
| US-09 | As a guest, I want to enter my email and phone number so that the hotel can contact me. | Email and phone fields are available; required formats are validated as appropriate; valid contact details are submitted. | High | 3 | Sprint 2 | Frontend Developer 2 |
| US-10 | As a guest, I want to select a room type on the booking form so that my request identifies the room I want. | Room options are displayed correctly; the selected room is recorded; invalid room selections are rejected. | High | 3 | Sprint 2 | Frontend Developer 2 |
| US-11 | As a guest, I want to choose a check-in date so that the hotel knows when my stay begins. | A check-in date can be selected; past dates are rejected where appropriate; the selected date is recorded. | High | 2 | Sprint 2 | Frontend Developer 2 |
| US-12 | As a guest, I want to choose a check-out date so that the hotel knows when my stay ends. | A check-out date can be selected; it must be later than check-in; invalid date ranges are rejected. | High | 2 | Sprint 2 | Frontend Developer 2 |
| US-13 | As a guest, I want the system to validate my booking details before submission so that incorrect requests can be prevented. | Required fields are checked; invalid dates and contact details are rejected; clear error messages are displayed. | High | 5 | Sprint 3 | Frontend Developer 2 + Backend/Database Developer |
| US-14 | As a guest, I want to receive a clear confirmation after submitting a booking so that I know my request was received. | Successful submissions display a confirmation; failed submissions display an error; a success message is shown only after the system confirms the result. | High | 3 | Sprint 3 | Frontend Developer 2 + Backend/Database Developer |
| US-15 | As hotel staff, I want customer details saved in the database so that customer information can be retrieved later. | Valid customer details are saved; records can be retrieved through an authorized application function; invalid data is not stored. | High | 5 | Sprint 3 | Backend/Database Developer |
| US-16 | As hotel staff, I want room and booking records saved with appropriate relationships so that bookings can be managed reliably. | Room and booking records are stored correctly; database relationships preserve record integrity; invalid room references are rejected. | High | 8 | Sprint 3 | Backend/Database Developer |
| US-17 | As hotel staff, I want to view booking totals and room status so that I can monitor hotel activity. | An authorized staff interface displays booking totals and room status; displayed information matches the database; results update when relevant records change. | Medium | 8 | Sprint 4 | Backend/Database Developer + Frontend Developer 1 |
| US-18 | As a visitor, I want to send a message through a contact form so that I can ask the hotel questions. | Contact fields are available; required fields are validated; successful messages receive an appropriate confirmation or are saved for staff review. | Medium | 5 | Sprint 4 | Frontend Developer 1 + Backend/Database Developer |
| US-19 | As a visitor, I want the website to adapt to different screen sizes so that I can use it on a phone or computer. | Main pages display correctly on desktop and mobile sizes; text and images remain readable; navigation and booking controls remain usable. | High | 5 | Sprint 4 | Frontend Developer 1 |
| US-20 | As a visitor, I want navigation links to take me to the correct page or section so that I can find information easily. | Navigation links open the intended destinations; important pages are reachable; broken internal links are corrected. | Medium | 2 | Sprint 1 | Frontend Developer 1 |

**Note:** The acceptance criteria for US-06 and US-15 through US-17 describe functionality that must be verified or implemented if it is not currently available. These stories should not be marked Done simply because the relevant page or database exists.

## 3. Enhancement Tasks

Enhancement tasks improve the existing product or add capabilities beyond the currently implemented functionality.

| ID | Enhancement | Acceptance Criteria | Priority | Estimation (Story Points) | Sprint | Responsible |
|---|---|---|---|---:|---|---|
| ENH-01 | Add a hotel staff dashboard | Authorized staff can access a dashboard; key booking information is displayed; unauthorized visitors cannot access staff functions. | Medium | 8 | Sprint 4 | Backend/Database Developer + Frontend Developer 1 |
| ENH-02 | Add booking search and filtering | Staff can search booking records by relevant criteria; returned records match the search; empty results are handled clearly. | Medium | 5 | Sprint 5 | Backend/Database Developer |
| ENH-03 | Add booking status management | Authorized staff can update booking status; changes are saved; invalid status changes are rejected. | Medium | 5 | Sprint 5 | Backend/Database Developer + Frontend Developer 2 |
| ENH-04 | Improve room availability management | Availability is calculated for selected dates; overlapping bookings are prevented; room availability reflects saved booking data. | High | 8 | Sprint 5 | Backend/Database Developer |
| ENH-05 | Improve booking confirmation notifications | Guests receive an appropriate confirmation through the implemented notification method; failed notifications are handled; sensitive data is not exposed. | Low | 5 | Sprint 5 | Backend/Database Developer |

These enhancements are optional backlog items and should be selected according to the project's scope, available time, and stakeholder priorities.

## 4. Non-Functional Backlog Items (Technical Stories)

Non-functional requirements describe the quality, security, reliability, compatibility, and maintainability of the system rather than individual business features.

| ID | Technical Story | Acceptance Criteria | Priority | Estimation (Story Points) | Sprint | Responsible |
|---|---|---|---|---:|---|---|
| NFR-001 | As a system, I must protect communication between users and the website. | Deployed pages use HTTPS; invalid or insecure requests are handled appropriately; no sensitive information is transmitted over unprotected connections. | High | 3 | Sprint 1 | Backend/Deployment Developer |
| NFR-002 | As a system, I should load pages efficiently under normal conditions. | Representative pages meet an agreed response-time target under a documented test setup; performance problems are recorded and addressed. | High | 5 | Sprint 4 | Frontend Developer 1 + Tester |
| NFR-003 | As a system, I must protect database access and booking information. | Database credentials are not exposed in browser code or the public repository; database operations are authorized; user inputs are safely handled. | High | 8 | Sprint 3 | Backend/Database Developer |
| NFR-004 | As a system, I should work on commonly used browsers. | Main pages and booking functions are tested on agreed versions of Chrome, Firefox, and Edge; significant compatibility defects are documented and fixed. | Medium | 3 | Sprint 4 | Tester + Frontend Developer 1 |
| NFR-005 | As a system, I should be usable on desktop and mobile devices. | Pages are checked at agreed desktop and mobile viewport sizes; no essential controls are inaccessible due to layout problems. | High | 5 | Sprint 4 | Frontend Developer 1 |
| NFR-006 | As a system, I must preserve the integrity of stored booking records. | Database constraints and validation prevent invalid references; test cases cover failed and successful booking operations; stored records remain consistent. | High | 5 | Sprint 3 | Backend/Database Developer |
| NFR-007 | As a system, I should provide clear error handling. | Invalid submissions show understandable messages; unexpected failures do not expose technical secrets; errors are logged where appropriate. | Medium | 3 | Sprint 4 | Backend/Database Developer + Tester |
| NFR-008 | As a system, I should maintain modular and documented code. | Source files have a clear structure; setup instructions are documented; major functions and database configuration are explained; changes are tracked in GitHub. | Medium | 3 | Sprint 5 | All Developers |

The security, performance, compatibility, and reliability criteria must be verified through appropriate testing. They are requirements, not claims that the current implementation already satisfies them.

## 5. Prioritization Strategy

The Product Owner prioritizes backlog items according to business value, user needs, dependencies, risk, and available resources.

**High Priority**
- Core hotel and room information.
- Booking form and booking details.
- Validation and confirmation of booking requests.
- Database integrity and protection of booking information.
- Room availability and prevention of conflicting reservations.

**Medium Priority**
- Contact form improvements.
- Responsive layout and navigation improvements.
- Hotel staff reporting and dashboard functionality.
- Browser compatibility and maintainability.

**Low Priority**
- Optional notification enhancements.
- Additional convenience features that are not essential to the first usable version.

Priorities may change as the team receives feedback. Security and data-integrity requirements should not be ignored simply because they are technically complex.

## 6. Sprint Planning Guidance

The following five-Sprint plan is a proposed way to organize the backlog. It must be adapted to the team's actual schedule, completed work, and capacity.

### Sprint 1 — Hotel Information and Navigation

**Sprint Goal:** Provide a working hotel information website that allows visitors to explore the hotel and its rooms.

Planned items:
- US-01: Browse hotel homepage.
- US-02: Read hotel information.
- US-03: Browse room types.
- US-04: View room photos.
- US-05: View room prices.
- US-20: Navigate between pages and sections.
- NFR-001: Protect website communication, as applicable to the deployment.

**Expected Delivery:** A usable hotel website with working navigation and room information.

### Sprint 2 — Booking Form

**Sprint Goal:** Allow guests to enter the information needed to request a room booking.

Planned items:
- US-07: Open booking form.
- US-08: Enter guest name.
- US-09: Enter guest contact details.
- US-10: Select room type.
- US-11: Choose check-in date.
- US-12: Choose check-out date.

**Expected Delivery:** A working booking interface that captures the required guest and stay details.

### Sprint 3 — Booking Processing and Data Integrity

**Sprint Goal:** Process booking requests reliably and store the relevant information correctly.

Planned items:
- US-06: Check room availability.
- US-13: Validate booking details.
- US-14: Receive booking confirmation.
- US-15: Save customer records.
- US-16: Save room and booking records.
- NFR-003: Protect database access.
- NFR-006: Preserve database integrity.

**Expected Delivery:** A tested booking workflow with appropriate validation and reliable database operations.

### Sprint 4 — Contact, Reporting, and Quality Improvements

**Sprint Goal:** Improve usability and provide the necessary tools for monitoring the system.

Planned items:
- US-17: View booking and room report.
- US-18: Contact the hotel.
- US-19: Use website on mobile and desktop.
- ENH-01: Add a hotel staff dashboard, if approved.
- NFR-002: Improve page performance.
- NFR-004: Test browser compatibility.
- NFR-005: Verify responsive usability.
- NFR-007: Improve error handling.

**Expected Delivery:** A more usable and testable system with contact functionality and, if implemented, staff reporting.

### Sprint 5 — Final Improvements and Documentation

**Sprint Goal:** Complete approved enhancements, improve maintainability, and prepare the system for final evaluation.

Planned items:
- ENH-02: Add booking search and filtering.
- ENH-03: Add booking status management.
- ENH-04: Improve room availability management.
- ENH-05: Improve booking confirmation notifications.
- NFR-008: Improve code organization and documentation.
- Final regression testing and documentation review.

**Expected Delivery:** A tested release candidate with completed documentation and any approved enhancements that fit the remaining project capacity.

## 7. Backlog Refinement and Sprint Changes

The Product Backlog should be reviewed regularly. During refinement, the team clarifies requirements, checks acceptance criteria, estimates effort, and adjusts priorities where necessary.

For the Aysan Luxury Hotel Booking System, room availability and booking validation may become more urgent if testing reveals that users can request already-booked rooms. In that case, the Product Owner can move these items higher in the backlog, and the team can discuss their inclusion during Sprint Planning.

Changes should be recorded with the reason for the change. For example:

- Room availability may be prioritized if conflicting reservations are discovered.
- Database security may become urgent if credentials are exposed or authorization is missing.
- Reporting may be postponed if reliable booking storage has not yet been completed.

This demonstrates an adaptive approach to development. However, changes should reflect actual decisions and feedback rather than being recorded as historical events that did not occur.

## 8. Definition of Done

A backlog item should only be marked Done when the team has verified that it meets the agreed Definition of Done.

For this project, a suggested Definition of Done is:

- The feature meets its acceptance criteria.
- The implementation is integrated with the rest of the application.
- Relevant tests have been completed and passed.
- Significant defects have been resolved or explicitly documented.
- Database changes, if applicable, have been tested.
- Relevant project documentation has been updated.
- The completed work is committed to the GitHub repository.
- No known critical security or data-integrity issue prevents the feature from being safely used.

## 9. Estimation and Backlog Maintenance

Story Points are relative estimates of effort, complexity, and uncertainty. They are not hours or days. The team should agree on its estimation approach and revise estimates when new information becomes available.

The proposed Sprint assignments and estimates in this document are starting points for team discussion. Before final submission, the team should verify the actual implementation, decide which items belong in the project scope, and confirm that each Sprint contains a realistic amount of work.

The Product Owner maintains the ordered Product Backlog. The Developers estimate the work and decide how to implement the selected items. The Scrum Master helps the team use Scrum effectively and improve its process.

## 10. Conclusion

The Product Backlog for the Aysan Luxury Hotel Booking System organizes the system's main user-facing features, booking functionality, database requirements, and quality improvements into prioritized work items. It provides a foundation for Sprint Planning, system modeling, development, testing, and progress tracking.

By maintaining clear acceptance criteria, realistic priorities, and an up-to-date backlog, the team can demonstrate how Software Engineering principles and the Scrum framework support the development and improvement of the hotel booking system.

**Prepared by:** [Your Name]  
**Role:** Product Owner / Project Team Member  
**Course:** Software Engineering – ITC315

| ID | User Story | Priority | Story Points | Sprint | Status |
|---|---|---|---|---|---|
| US-01 | As a ..., I want ..., so that ... | High | | | To Do |
