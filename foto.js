const images = document.querySelectorAll('.image-container');
const modal = document.getElementById('modal');
const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.close');

images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.querySelector('img').src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
