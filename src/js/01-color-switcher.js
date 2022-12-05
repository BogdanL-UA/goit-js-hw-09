const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
let TimerId = null;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

refs.start.addEventListener('click', () => {
  refs.stop.removeAttribute('disabled');
  refs.start.setAttribute('disabled', 'disabled');
  TimerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stop.addEventListener('click', () => {
  refs.stop.setAttribute('disabled', 'disabled');
  refs.start.removeAttribute('disabled');
  clearInterval(TimerId);
});
