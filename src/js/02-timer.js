import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('input[type="text"]'),
  btn: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
};
console.log('days', days);

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

var countDownDate = new Date('2022-08-28'); // дата от которой начинаеться отчет
// .getTime() НУЖНА ?
function ClockTimer(params) {
  const intervalId = setInterval(() => {
    var nowDate = new Date(); // сегодняшная дата
    const diffDate = countDownDate - nowDate;
    const countTimer = convertMs(diffDate);
    console.log('time', countTimer);
  }, 1000);
} //функция обратного отчета

ClockTimer(); // запуск функции отбартного отчета

// var timeinterval = setInterval(updateClock, 1000);
// console.log('timeinterval', timeinterval);
/*  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 20 * 1000);
      initializeClock('countdown', deadline);
    }
updateClock(); */

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
// console.table(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
