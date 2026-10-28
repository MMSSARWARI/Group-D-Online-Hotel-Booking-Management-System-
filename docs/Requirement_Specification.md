# Software Requirements Specification
## Aysan Luxury Hotel Booking System

**Project:** Aysan Luxury Hotel Booking System  
**Version:** 1.0  
**Date:** October 28, 2026  
**Prepared by:** Masoma Rezaie (Product Owner) and Team  
**Course:** Software Engineering – ITC315

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) describes the functional and non-functional requirements of the Aysan Luxury Hotel Booking System. The purpose of the system is to provide a user-friendly web application through which visitors can explore hotel information, view available room options, and submit booking requests.

The system is intended to simplify the process of accessing hotel information and requesting room reservations. Depending on the implemented scope, authorized hotel staff may also manage room information, review booking records, and generate reports.

This document provides a common understanding of the project's requirements for the development team, Product Owner, testers, and other stakeholders.

### 1.2 Scope

The Aysan Luxury Hotel Booking System is a web-based application designed to improve the process of exploring hotel services and requesting room reservations.

The system allows visitors to:

- View the hotel homepage and general information.
- Read about the hotel and its services.
- Browse room types, descriptions, photographs, and prices.
- Check room availability if availability checking is implemented.
- Open a booking form and enter guest information.
- Select a room type and provide check-in and check-out dates.
- Submit booking details and receive an appropriate response.
- Contact the hotel through a contact form.

Depending on the final implementation, the system may also support database storage of customer and booking information, authorized staff access to booking records, and booking reports.

The system should provide a clear interface, reliable handling of booking information, appropriate data protection, and compatibility with common web browsers and screen sizes.

### 1.3 Definitions and Abbreviations

- **SRS:** Software Requirements Specification
- **FR:** Functional Requirement
- **NFR:** Non-Functional Requirement
- **UI:** User Interface
- **UX:** User Experience
- **DB:** Database
- **PO:** Product Owner
- **Scrum:** An Agile framework for developing and improving products
- **User Story:** A short description of a feature from the user's perspective
- **Booking:** A request to reserve a hotel room for a specified period
- **Acceptance Criteria:** Conditions that must be satisfied before a requirement or user story can be accepted

### 1.4 References

- ITC315 Software Engineering course materials
- Course materials on requirements engineering and Software Requirements Specifications
- The Aysan Luxury Hotel Booking System Product Backlog and user stories
- Project design, implementation, and testing documents developed by the team

---

## 2. Overall Description

### 2.1 Product Perspective

The Aysan Luxury Hotel Booking System is a web application intended to provide information about the hotel and support the room-booking process.

The user interface is developed using HTML, CSS, and JavaScript. A database is intended to store relevant information if database integration is included in the implementation.

The system may consist of the following components:

1. **Frontend:** Displays hotel information, room listings, booking forms, and confirmation messages.
2. **Application logic:** Processes booking requests, validates input, and coordinates application operations.
3. **Database:** Stores customer, room, and booking records when the database component is implemented.
4. **Administrative functionality:** Allows authorized staff to review or manage relevant records if included in the agreed project scope.

The frontend, application logic, and database should work together correctly wherever these components are implemented.

### 2.2 Product Functions

The main functions of the system include:

- Displaying the hotel homepage.
- Providing information about the hotel and its services.
- Displaying room types, descriptions, photographs, and prices.
- Providing a booking form.
- Collecting guest contact information.
- Allowing users to select a room type and booking dates.
- Validating booking information.
- Checking availability when supported by the application logic and database.
- Processing booking requests.
- Displaying an appropriate booking result or confirmation.
- Saving customer and booking records when database functionality is implemented.
- Providing a contact form.
- Displaying booking and room reports if authorized administrative functionality is implemented.

Online payments, customer account registration, automated email notifications, and other advanced features are outside the initial scope unless they are explicitly added to the Product Backlog and implemented by the team.

### 2.3 User Characteristics

**1. Visitors and potential guests**

