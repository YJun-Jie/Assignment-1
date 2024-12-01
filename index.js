document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    let currentIndex = 0;
  
    function updateCarousel() {
      // Remove 'active' class from all items
      items.forEach((item, index) => {
        item.classList.toggle("active", index === currentIndex);
      });
    }
  
    // Event listener for "Next" button
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % items.length; // Wrap around to the first item
      updateCarousel();
    });
  
    // Event listener for "Previous" button
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length; // Wrap around to the last item
      updateCarousel();
    });
  
    // Initialize the carousel
    updateCarousel();
  });
  