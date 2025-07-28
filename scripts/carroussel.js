
document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
      const imagesContainer = carousel.querySelector('.carousel-images');
      const images = imagesContainer.querySelectorAll('img');
      const prevBtn = carousel.querySelector('.carousel-btn.prev');
      const nextBtn = carousel.querySelector('.carousel-btn.next');
      let currentIndex = 0;

      function updateCarousel() {
        const imageWidth = images[0].clientWidth;
        imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
      }

      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
      });

      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
      });

      window.addEventListener('resize', updateCarousel);
    });
  });