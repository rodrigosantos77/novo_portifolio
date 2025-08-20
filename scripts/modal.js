
  document.addEventListener('DOMContentLoaded', function () {
    // Seleciona a imagem dentro do modal
    const modalImage = document.getElementById('modalImage');

    // Seleciona TODAS as imagens que têm a classe 'zoomable'
    const allZoomableImages = document.querySelectorAll('.zoomable');

    // Adiciona um "ouvinte de evento" de clique a cada imagem
    allZoomableImages.forEach(image => {
      image.addEventListener('click', function () {
        // Pega o caminho da imagem que foi clicada
        const imageSrc = this.getAttribute('src');
        
        // Define o caminho da imagem no modal para o mesmo
        modalImage.setAttribute('src', imageSrc);
      });
    });
  });
