console.log("Case-1.js is loaded...");
let queue = document.querySelector('.queue');
let labels = document.querySelectorAll('.label');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let intervalId;
function animateQueue() {
  if (labels.length === 0) return;
  let firstLabel = queue.children[0].querySelector('.label');
  firstLabel.style.transform = 'translateX(800px)';
  setTimeout(() => {
    firstLabel.style.transform = '';
    queue.appendChild(queue.children[0]);
  }, 1000);
}
function startQueue() {
  if (!intervalId) {
    intervalId = setInterval(animateQueue, 2000);
  }
}
function stopQueue() {
  clearInterval(intervalId);
  intervalId = null;
}
startBtn.addEventListener('click', startQueue);
stopBtn.addEventListener('click', stopQueue);
let car = document.getElementById('car');
let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
function animateCar() {
  car.style.transform = 'translateX(800px)';
  setTimeout(() => {
    car.style.transform = 'translateX(0)';
  }, 4000);
}
function toggleDayNight() {
  sun.style.display = sun.style.display === 'none' ? 'block' : 'none';
  moon.style.display = moon.style.display === 'none' ? 'block' : 'none';
  animateCar();
}
setInterval(toggleDayNight, 10000);