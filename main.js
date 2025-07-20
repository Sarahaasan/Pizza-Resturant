// Slider for imae in hero section 
document.addEventListener("DOMContentLoaded", function () {
  const foodImages = [
    "./images/pizza1.jpg",
    "./images/pizza2.jpg",
    "./images/pizza3.jpg"
  ];
  let current = 0;
  const bgDiv = document.getElementById("pizza-bg");

  if (bgDiv) {
    bgDiv.style.backgroundImage = `url(${foodImages[current]})`;

    setInterval(() => {
      current = (current + 1) % foodImages.length;
      bgDiv.style.backgroundImage = `url(${foodImages[current]})`;
    }, 5000);
  }
});

// Testimonels from the users
let currentIndex = 0; 

const messages = [
  { name: "Alice", email: "Alice@gmail", message: "Great pizza! Loved the Margherita." },   //default one forst 
];

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    messages.push({ name, email, message });
    currentIndex = messages.length - 1; 
    updateTestimonial();
    alert("Message received! ✅");
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

function changeTestimonial(direction) {
  if (messages.length === 0) return;
  currentIndex = (currentIndex + direction + messages.length) % messages.length;
  updateTestimonial();
}

function updateTestimonial() {
  const box = document.getElementById("testimonialBox");
  const msgElem = document.getElementById("testimonialMessage");
  const nameElem = document.getElementById("testimonialAuthor");

  if (messages.length > 0) {
    box.style.display = "block";
    msgElem.innerHTML = `<p>"${messages[currentIndex].message}"</p>`;
    nameElem.textContent = `— ${messages[currentIndex].name}`;
  }
}