Visitors want to learn about the hotel, compare room options, review prices, and find out how to request a reservation. They may have different levels of computer experience, so the interface should be simple and understandable.

**2. Guests submitting booking requests**

Guests need to enter accurate contact information, choose a room type, select their intended stay dates, and understand whether their request was submitted successfully.

**3. Authorized hotel staff**

If staff functionality is implemented, authorized staff need to review booking records and room information. Their access should be appropriately restricted.

**4. Development and testing team**

The development team is responsible for implementing, testing, documenting, and maintaining the application according to the agreed requirements.

### 2.4 Constraints

- The website must be developed using the technologies agreed upon by the team, including HTML, CSS, and JavaScript for the frontend.
- Database integration must use the database technology selected for the project.
- The project must comply with the requirements and submission deadlines established by the ITC315 course.
- The user interface must be understandable and easy to navigate.
- Booking forms must validate required fields and reject invalid input appropriately.
- Customer and booking information must be handled securely.
- Database credentials and other sensitive configuration details must not be exposed in frontend code.
- Features requiring external services, such as email notifications or online payments, depend on the availability and configuration of those services.
- The project must be completed within the team's available time and resources.

### 2.5 Assumptions and Dependencies

- Users have access to a device with a supported web browser and an internet connection when using the deployed website.
- Hotel room descriptions, photographs, and prices are provided by the project team or an authorized source.
- The booking form uses the required guest and stay information to process booking requests.
- If a database is used, it is available and correctly configured for the application.
- Room availability information must be based on reliable data if the system offers availability checking.
- A booking is not considered confirmed merely because a visitor opens or completes a form; confirmation depends on successful processing according to the implemented booking rules.
- External email, payment, or notification services are required only if the corresponding features are included in the final project scope.

---

## 3. System Requirements

### 3.1 Functional Requirements

The following functional requirements describe the expected system behavior.

| ID | Description |
|---|---|
| **FR-001** | Homepage: The system shall display the hotel homepage with the hotel's name and relevant introductory information. |
| **FR-002** | Hotel Information: The system shall allow visitors to read information about the hotel, its services, and its facilities. |
| **FR-003** | Room Listings: The system shall display the room types offered by the hotel. |
| **FR-004** | Room Photographs: The system shall display photographs associated with the relevant room types. |
| **FR-005** | Room Prices: The system shall display the price of each room type clearly. |
| **FR-006** | Room Availability: The system shall allow visitors to check room availability for their intended stay when availability data and processing are implemented. |
| **FR-007** | Booking Form Access: The system shall allow visitors to open the booking form through a booking button or equivalent navigation option. |
| **FR-008** | Guest Name: The booking form shall collect the guest's name. |
| **FR-009** | Guest Contact Information: The booking form shall collect the required guest contact information, such as email address or phone number. |
| **FR-010** | Room Selection: The booking form shall allow visitors to select a room type. |
| **FR-011** | Check-in Date: The booking form shall allow visitors to enter a check-in date. |
| **FR-012** | Check-out Date: The booking form shall allow visitors to enter a check-out date. |
| **FR-013** | Booking Validation: The system shall validate required booking fields and reject invalid or incomplete information before processing a request. |
| **FR-014** | Booking Result: The system shall display an appropriate success or failure message after processing a booking request. |
| **FR-015** | Customer Record Storage: If database integration is implemented, the system shall store the required customer information associated with a booking. |
| **FR-016** | Booking Record Storage: If database integration is implemented, the system shall store booking details and maintain the required relationships between booking, customer, and room records. |
| **FR-017** | Booking and Room Reports: If authorized reporting functionality is implemented, the system shall allow authorized staff to view relevant booking and room information. |
| **FR-018** | Contact Form: The system shall allow visitors to enter a message and the required contact information through a contact form. |
| **FR-019** | Responsive Interface: The system shall provide a usable layout on supported desktop and mobile screen sizes. |
| **FR-020** | Navigation: The system shall provide navigation links that allow visitors to move between the main website pages and sections. |

