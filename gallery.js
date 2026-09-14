const images = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
  });
});

function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});
