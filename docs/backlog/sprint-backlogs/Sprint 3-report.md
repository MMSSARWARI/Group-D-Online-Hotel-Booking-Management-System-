 # Product Owner Sprint 3 Report

**Project:** Aysan Luxury Hotel Booking System  
**Product Owner:** Masoma Rezaie  
**Course:** Software Engineering – ITC315  
**Sprint:** Sprint 3 ([Enter actual start date] – [Enter actual end date])  
**Report Date:** [Enter report date]

---

## 1. Achievement of Sprint Goal

### Sprint 3 Goal

The goal of Sprint 3 is to implement the core booking-processing functionality of the Aysan Luxury Hotel Booking System. This sprint focuses on validating booking details, checking room availability, storing customer and booking information in the database, and providing booking confirmation after successful processing.

The sprint also aims to connect the frontend booking form with the backend and database so that booking information can be processed reliably.

**Planned Sprint 3 Deliverables:**
- Validation of guest and booking information.
- Room availability checking for the selected dates.
- Storage of customer information in the database.
- Storage of room and booking records with appropriate relationships.
- Booking confirmation after successful processing.
- Initial testing of booking validation, database operations, and error handling.

**Sprint Goal Status:** [Achieved / Partially Achieved / Not Achieved — select the actual result]

## 2. Completed User Stories

The following user stories are proposed for Sprint 3 based on the Product Backlog. Confirm the final selection and completion status against the actual Sprint Backlog.

| ID | User Story | Planned Story Points | Status | Notes |
|---|---|---:|---|---|
| US-06 | Check room availability | 8 | [Update] | Verify room availability for selected dates |
| US-13 | Validate booking details before submission | 5 | [Update] | Verify required fields and booking rules |
| US-14 | Receive booking confirmation | 3 | [Update] | Verify confirmation after successful processing |
| US-15 | Save customer records in the database | 5 | [Update] | Verify customer data is stored correctly |
| US-16 | Save room and booking records with relationships | 8 | [Update] | Verify booking, room, and customer relationships |

**Total planned story points:** 29

**Actual story points completed:** [Enter points for accepted stories]

**Completion percentage:** [Actual completed points ÷ planned points × 100]

*Note: The five stories total 29 points. If this exceeds your team's sprint capacity, prioritize or split the stories during Sprint Planning.*

## 3. Acceptance Criteria Review

### US-06 — Check Room Availability

**Acceptance Criteria:**
- The system accepts the requested check-in and check-out dates.
- The system checks whether the selected room is available for the requested period.
- Existing bookings are considered when checking availability.
- A room with a conflicting confirmed booking is not offered as available for the same period.
- A clear message is displayed when the room is unavailable.
- Invalid date ranges are rejected.

**Product Owner Decision:** [Accepted / Rejected / Needs Changes]

**Comments:** [Record the actual availability tests and their results.]

### US-13 — Validate Booking Details Before Submission

**Acceptance Criteria:**
- Required guest information is validated before the booking is processed.
- The selected room type must be valid.
- The check-in and check-out dates must follow the booking rules.
- Invalid or missing information produces clear error messages.
- The backend validates critical booking data instead of relying only on browser-side validation.
- Invalid booking requests are not saved as successful reservations.

**Product Owner Decision:** [Accepted / Rejected / Needs Changes]

**Comments:** [Record whether valid and invalid booking requests were tested.]

### US-14 — Receive Booking Confirmation

**Acceptance Criteria:**
- The visitor receives a confirmation message after successful booking processing.
- The confirmation reflects the actual result returned by the backend.
- The confirmation includes relevant booking details, such as room type and booking dates.
- Failed or rejected booking requests do not display a false success message.
- The system handles processing errors with an understandable message.

**Product Owner Decision:** [Accepted / Rejected / Needs Changes]

**Comments:** [Record how successful and unsuccessful booking requests were tested. If confirmation is only displayed on the website, do not claim that an email was sent.]

### US-15 — Save Customer Records in the Database

**Acceptance Criteria:**
- Valid customer information is sent to the backend.
- The backend stores the required customer information in the database.
- Required fields are checked before saving.
- The system handles database errors appropriately.
- Authorized staff or application functions can retrieve the saved records when that functionality is available.
- Sensitive information is handled securely.

**Product Owner Decision:** [Accepted / Rejected / Needs Changes]

**Comments:** [Record the database tests and whether saved records were verified.]

### US-16 — Save Room and Booking Records with Relationships

**Acceptance Criteria:**
- Room records and booking records are stored in the database according to the agreed schema.
- Each booking is associated with the correct room.
- Each booking is associated with the correct customer where the schema requires it.
- Required database relationships and constraints are enforced.
- Invalid references are rejected.
- A booking is not reported as successfully saved if the database operation fails.

**Product Owner Decision:** [Accepted / Rejected / Needs Changes]