**Note:** FR-006, FR-014, FR-015, FR-016, and FR-017 depend on the actual availability and implementation of the relevant application logic or database features. The final project should be evaluated against the requirements agreed upon by the team and Product Owner.

### 3.2 Non-Functional Requirements

Non-functional requirements define the expected quality, security, usability, and reliability of the system.

| ID | Description |
|---|---|
| **NFR-001** | **Security:** The system shall protect sensitive information, validate user input, and restrict access to protected functionality. A deployed version shall use HTTPS. |
| **NFR-002** | **Performance:** Under the agreed test conditions, the main website pages should load within 2 seconds, where reasonably achievable. Performance should be measured during testing. |
| **NFR-003** | **Usability:** The interface shall use clear labels, understandable messages, consistent navigation, and readable content so visitors can use the main functions easily. |
| **NFR-004** | **Browser Compatibility:** The system shall be tested in the agreed target browsers and shall support the main functions in those browsers. |
| **NFR-005** | **Responsiveness:** The website shall adapt to supported mobile, tablet, and desktop screen sizes without making the main functions unusable. |
| **NFR-006** | **Data Integrity:** When database functionality is implemented, customer, room, and booking records shall remain accurate and consistent. Invalid relationships and duplicate or conflicting records shall be handled appropriately. |
| **NFR-007** | **Error Handling:** The system shall provide clear error messages for invalid input and failed operations without exposing sensitive technical details. |
| **NFR-008** | **Maintainability:** The source code shall be organized, readable, and documented sufficiently to support future changes and debugging. |
| **NFR-009** | **Reliability:** The system shall handle expected user operations consistently and shall not display a successful booking result when booking processing has failed. |
| **NFR-010** | **Compatibility:** The website shall use supported web technologies and avoid unnecessary browser-specific dependencies. |
| **NFR-011** | **Privacy:** The system shall collect only the personal information required for its intended functions and protect that information from unauthorized access. |
| **NFR-012** | **Data Validation:** The system shall validate input appropriately in the frontend and, where a backend exists, enforce validation on the server side as well. |

The numerical performance target is a proposed target for testing, not a claim that the current system has already achieved it. The team may revise the target based on the course requirements and testing environment.

---

## 4. Appendices

### 4.1 Use Case Diagram

The use case diagram should illustrate the interactions between the main actors and the system.

**Potential actors:**
- Visitor or guest
- Authorized hotel staff, if staff functionality is implemented

**Potential use cases:**
- View homepage
- Read hotel information
- Browse rooms
- View room prices and photographs
- Check room availability
- Submit a booking request
- View booking result
- Contact the hotel
- Review booking records, if authorized staff functionality is implemented

The final diagram should include only actors and use cases supported by the agreed project scope.

### 4.2 Sequence Diagrams

Sequence diagrams may be prepared for the following workflows:

1. Browsing room information.
2. Submitting a booking request.
3. Validating booking information.
4. Saving a booking to the database, if implemented.
5. Returning a booking result to the visitor.
6. Submitting a contact form.

Each sequence diagram should reflect the actual system components and behavior.

### 4.3 Supporting Documents

The following documents support this specification:

- Product Backlog
- User Stories and Acceptance Criteria
- Sprint Backlogs and Sprint Reports
- Use Case Diagram
- Sequence Diagrams
- Database Design, if applicable
- Test Cases and Test Results
- Final Project Report

---

## Product Owner Review and Approval

**Product Owner:** Masoma Rezaie  
**Review Date:** October 28, 2026

**Approval Statement:**

"I have reviewed this Software Requirements Specification and confirm that it represents the intended product vision and the agreed requirements for the Aysan Luxury Hotel Booking System. This document will serve as a baseline for developing the Product Backlog, planning sprint activities, implementing the system, and evaluating the completed features. Any changes to the agreed requirements will be reviewed and documented by the project team."

**Approval Status:** Approved 
 

**Date:** ___October 28, 2026_______________________

---

**End of Software Requirements Specification**
