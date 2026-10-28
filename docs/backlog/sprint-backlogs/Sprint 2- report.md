# Product Owner Sprint 2 Report

**Project:** Aysan Luxury Hotel Booking System  
**Product Owner:** Masoma Rezaie  
**Course:** Software Engineering – ITC315  
**Sprint:** Sprint 2 Oct-21-2026  
 

---

## 1. Achievement of Sprint Goal

### Sprint 2 Goal

The goal of Sprint 2 is to develop the hotel booking form and enable visitors to enter the information required to make a room reservation. This sprint focuses on allowing users to open the booking form, enter their names and contact information, select a room type, and choose check-in and check-out dates.

The sprint also aims to improve the user experience by providing a clear form layout and validating the information entered by visitors.

**Planned Sprint 2 Deliverables:**
- A working Book Now button that opens the booking form.
- A field for the guest's name.
- Fields for the guest's email address and phone number.
- A room-type selection field.
- Check-in and check-out date fields.
- Initial form validation and testing.
- Integration preparation for future backend and database processing.

**Sprint Goal Status:** Achieved  

## 2. Completed User Stories

The following user stories were selected for Sprint 2 based on the Product Backlog.

| ID | User Story | Story Points | Status | Notes |
|---|---|---:|---|---|
| US-07 | Open booking form via Book Now | 3 | Done | Verify the button opens the correct form |
| US-08 | Enter guest name | 2 | Done | Verify name input |
| US-09 | Enter guest email/phone | 3 | Done | Verify contact information fields |
| US-10 | Select room type on booking form | 3 | Done  | Verify room selection |
| US-11 | Choose check-in date | 2 | Done  | Verify arrival date input |
| US-12 | Choose check-out date | 2 | Done  | Verify departure date input |

**Total planned story points:** 15

**Actual story points completed:** 15

**Completion percentage:** 100%

## 3. Acceptance Criteria Review

### US-07 — Open Booking Form

**Acceptance Criteria:**
- The Book Now button is visible in the appropriate location.
- Clicking the button opens the booking form or navigates to its page.
- The booking form displays the required input fields.
- The form is accessible from the main hotel website.

**Product Owner Decision:**  Accepted  

**Comments:**  The button and booking form were tested successfully. 

### US-08 — Enter Guest Name

**Acceptance Criteria:**
- The form provides a field for the guest's name.
- The guest can enter their name.
- The field has a clear label.
- The system identifies a missing name if the field is required.
- The entered information is available for subsequent booking validation.

**Product Owner Decision:**  Accepted 

**Comments:**   the input and validation test get results. 

### US-09 — Enter Guest Email/Phone

**Acceptance Criteria:**
- The form provides fields for the guest's email address and phone number.
- The fields have clear labels.
- The system validates the email format when an email is provided.
- The system validates the phone number according to the project's chosen rules.
- Missing or invalid required contact information produces a clear message.

**Product Owner Decision:**  Accepted  

**Comments:**   valid and invalid contact information was tested. 

### US-10 — Select Room Type

**Acceptance Criteria:**
- The form provides a room-type selection field.
- The available room types match those presented on the Rooms page.
- The visitor can select a room type.
- The selected room type remains available for booking validation.
- The form prevents submission without a required room selection.

**Product Owner Decision:**  Accepted  

**Comments:**  the available options and selected value were tested. 

### US-11 — Choose Check-in Date

**Acceptance Criteria:**
- The form provides a check-in date field.
- The visitor can select or enter a check-in date.
- The field follows the date format used by the form.
- The system prevents invalid or disallowed dates according to the booking rules.

**Product Owner Decision:**  Accepted 

**Comments:**  date-selection tests and any validation issues. 

### US-12 — Choose Check-out Date

**Acceptance Criteria:**
- The form provides a check-out date field.
- The visitor can select or enter a check-out date.
- The check-out date must be later than the check-in date.
- The system displays a clear validation message if the dates are invalid.
- The selected dates are available for subsequent booking processing.

**Product Owner Decision:**  Accepted  

**Comments:**   valid dates and an invalid date range were tested. 

## 4. Stakeholder Value Generated

### What Users Can Do After Sprint 2

If the planned features are implemented and accepted, visitors will be able to:
- Open the hotel booking form.
- Enter their names and contact information.
- Select their preferred room type.
- Choose their intended check-in and check-out dates.
- Prepare the required information for a booking request.

### Business Value

Sprint 2 moves the project beyond displaying hotel information and toward the actual booking process. It establishes the user interface needed to collect reservation details and provides a foundation for validating and saving booking requests in later sprints.

The form also helps identify missing or invalid information before the booking process proceeds.

**Note:** A completed booking form does not necessarily mean a reservation is saved or confirmed. These functions depend on the implementation of the booking-processing and database features.

## 5. Product Backlog Updates

### Items to Move to Done

The following stories should be moved to Done only after their acceptance criteria have been verified:

- US-07 — Open booking form via Book Now
- US-08 — Enter guest name
- US-09 — Enter guest email/phone
- US-10 — Select room type on booking form
- US-11 — Choose check-in date
- US-12 — Choose check-out date

**Actual completed items:** US-07, US-08, US-09, US-010, US-011- US-012

### Ready for Sprint 3

Sprint 3 should focus on validating booking details, processing booking requests, and integrating the backend with the database.

| ID | User Story | Planned Points |
|---|---|---:|
| US-06 | Check room availability | 8 |
| US-13 | Validate booking details before submission | 5 |
| US-14 | Receive booking confirmation | 3 |
| US-15 | Save customer records in the database | 5 |
| US-16 | Save room and booking records with relationships | 8 |