**Comments:** [Record the actual database and relationship tests.]

## 4. Stakeholder Value Generated

### What Users Can Do After Sprint 3

If the planned features are implemented and accepted, visitors will be able to:
- Submit booking details for validation.
- Check whether a room is available for the selected dates.
- Have valid customer and booking information processed and stored.
- Receive a booking confirmation after successful processing.
- Receive an appropriate message when a booking request cannot be completed.

### Business Value

Sprint 3 develops the main functional connection between the hotel's website and its booking data. It helps move the system from a website that displays room information toward a system that can process reservation requests.

Database storage supports the maintenance of customer and booking records. Availability checking helps reduce conflicting reservations, while validation and error handling improve data quality and reliability.

## 5. Product Backlog Updates

### Items to Move to Done

The following stories should be moved to Done only after their acceptance criteria have been verified:

- US-06 — Check room availability
- US-13 — Validate booking details before submission
- US-14 — Receive booking confirmation
- US-15 — Save customer records in the database
- US-16 — Save room and booking records with relationships

**Actual completed items:** [List the stories accepted during Sprint Review.]

### Ready for Sprint 4

The proposed Sprint 4 focus is reporting, the contact form, and improvements to the user experience.

| ID | User Story | Planned Points |
|---|---|---:|
| US-17 | View booking and room report | 8 |
| US-18 | Contact hotel using contact form | 5 |
| US-19 | Use website on mobile and desktop | 5 |

**Total proposed Sprint 4 points:** 18

These are proposed assignments. Confirm the team's capacity and whether the reporting and contact-form features depend on unfinished backend work.

### Backlog Refinements

Potential refinements for Sprint 3 include:
- Defining how overlapping booking dates are detected.
- Clarifying whether bookings require a pending or confirmed status.
- Confirming the database relationships between customers, rooms, and bookings.
- Defining the exact information displayed in the booking confirmation.
- Clarifying how database failures and unavailable rooms are reported to visitors.

**Actual refinements made:** [Enter actual changes, or write “None” if accurate.]

## 6. Sprint Metrics

Complete the Actual column using your Sprint Backlog, test results, and Sprint Review.

| Metric | Target | Actual | Status |
|---|---:|---:|---|
| Story points planned | 29 | [Enter] | [Update] |
| Story points completed | 29 | [Enter] | [Update] |
| User stories planned | 5 | [Enter] | [Update] |
| User stories accepted | 5 | [Enter] | [Update] |
| Bugs found | — | [Enter] | [Update] |
| Bugs fixed | — | [Enter] | [Update] |
| Sprint goal met | Yes | [Yes/Partially/No] | [Update] |

**Completion rate:** [Actual completed points ÷ planned points × 100]

Count only completed and accepted work. If the team changes its sprint commitment during planning, update the target values to match the agreed Sprint Backlog.

## 7. Quality Assessment

### Code Quality

Review whether:
- Frontend and backend responsibilities are clearly separated.
- Database queries and data handling are implemented appropriately.
- Validation logic is organized and understandable.
- Database relationships match the intended booking process.
- Errors are handled without exposing sensitive information.
- The code is maintainable and documented where necessary.

**Rating:** [1–5, based on actual review]

### Testing Quality

Review whether:
- Valid booking requests were tested.
- Missing and invalid guest details were tested.
- Invalid date ranges were rejected.
- Room availability was checked against existing bookings.
- Customer and booking records were verified in the database.
- Failed database operations were handled appropriately.
- Confirmation was shown only after successful processing.

**Rating:** [1–5, based on actual tests]

### User Experience

Review whether:
- Booking forms provide clear feedback.
- Unavailable rooms are explained clearly.
- Confirmation messages are understandable.
- Errors do not leave visitors unsure whether a booking succeeded.
- The booking process is consistent with the website's design.

**Rating:** [1–5, based on actual review]

## 8. Issues Encountered and Blockers

### Issues

Record real defects identified during implementation and testing.

| Issue ID | Description | Severity | Status | Resolution |
|---|---|---|---|---|
| BUG-001 | [Enter actual issue, if any] | [Minor/Major/Critical] | [Open/Resolved] | [Describe the fix] |
| BUG-002 | [Enter actual issue, if any] | [Minor/Major/Critical] | [Open/Resolved] | [Describe the fix] |

Potential issues to investigate, if they occurred:
- Booking data not being saved correctly.
- Incorrect room availability results.
- Invalid dates being accepted.
- Customer and booking records being linked incorrectly.
- Confirmation appearing after a failed request.
- Backend or database connection failures.

### Blockers

**Actual blockers:** [Describe the blockers that occurred, or write “None” if accurate.]

Potential blockers include missing backend endpoints, database schema problems, integration conflicts, or incomplete room data. Include only those that affected your sprint.

## 9. Stakeholder Feedback

