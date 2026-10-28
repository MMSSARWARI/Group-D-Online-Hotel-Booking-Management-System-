# Product Owner Sprint 4 Report

**Project:** Aysan Luxury Hotel Booking System  
**Product Owner:** Masoma Rezaie  
**Course:** Software Engineering – ITC315  
**Sprint:** Sprint 4 ([Enter actual start date] – [Enter actual end date])  
**Report Date:** [Enter report date]

---

## 1. Achievement of Sprint Goal

### Sprint 4 Goal

The goal of Sprint 4 is to improve the operational functionality and accessibility of the Aysan Luxury Hotel Booking System. This sprint focuses on allowing authorized staff to view booking and room reports, enabling visitors to contact the hotel through a contact form, and improving the website's usability on mobile phones, tablets, and desktop computers.

The sprint also aims to test the integration of the frontend, backend, and database and improve the overall user experience.

**Planned Sprint 4 Deliverables:**
- A booking and room reporting feature.
- A contact form for hotel inquiries.
- Responsive layouts for mobile and desktop screens.
- Input validation for the contact form.
- Appropriate access restrictions for booking reports.
- Initial testing of reports, contact-form submission, and responsive layouts.

**Sprint Goal Status:** [Achieved / Partially Achieved / Not Achieved — select the actual result]

## 2. Completed User Stories

The following user stories are proposed for Sprint 4 based on the Product Backlog.

| ID | User Story | Planned Story Points | Status | Notes |
|---|---|---:|---|---|
| US-17 | View booking and room report | 8 | [Update] | Verify report data and access permissions |
| US-18 | Contact hotel using contact form | 5 | [Update] | Verify form validation and message handling |
| US-19 | Use website on mobile and desktop | 5 | [Update] | Verify responsive layouts |

**Total planned story points:** 18

**Actual story points completed:** [Enter points for accepted stories]

**Completion percentage:** [Actual completed points ÷ 18 × 100]

## 3. Acceptance Criteria Review

### US-17 — View Booking and Room Report

**Acceptance Criteria:**
- Authorized staff can access the booking and room report.
- The report displays relevant booking information from the database.
- Room information is displayed accurately.
- Report data reflects the records available in the system.
- The report is organized and readable.
- Unauthorized visitors cannot access restricted booking information.

**Product Owner Decision:** [Accepted / Rejected / Needs Changes]

**Comments:** [Record the actual report, database, and access-control test results.]

### US-18 — Contact Hotel Using Contact Form

**Acceptance Criteria:**
- The website provides a contact form for visitors.
- The form includes the required contact fields, such as name, email, and message.
- Required fields are validated before submission.
- Invalid email addresses or missing required fields produce clear error messages.
- The system provides feedback after the message is processed.
- Contact messages are handled according to the implemented design, such as being stored or sent through a configured service.

**Product Owner Decision:** [Accepted / Rejected / Needs Changes]

**Comments:** [Record whether valid and invalid submissions were tested and whether messages were handled correctly.]

### US-19 — Use Website on Mobile and Desktop

**Acceptance Criteria:**
- The website layout adapts to different screen sizes.
- Navigation remains usable on mobile and desktop devices.
- Room photographs and room details display appropriately.
- Booking and contact forms remain readable and usable.
- Text and buttons do not overlap or become inaccessible at the screen sizes tested.
- The website is tested in the browsers and device sizes supported by the project.

**Product Owner Decision:** [Accepted / Rejected / Needs Changes]

**Comments:** [Record the devices, browsers, and screen sizes tested.]

## 4. Stakeholder Value Generated

### What Users Can Do After Sprint 4

If the planned features are implemented and accepted, users will benefit from:
- More accessible hotel information and booking interfaces across different devices.
- A way to send inquiries to the hotel through the contact form.
- Better-organized booking and room information for authorized staff.
- A more consistent user experience across desktop and mobile screens.

### Business Value

Sprint 4 aims to improve the usefulness of the booking system for both visitors and hotel staff. The contact form provides a communication channel, responsive design improves accessibility, and reporting helps authorized staff review reservation information.

Access restrictions on reports also help protect customer and booking details from unauthorized viewing.

## 5. Product Backlog Updates

### Items to Move to Done

The following stories should be moved to Done only after their acceptance criteria have been verified:

