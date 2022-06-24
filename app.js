let body = document.querySelector('body'),
  lightbox = document.querySelector('.lightbox'),
  img = document.querySelectorAll('.gImg'),
  showImg = lightbox.querySelector('.showImg img'),
  close = lightbox.querySelector('.close');

for (let image of img) {
  image.addEventListener('click', () => {
    lightbox.style.display = 'block';
    showImg.src = image.src;
    body.style.overflow = 'hidden';

    close.addEventListener('click', () => {
      lightbox.style.display = 'none';
      body.style.overflow = 'visible';
    });
  });
}
