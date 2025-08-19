// Seleciona modal e elementos
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

// Pega todas as imagens dos carousels
const images = document.querySelectorAll(".carousel-images img");

images.forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Fechar modal ao clicar no "X"
span.onclick = function () {
  modal.style.display = "none";
};

// Fechar modal ao clicar fora da imagem
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