- US-17 — View booking and room report
- US-18 — Contact hotel using contact form
- US-19 — Use website on mobile and desktop

**Actual completed items:** [List the stories accepted during Sprint Review.]

### Ready for Sprint 5

Sprint 5 should focus on final improvements, testing, documentation, and any remaining high-priority features.

Potential work includes:

| ID | Backlog Item | Planned Points |
|---|---|---:|
| NFR-002 | Improve website performance | [Estimate with team] |
| NFR-004 | Verify browser compatibility | [Estimate with team] |
| NFR-006 | Verify database integrity | [Estimate with team] |
| NFR-007 | Improve error handling | [Estimate with team] |
| NFR-008 | Review code quality and documentation | [Estimate with team] |

These non-functional requirements are proposed areas for Sprint 5. Use the estimates from your actual Product Backlog, and do not count an item as new work if it has already been completed and accepted.

Other unfinished user stories or defects should be prioritized according to their importance and the team's capacity.

### Backlog Refinements

Potential refinements for Sprint 4 include:
- Defining which fields must appear in booking reports.
- Clarifying who is authorized to access reports.
- Specifying how contact-form messages will be stored or sent.
- Identifying the mobile and desktop screen sizes to test.
- Defining the browsers supported by the project.

**Actual refinements made:** [Enter the actual changes, or write “None” if accurate.]

## 6. Sprint Metrics

Complete the Actual column using your Sprint Backlog, test results, and Sprint Review.

| Metric | Target | Actual | Status |
|---|---:|---:|---|
| Story points planned | 18 | [Enter] | [Update] |
| Story points completed | 18 | [Enter] | [Update] |
| User stories planned | 3 | [Enter] | [Update] |
| User stories accepted | 3 | [Enter] | [Update] |
| Bugs found | — | [Enter] | [Update] |
| Bugs fixed | — | [Enter] | [Update] |
| Sprint goal met | Yes | [Yes/Partially/No] | [Update] |

**Completion rate:** [Actual completed points ÷ planned points × 100]

Only count stories that meet their acceptance criteria as accepted. If the Sprint 4 scope changed during Sprint Planning, update the target values to reflect the team's agreed commitment.

## 7. Quality Assessment

### Code Quality

Review whether:
- Reporting code is organized and maintainable.
- Database queries retrieve the correct records.
- Access controls are applied to restricted reports.
- Contact-form handling is organized and secure.
- Responsive styles are consistent across pages.
- Code is documented where necessary.

**Rating:** [1–5, based on actual review]

### Testing Quality

Review whether:
- Booking and room reports display correct data.
- Unauthorized access to reports is prevented.
- Contact forms accept valid input and reject invalid input.
- Contact submissions produce the expected result.
- Responsive layouts are tested at relevant screen sizes.
- Existing booking functionality still works after the changes.

**Rating:** [1–5, based on actual tests]

### User Experience

Review whether:
- The contact form is easy to locate and use.
- Validation and confirmation messages are clear.
- Reports are easy for authorized staff to understand.
- Website content fits mobile and desktop screens.
- Navigation and buttons remain usable at different screen sizes.

**Rating:** [1–5, based on actual review]

## 8. Issues Encountered and Blockers

### Issues

Record actual defects identified during development or testing.

| Issue ID | Description | Severity | Status | Resolution |
|---|---|---|---|---|
| BUG-001 | [Enter actual issue, if any] | [Minor/Major/Critical] | [Open/Resolved] | [Describe the fix] |
| BUG-002 | [Enter actual issue, if any] | [Minor/Major/Critical] | [Open/Resolved] | [Describe the fix] |

Potential issues to investigate, if they occurred:
- Booking reports displaying incorrect or incomplete data.
- Unauthorized users accessing restricted reports.
- Contact-form validation errors.
- Contact messages failing to reach their intended destination.
- Layout problems on smaller screens.
- Existing pages breaking after responsive CSS changes.

### Blockers

**Actual blockers:** [Describe any blockers that occurred, or write “None” if accurate.]

Possible blockers include missing database data, incomplete backend functionality, integration conflicts, or unavailable testing devices. Record only the blockers that actually affected the sprint.

## 9. Stakeholder Feedback

**Feedback received:** [Record actual feedback from the instructor, Product Owner, teammates, or representative users.]

