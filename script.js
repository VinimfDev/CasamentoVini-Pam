const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

const render = (days, hours, minutes, seconds) => {
  daysElement.innerHTML = String(days).padStart("2", 0);
  hoursElement.innerHTML = String(hours).padStart("2", 0);
  minutesElement.innerHTML = String(minutes).padStart("2", 0);
  secondsElement.innerHTML = String(seconds).padStart("2", 0);
};

const countdown = () => {
  const now = new Date();
  const WeddingDate = new Date(2024, 10, 16, 14, 30, 0);
  

  const timeLeft = WeddingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  render(days, hours, minutes, seconds);
};

countdown();
setInterval(countdown, 1000);


/* CONTAGEM REGRESSIVA ACIMA NÃO MEXER */


 
 document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const lightboxes = document.querySelectorAll('.lightbox');
  const closes = document.querySelectorAll('.close');

  thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
          lightboxes[index].style.display = 'block';
      });
  });

  closes.forEach((close, index) => {
      close.addEventListener('click', () => {
          lightboxes[index].style.display = 'none';
      });
  });

  lightboxes.forEach(lightbox => {
      lightbox.addEventListener('click', (e) => {
          if (e.target === lightbox) {
              lightbox.style.display = 'none';
          }
      });
  });
});

/* NÃO MEXER */




