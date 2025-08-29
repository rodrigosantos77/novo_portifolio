document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    // TODAS as variáveis e funções devem estar aqui dentro
    const imagesContainer = carousel.querySelector('.carousel-images');
    const images = imagesContainer.querySelectorAll('img');
    let currentIndex = 0;

    const updateCarousel = () => {
      if (images.length > 0) {
        imagesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
      }
    };

    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
      });
    }

    // Inicializa o carrossel com a primeira imagem
    updateCarousel();

    window.addEventListener('resize', updateCarousel);
  });
});