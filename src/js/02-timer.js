import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('input[type="text"]'),

  btn: document.querySelector('button[data-start]'),

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

let checkbtnStop = refs.btn.setAttribute('disabled', true);

var countDownDate = '';

refs.input.addEventListener('input', onInputValue);

refs.btn.addEventListener('click', onStartTimerBtn);

flatpickr('input[type="text"]', onflatpickr);

function onflatpickr(evt) {
  refs.input.value = evt.defaultDate.toLocaleString();
  console.log(evt.onClose.selectedDates);
}

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

const timer = {
  intervalId: null,
  isActiv: false,
  start() {
    if (this.isActiv) {
      return;
    }

    this.isActiv = true;
    checkbtnStop = refs.btn.setAttribute('disabled', true);

    this.intervalId = setInterval(() => {
      const diffDate = countDownDate - new Date();
      if (diffDate <= 0) {
        console.log('f');
        clearInterval(this.intervalId);
      }
      const countTimer = convertMs(diffDate);
      console.log('countTimer', countTimer);
      updateTimerFace(countTimer);
    }, 1000);
  },
};

//Функция добавление цифр в интерфейс таймера
function updateTimerFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function onInputValue(evt) {
  var d = new Date(); // сегодняшная дата

  countDownDate = new Date(evt.currentTarget.value);

  if (countDownDate > d) {
    console.log('Da');
    Notify.success('Timer is Ok');

    checkbtnStop = refs.btn.removeAttribute('disabled');
  } else {
    console.log('Ne');

    Notify.failure('Please choose a date in the future');

    checkbtnStop = refs.btn.setAttribute('disabled', true);
  }
  // console.log(evt.currentTarget.value);
}

function onStartTimerBtn(params) {
  timer.start();
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
