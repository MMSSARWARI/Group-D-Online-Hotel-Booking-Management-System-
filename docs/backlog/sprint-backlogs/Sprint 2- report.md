# Product Owner Sprint 2 Report

#**Project:** Aysan Luxury Hotel Booking System 

#**Product Owner:** Masoma Rezaie

**Course:** Software Engineering -- ITC315

**Sprint:** Sprint 2 (Oct-21-2026

## 1. Achievement of Sprint Goal

### Sprint 2 Goal

The goal of Sprint 2 is to develop the main hotel booking form so that
visitors can start a booking request, enter their contact details,
select a room type, and choose check-in and check-out dates.

The work should build on the website pages developed in Sprint 1 and
prepare the booking form for validation and backend/database integration
in a later sprint.

**Planned Deliverables:** - A working "Book Now" link or button. -
Booking form with guest name and contact fields. - Room-type
selection. - Check-in and check-out date fields. - Basic form usability
and input checks. - Testing of booking form navigation and fields.

**Sprint Goal Status:**  Achieved 

## 2. Completed User Stories

  -------------------------------------------------------------------------
  ID            User Story        Planned Story Status        Notes
                                         Points               
  ------------- ------------- ----------------- ------------- -------------
  US-07         Open booking                  3 Completed    Verify the
                form via Book                                 button opens
                Now                                           the correct
                                                              form

  US-08         Enter guest                   2 Completed     Verify the
                name                                          name field

  US-09         Enter guest                   3 Completed    Verify
                email/phone                                   contact
                                                              fields

  US-10         Select room                   3 Completed    Verify room
                type on                                       options
                booking form                                  

  US-11         Choose                        2 Completed    Verify date
                check-in date                                 input

  US-12         Choose                        2 Completed    Verify date
                check-out                                     input
                date                                          
  -------------------------------------------------------------------------

**Total planned story points:** 15
**Actual story points completed:** 15

## 3. Acceptance Criteria Review

### US-07 --- Open Booking Form via Book Now

**Acceptance Criteria:** - The Book Now button or link is visible in the
relevant page or room listing. - Selecting it opens the booking form or
the correct booking section. - The form is accessible without broken
links.

**Product Owner Decision:**  Accepted  
 

### US-08 --- Enter Guest Name

**Acceptance Criteria:** - The form provides a guest-name field. - The
field has a clear label. - Required-field validation is applied if
agreed by the team. - The form can display a useful message when the
field is missing or invalid.

**Product Owner Decision:**  Accepted 

### US-09 --- Enter Guest Email/Phone

**Acceptance Criteria:** - The form provides the agreed contact
fields. - Labels indicate what information is required. - Email or phone
input is checked for basic validity where applicable. - Invalid or
missing contact information is handled clearly.

**Product Owner Decision:**  Accepted 

### US-10 --- Select Room Type

**Acceptance Criteria:** - Visitors can choose from the room types
offered by the hotel. - Each option has a clear room name. - The
selected room type is included in the booking form data. - The options
correspond to the room types presented on the website.

**Product Owner Decision:**  Accepted 

### US-11 --- Choose Check-in Date

**Acceptance Criteria:** - The form provides a check-in date field. -
The date can be selected or entered in the supported format. - The field
is clearly labelled. - Invalid or missing input is handled
appropriately.

**Product Owner Decision:** \[Accepted / Needs Changes / Rejected\]\
**Comments:** \[Record the actual result.\]

### US-12 --- Choose Check-out Date

**Acceptance Criteria:** - The form provides a check-out date field. -
The field is clearly labelled. - The selected date can be included in
the booking request. - The check-out date must be later than the
check-in date when date validation is implemented.

**Product Owner Decision:**  Accepted 

## 4. Stakeholder Value Generated

### What Users Can Do After Sprint 2

If the stories are completed and accepted, visitors can open the booking
form, provide their contact details, choose a room type, and enter their
intended stay dates.

### Business Value

Sprint 2 moves the project from hotel information pages toward the core
booking process. It establishes the user-input interface needed for
later validation, booking storage, and confirmation.

## 5. Product Backlog Updates

### Items to Move to Done

Move only stories whose acceptance criteria have been verified: - US-07
--- Open booking form via Book Now - US-08 --- Enter guest name - US-09
--- Enter guest email/phone - US-10 --- Select room type on booking
form - US-11 --- Choose check-in date - US-12 --- Choose check-out date

**Actually accepted stories:** US-010, US-012, US-11

### Ready for Sprint 3

  ID      User Story                                           Planned Story Points
  ------- -------------------------------------------------- ----------------------
  US-06   Check room availability                                                 8
  US-13   Validate booking details before submission                              5
  US-14   Receive booking confirmation                                            3
  US-15   Save customer records in database                                       5
  US-16   Save room and booking records with relationships                        8

**Total proposed Sprint 3 points:** 29

These items may be split or reprioritized if the team's capacity is
lower. Database and backend work should be coordinated with the
frontend.

 

## 6. Sprint Metrics

  Metric                     Target                 Actual Status
  ------------------------ -------- ---------------------- ------------
  Story points planned           15              15\ Done
  Story points completed         15              \15 \Done
  User stories planned            6              \6 \Done
  User stories accepted           6              \6 \Done
  Bugs found                    ---              \0 \ 
  Bugs fixed                    ---              \- \ 
  Sprint goal met               Yes   \Yes   \Done

## 7. Quality Assessment

**Code Quality:** Review form structure, readable HTML/CSS, maintainable
JavaScript, and consistent styling.\
**Rating:** 4/5
**Testing Quality:** Test required fields, room selection, date inputs,
links, and invalid entries.\
**Rating:**4/5
**User Experience:** Check form labels, instructions, readability, and
error messages.\
**Rating:** 5/5


  -------------------------------------------------------------------------------------------

## 9. Stakeholder Feedback

**Feedback received:** 
Improve field labels, show clear validation
messages, make the form easier to use on mobile screens, and clarify
which fields are required.

## 10. Product Vision Alignment

**Product Vision:** To develop a user-friendly hotel booking website
that enables visitors to explore Aysan Luxury Hotel, compare room
options, and submit booking requests through a clear and accessible
interface.

**Sprint 2 Contribution:** The booking form lets visitors begin
providing the information required for a reservation.

**Alignment Assessment:** Excellent 

## 11. Sprint 3 Priorities

-   US-06 --- Check room availability.
-   US-13 --- Validate booking details before submission.
-   US-14 --- Receive booking confirmation.
-   US-15 --- Save customer records in the database.
-   US-16 --- Save room and booking records with relationships.

**Proposed Sprint 3 Goal:** Connect the booking process to validation
and backend/database operations so that booking details can be checked
and saved reliably.

**Dependencies:** Confirm backend endpoints, database schema, room
identifiers, date rules, error handling, and how confirmation will be
shown to users.

 
## 13. Product Owner Decisions

**Next Sprint Commitment:** 1. Review the actual Sprint 2 results. 2.
Resolve unfinished form work. 3. Confirm backend and database
dependencies. 4. Agree on Sprint 3 scope and capacity.

## 14. Recommendations

-   Test invalid and missing form inputs.
-   Ensure the check-out date is later than the check-in date.
-   Coordinate form fields with backend requirements.
-   Keep the form responsive and accessible.
-   Avoid storing real passwords or sensitive booking data in browser
    `localStorage`; use the approved backend/database design.

## 15. Product Owner Approval

**Sprint 2 Status:** Approved  

I, Masoma Rezaie, have reviewed the Sprint 2 deliverables against the
acceptance criteria recorded in this report.

-   Sprint goal: Met  
-   Readiness for Sprint 3: Ready  

**Product Owner:** Masoma Rezaie

## 16. References

-   Product Backlog: `backlog/product-backlog.md`
-   Sprint 2 Backlog: `docs/sprint-backlogs/sprint-2-backlog.md`
-   Test Results: `docs/testing/test-results-sprint2.md`
-   Sprint Review Notes: `docs/meeting-minutes/sprint-review-sprint2.md`

**Prepared by:** Masoma Rezaie
**Next Review:** Sprint 3 Review  

