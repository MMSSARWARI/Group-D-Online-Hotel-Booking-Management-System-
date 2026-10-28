
CREATE DATABASE IF NOT EXISTS hotel_db;
USE hotel_db;

CREATE TABLE Customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15)
);

CREATE TABLE Room (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50),
    price DECIMAL(10,2),
    availability BOOLEAN
);

CREATE TABLE Booking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    room_id INT,
    check_in DATE,
    check_out DATE,
    FOREIGN KEY (customer_id) REFERENCES Customer(id),
    FOREIGN KEY (room_id) REFERENCES Room(id)
);
