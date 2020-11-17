/*import .main.css;*/

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let timerId = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
  /*console.log(randomIntegerFromInterval);*/
};

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
    /*console.log(randomIntegerFromInterval);*/
  }, 1000);
  
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});