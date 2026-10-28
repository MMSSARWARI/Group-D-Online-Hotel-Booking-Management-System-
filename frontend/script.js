// ------------------------------Rooms-------------------

document.addEventListener("DOMContentLoaded", () => {
    const rooms = [
      { id: "R001", type: "Family Room", price: 259, available: true, img: "access/family.jpg"},
      { id: "R002", type: "Double Room", price: 999, available: false, img: "access/big room.jpg"},
      { id: "R003", type: "Room with View", price: 399, available: true, img: "access/view.jpg" },
      { id: "R004", type: "Deluxe Suite", price: 799, available: true, img: "access/195290476.jpg"},
      { id: "R005", type: "Single Room", price: 199, available: false, img: "access/Hotel_Room.jpg" },
      { id: "R006", type: "Luxury Room", price: 599, available: true, img: "access/Romm with TV4.jpg" },
      { id: "R007", type: "Connectings Rooms", price: 599, available: true, img: "access/connection room.jpg" },
      { id: "R008", type: "Twin Room", price: 599, available: true, img: "access/twing rooma.jpg" },

    ];
  
    const roomList = document.querySelector(".room-list");
    if (!roomList) return;
  
    roomList.innerHTML = rooms.map(room => `
      <div class="room-card">
        <img src="${room.img}" ${room.img}" alt="${room.type}" />
        <div class="room-card-content">
          <h3>${room.type}</h3>
          <p><strong>ID:</strong> ${room.id}</p>
          <p><strong>Price:</strong> $${room.price}</p>
          <p><strong>Status:</strong> <span style="color: ${room.available ? 'green' : 'red'}">${room.available ? 'Available' : 'Booked'}</span></p>
          <a href="booking.html?id=${room.id}" class="btn">Book Now</a>
        </div>
      </div>
    `).join("");
  });




    // -----------Booking-----------------------
    function validateBookingForm() {
        const checkInDate = new Date(document.getElementById("checkIn").value);
        const checkOutDate = new Date(document.getElementById("checkOut").value);
    
        if (checkInDate >= checkOutDate) {
          alert("Check-out date must be after the check-in date.");
          return false;
        }
    
        return true;
      }

   // --------------contact.js----------------
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name && email && message) {
        formMessage.textContent = "Thank you for contacting us, " + name + "! We will get back to you shortly.";
        formMessage.style.color = "green";
        form.reset();
      } else {
        formMessage.textContent = "Please fill in all the fields.";
        formMessage.style.color = "red";
      }
    });
  });
  