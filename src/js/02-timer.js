import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('input[type="text"]'),
  btn: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
};
// console.log('refs', refs.input);
// console.log('refs', refs.btn);
// console.log('refs', refs.timer);
refs.input.addEventListener('input', onInput);
flatpickr('input[type="text"]', onInput);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
function onInput(evt) {
  //   console.log(evt);
}
onInput(options);

const startTime = new Date();
console.log('startTime', startTime);
const bar = new Date(15000);
const foo = startTime   - bar;
console.log(convertMs(foo));
// function timerDate(e) {
//   const intervalId = setInterval(() => {
//     const currentTime = new Date();

//     let deltaTime = startTime - currentTime;
//     const time = convertMs(deltaTime);
//     console.log('time', time);
//   }, 1000);
// }

// timerDate();

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