**Feedback received:** [Enter actual feedback from the instructor, Product Owner, teammates, or representative users.]

### Possible Improvements

- Provide clearer booking confirmation details.
- Improve messages for unavailable rooms.
- Improve handling of database or network errors.
- Review the booking form's date validation.
- Ensure booking records can be retrieved by authorized staff when that feature is implemented.

These are possible recommendations, not confirmed stakeholder comments.

## 10. Product Vision Alignment

### Product Vision

To develop a user-friendly hotel booking website that enables visitors to explore Aysan Luxury Hotel, compare room options, and submit booking requests through a clear and accessible interface.

### Sprint 3 Contribution

Sprint 3 supports the product vision by implementing the booking-processing foundation. It aims to connect customer information, room availability, booking records, and confirmation into a more complete reservation workflow.

**Alignment Assessment:** [Excellent / Good / Needs Improvement — select after review]

## 11. Sprint 4 Priorities

### High-Priority Items

- **US-17 — View booking and room report:** Enable authorized staff to review relevant booking and room information.
- **US-18 — Contact hotel using contact form:** Allow visitors to send inquiries.
- **US-19 — Use website on mobile and desktop:** Improve and verify responsive behavior.

### Proposed Sprint 4 Goal

Improve the hotel's operational and user-facing features by developing booking and room reports, implementing the contact form, and ensuring the website works well on mobile and desktop screens.

### Dependencies and Considerations

- Confirm that booking and room data are stored correctly.
- Define which booking and room fields appear in reports.
- Protect booking information so it is accessible only to authorized users.
- Decide how contact-form messages will be processed or stored.
- Test layouts at different screen sizes.
- Ensure unfinished Sprint 3 work is prioritized before dependent features.

## 12. Team Performance

### What Went Well

[Record actual examples of collaboration, backend/frontend integration, database testing, and problem-solving.]

### What Could Be Improved

[Record actual difficulties, communication problems, or lessons learned.]

### Team Velocity

**Sprint 1 planned points:** 18  
**Sprint 1 completed points:** [Confirm actual accepted points]  
**Sprint 2 planned points:** 15  
**Sprint 2 completed points:** [Enter actual accepted points]  
**Sprint 3 planned points:** 29  
**Sprint 3 completed points:** [Enter actual accepted points]

Use actual completed story points to understand the team's capacity and plan a realistic Sprint 4 commitment.

## 13. Product Owner Decisions

### Acceptance Decisions

The Product Owner should record one of the following for each story:

- **Accepted:** All agreed acceptance criteria have been met.
- **Needs Changes:** One or more acceptance criteria remain unmet.
- **Rejected:** The delivered work does not satisfy the agreed requirements.

**Stories accepted:** [List actual accepted IDs]  
**Stories requiring changes:** [List actual IDs]  
**Stories not completed:** [List actual IDs]

### Next Sprint Commitment

The proposed next steps are to:
1. Review the Sprint 3 deliverables and test results.
2. Confirm which stories have been accepted.
3. Carry forward unfinished work where appropriate.
4. Verify that the booking and database workflow works correctly.
5. Prioritize reporting, contact-form functionality, and responsive design.
6. Agree on the Sprint 4 goal and workload during Sprint Planning.

## 14. Recommendations

### For Sprint 4

- Develop useful booking and room reports.
- Implement the contact form with appropriate validation.
- Improve responsive design for mobile and desktop.
- Ensure booking information is accessible only to authorized users.
- Test the integration of frontend, backend, and database features.

### For Future Sprints

- Complete remaining functional requirements.
- Test security and data integrity.
- Improve performance and error handling.
- Review accessibility and browser compatibility.
- Complete technical documentation and final system testing.

## 15. Product Owner Approval

**Sprint 3 Status:** [Approved / Approved with Changes / Not Approved]

I, Masoma Rezaie, have reviewed the Sprint 3 deliverables and their acceptance criteria. Based on the actual implementation, testing, and Sprint Review, the following decisions are recorded:

- **Sprint goal:** [Met / Partially Met / Not Met]
- **Acceptance criteria:** [Met for accepted stories / Changes required]
- **Readiness for Sprint 4:** [Ready / Not Yet Ready]

**Product Owner:** Masoma Rezaie  
**Signature:** [If required]  
**Date:** [Enter actual approval date]

## 16. References

Use the repository paths below if these files exist in your project:

- Product Backlog: `/backlog/product-backlog.md`
- Sprint 3 Backlog: `/docs/sprint-backlogs/sprint-3-backlog.md`
- Test Results: `/docs/testing/test-results-sprint3.md`
- Sprint Review Notes: `/docs/meeting-minutes/sprint-review-sprint3.md`
- Source Code Repository: [Insert your actual GitHub repository link]

**Prepared by:** Masoma Rezaie  
**Next Review:** Sprint 4 Review — [Enter planned date]