**Total proposed Sprint 3 points:** 29
 

### Backlog Refinements

Potential refinements for Sprint 2 include:
- Clarifying which guest contact fields are required.
- Defining rules for valid check-in and check-out dates.
- Confirming how the selected room type is passed to the booking form.
- Identifying the backend API and database dependencies.
- Clarifying the difference between submitting a request and receiving a confirmed reservation.

**Actual refinements made:**  “None”  

## 6. Sprint Metrics

 
| Metric | Target | Actual | Status |
|---|---:|---:|---|
| Story points planned | 15 | 15 | Done |
| Story points completed | 15 | 15 | Done |
| User stories planned | 6 | 6| Done |
| User stories accepted | 6 | 6 |   |
| Bugs found | — | 0 |   |
| Bugs fixed | — |   |   |
| Sprint goal met | Yes | Yes  | Done |

**Completion rate:** 100%

 

## 7. Quality Assessment

### Code Quality

The following aspects should be reviewed:
- The booking form uses organized HTML elements and clear labels.
- CSS styles are consistent with the existing hotel website.
- JavaScript validation is organized and understandable.
- Form fields have appropriate input types.
- The code is maintainable and can be integrated with the backend.

**Rating:** 4/5

### Testing Quality

The following tests should be performed:
- Open the booking form using the Book Now button.
- Enter valid and invalid guest details.
- Test missing required fields.
- Select different room types.
- Test valid and invalid date ranges.
- Verify that validation messages are understandable.
- Test the form on the screen sizes and browsers supported by the project.

**Rating:** 5/5

### User Experience

Review whether:
- The booking form is easy to understand.
- Field labels and instructions are clear.
- Users can select dates and room types easily.
- Error messages explain how to correct invalid information.
- The form is consistent with the existing website design.

**Rating:** 5/5

 
### Potential Blockers to Review

- Difficulty connecting the booking form to the backend.
- Incorrect or missing room data.
- Date validation problems.
- Conflicts between team members' code changes.
- GitHub integration or merge conflicts.
- Missing API endpoints or database tables.

**Actual blockers:**   “None” 
## 9. Stakeholder Feedback
 

### Possible Improvements

- Make the Book Now button easy to locate.
- Use clear labels and helpful placeholders in the form.
- Display understandable validation messages.
- Improve the date-selection interface.
- Ensure that the booking form works well on mobile and desktop screens.

These are recommendations to consider, not confirmed stakeholder comments.

## 10. Product Vision Alignment
 
 

### Sprint 2 Contribution

Sprint 2 supports the product vision by introducing the booking form and collecting the information required to initiate a reservation. It connects the hotel browsing experience developed in Sprint 1 with the booking-processing features planned for subsequent sprints.

**Alignment Assessment:** Excellent  

## 11. Sprint 3 Priorities

### High-Priority Items

- **US-13 — Validate booking details:** Check required fields and booking information before submission.
- **US-15 — Save customer records:** Store guest information through the backend and database.
- **US-16 — Save room and booking records:** Establish the required relationships between rooms, customers, and bookings.
- **US-06 — Check room availability:** Check whether the selected room is available for the requested dates.
- **US-14 — Receive booking confirmation:** Provide confirmation after the booking request has been successfully processed.

### Proposed Sprint 3 Goal

Implement the booking-processing workflow so that valid booking requests can be validated, checked against room availability, saved through the backend, and confirmed to the visitor when the required processing succeeds.

### Dependencies and Considerations

- Confirm that the backend endpoints are available.
- Review the database schema and relationships.
- Validate booking dates and required guest information on the server.
- Prevent unavailable rooms from being booked for overlapping dates.
- Display confirmation only after the backend reports a successful result.
- Test database errors and invalid booking requests.

 
### Team Velocity

**Sprint 1 planned points:** 18  
**Sprint 1 completed points:** 18 
**Sprint 2 planned points:** 15  
**Sprint 2 completed points:** 15

### Next Sprint Commitment

The proposed next steps are to:
1. Review Sprint 2 deliverables and test results.
2. Confirm which stories have been accepted.
3. Carry forward unfinished work where appropriate.
4. Review backend and database dependencies.
5. Prioritize booking validation, availability checking, and data storage.
6. Agree on the Sprint 3 goal and workload during Sprint Planning.

## 14. Recommendations

### For Sprint 3

- Implement reliable booking validation.
- Connect the booking form to the backend.
- Save customer and booking records in the database.
- Verify room availability before confirming reservations.
- Handle database errors safely.
- Test successful and unsuccessful booking requests.

### For Future Sprints

- Develop booking reports for hotel staff.
- Implement the contact form.
- Improve responsive design and accessibility.
- Test data integrity and security.
- Review error handling and performance.
- Complete project documentation and final testing.

## 15. Product Owner Approval

**Sprint 2 Status:** Approved  

I, Masoma Rezaie, have reviewed the Sprint 2 deliverables and their acceptance criteria. Based on the actual implementation, testing, and Sprint Review, the following decisions are recorded:

- **Sprint goal:** Met 
- **Acceptance criteria:** Met for accepted stories  
- **Readiness for Sprint 3:** Ready 

**Product Owner:** Masoma Rezaie  
**Signature:** 
**Date:** Oct-22-2026

## 16. References
 
- Product Backlog: `/backlog/product-backlog.md`
- Sprint 2 Backlog: `/docs/sprint-backlogs/sprint-2-report.md`
- Test Results: `/docs/testing/test-results-sprint2.md`
- Sprint Review Notes: `/docs/meeting-minutes/sprint-review-sprint2.md`
 
**Prepared by:** Masoma Rezaie  
**Next Review:** Sprint 3 Review 
 
