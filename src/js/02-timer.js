import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  // input: document.querySelector('#datetime-picker'),
  input: document.querySelector('input[type="text"]'),

  btn: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

console.log('days', refs.days.textContent);
console.log('hours', refs.hours.textContent);
console.log('minutes', refs.minutes.textContent);
console.log('seconds', refs.seconds.textContent);

// console.log('refs', refs.input);
// console.log('refs', refs.btn);
// console.log('refs', refs.timer);
var nowDate = new Date(); // сегодняшная дата

let checkbtnStop = refs.btn.setAttribute('disabled', true);

var countDownDate = '';

refs.input.addEventListener('input', onInputValue);

refs.btn.addEventListener('click', onStartTimerBtn);

flatpickr('input[type="text"]', onflatpickr);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

onflatpickr(options);

function onflatpickr(evt) {
  refs.input.value = evt.defaultDate.toLocaleString();
}

function onInputValue(evt) {
  countDownDate = new Date(evt.currentTarget.value);
  if (countDownDate > nowDate) {
    checkbtnStop = refs.btn.removeAttribute('disabled');
  }
  // console.log(evt.currentTarget.value);
}

function ClockTimer(params) {
  const intervalId = setInterval(() => {
    const diffDate = countDownDate - nowDate;
    const countTimer = convertMs(diffDate);

    refs.days.textContent = countTimer.days;
    refs.hours.textContent = countTimer.hours;
    refs.minutes.textContent = countTimer.minutes;
    refs.seconds.textContent = countTimer.seconds;
  }, 1000);
} //функция обратного отчета

// функция кнопки запуска таймера
function onStartTimerBtn(params) {
  ClockTimer(); // запуск функции отбартного отчета
} // функция кнопки запуска таймера

//// Инструменты для таймпера
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
