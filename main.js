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