### Possible Improvements

- Make report information easier to scan.
- Improve the visibility of contact details and the contact form.
- Add clearer feedback after contact-form submission.
- Improve the mobile navigation layout.
- Review accessibility, including readable text and usable form controls.

These are recommendations to consider, not confirmed stakeholder comments.

## 10. Product Vision Alignment

### Product Vision

To develop a user-friendly hotel booking website that enables visitors to explore Aysan Luxury Hotel, compare room options, and submit booking requests through a clear and accessible interface.

### Sprint 4 Contribution

Sprint 4 supports the product vision by improving communication, operational reporting, and accessibility. The contact form helps visitors communicate with the hotel, reports support authorized staff, and responsive design makes the website more convenient to use on different devices.

**Alignment Assessment:** [Excellent / Good / Needs Improvement — select after review]

## 11. Sprint 5 Priorities

### High-Priority Areas

- Resolve outstanding defects in the booking workflow.
- Verify database integrity and booking records.
- Improve error handling and validation.
- Test browser compatibility and responsive layouts.
- Review code quality and complete project documentation.

### Proposed Sprint 5 Goal

Finalize the Aysan Luxury Hotel Booking System by addressing high-priority defects, testing the complete booking workflow, reviewing non-functional requirements, and preparing the project documentation and final demonstration.

### Dependencies and Considerations

- Confirm that core booking features are implemented.
- Verify that customer, room, and booking data are handled correctly.
- Test successful and unsuccessful booking scenarios.
- Ensure restricted reports are accessible only to authorized users.
- Confirm that all required pages work together.
- Prepare screenshots, test results, and documentation for submission.

## 12. Team Performance

### What Went Well

[Record actual examples of teamwork, successful integration, testing, and task completion.]

### What Could Be Improved

[Record actual difficulties and lessons learned.]

### Team Velocity

**Sprint 1 completed points:** [Enter actual accepted points]  
**Sprint 2 completed points:** [Enter actual accepted points]  
**Sprint 3 completed points:** [Enter actual accepted points]  
**Sprint 4 planned points:** 18  
**Sprint 4 completed points:** [Enter actual accepted points]

Use actual completed story points to help estimate a realistic Sprint 5 workload.

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
1. Review Sprint 4 deliverables and test results.
2. Confirm which stories have been accepted.
3. Prioritize outstanding defects and unfinished features.
4. Review the non-functional requirements.
5. Agree on a realistic Sprint 5 goal and workload.
6. Prepare the final project demonstration and documentation.

## 14. Recommendations

### For Sprint 5

- Complete outstanding high-priority features.
- Test the complete booking workflow.
- Verify room availability and booking data integrity.
- Improve error handling and validation.
- Test the website on supported browsers and screen sizes.
- Complete the required project documentation.

### Final Project Recommendations

- Verify that every implemented feature meets its acceptance criteria.
- Include actual test results and screenshots where required.
- Ensure that the project repository and documentation are organized.
- Demonstrate the main user journey from browsing rooms to submitting a booking request.
- Clearly identify any unfinished features and their limitations.

## 15. Product Owner Approval

**Sprint 4 Status:** [Approved / Approved with Changes / Not Approved]

I, Masoma Rezaie, have reviewed the Sprint 4 deliverables and their acceptance criteria. Based on the actual implementation, testing, and Sprint Review, the following decisions are recorded:

- **Sprint goal:** [Met / Partially Met / Not Met]
- **Acceptance criteria:** [Met for accepted stories / Changes required]
- **Readiness for Sprint 5:** [Ready / Not Yet Ready]

**Product Owner:** Masoma Rezaie  
**Signature:** [If required]  
**Date:** [Enter actual approval date]

## 16. References

Use the repository paths below if these files exist in your project:

- Product Backlog: `/backlog/product-backlog.md`
- Sprint 4 Backlog: `/docs/sprint-backlogs/sprint-4-backlog.md`
- Test Results: `/docs/testing/test-results-sprint4.md`
- Sprint Review Notes: `/docs/meeting-minutes/sprint-review-sprint4.md`
- Source Code Repository: [Insert your actual GitHub repository link]

**Prepared by:** Masoma Rezaie  
**Next Review:** Sprint 5 Review — [Enter planned date]
