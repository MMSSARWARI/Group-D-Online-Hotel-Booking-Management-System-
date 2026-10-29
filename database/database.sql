-- Online Hotel Booking Management System (Group D)
-- Creates the database hotel_db, its tables and test data.
-- Run the whole file in MySQL Workbench with Ctrl+Shift+Enter.
-- Running it again resets the tables to this test data.

CREATE DATABASE IF NOT EXISTS hotel_db;
USE hotel_db;

-- Remove old tables first (Booking first, because it refers to the others)
DROP TABLE IF EXISTS Booking;
DROP TABLE IF EXISTS Customer;
DROP TABLE IF EXISTS Room;

-- Customer: people who book rooms
CREATE TABLE Customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL
);

-- Room: hotel rooms, price per night
CREATE TABLE Room (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    availability BOOLEAN NOT NULL DEFAULT TRUE
);

-- Booking: which customer booked which room, and when
CREATE TABLE Booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customer(id),
    FOREIGN KEY (room_id) REFERENCES Room(id)
);

-- Test data
INSERT INTO Room (type, price, availability) VALUES
('Family Room', 259.00, TRUE),
('Double Room', 999.00, FALSE),
('Room with View', 399.00, TRUE),
('Deluxe Suite', 799.00, TRUE),
('Single Room', 199.00, FALSE),
('Luxury Room', 599.00, TRUE),
('Connecting Rooms', 599.00, TRUE),
('Twin Room', 599.00, TRUE);

INSERT INTO Customer (name, email, phone) VALUES
('Ahmad Wali', 'ahmad@example.com', '+93700123456'),
('Sara Karimi', 'sara@example.com', '+93700654321'),
('Masoma Rezaie', 'masoma@example.com', '+93700111222');

INSERT INTO Booking (customer_id, room_id, check_in, check_out) VALUES
(1, 4, '2026-11-05', '2026-11-08'),
(2, 1, '2026-11-10', '2026-11-12'),
(3, 3, '2026-11-15', '2026-11-18');

-- Show the result
SELECT * FROM Room;
SELECT * FROM Customer;
SELECT * FROM Booking;
