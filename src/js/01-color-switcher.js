const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bgPlast = document.body;

let timerId = null;
const DELAY = 1000;
let check = btnStop.setAttribute('disabled', false);
////

btnStart.addEventListener('click', onbtnStart);
btnStop.addEventListener('click', onBtnStop);

// генерация случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// кнопка включения START
function onbtnStart() {
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
  onIntervsl();
}
// кнопка выключения STOP
function onBtnStop() {
  check = btnStop.setAttribute('disabled', true);
  btnStart.removeAttribute('disabled');

  clearInterval(timerId);
}
//функция интервала
function onIntervsl() {
  timerId = setInterval(onGenerColorsBG, DELAY);
}

// функция меняет цвет BG
function onGenerColorsBG() {
  storColor = bgPlast.style.background = getRandomHexColor();

  localSet = localStorage.setItem('storColor', JSON.stringify(storColor));
}

/// localStorage просто практики ради
const localGet = localStorage.getItem('storColor');

const parsed = JSON.parse(localGet);

const bar = (bgPlast.style.background = parsed);

/* Второй Вариант  */
/* btnStart.addEventListener('click', () => {
  interval.start();
});

btnStop.addEventListener('click', () => {
  interval.stop();
});

const interval = {
  timerId: null,
  isActiv: false,
  start() {
    if (this.isActiv) {
      return;
    }
    this.timerId = setInterval(() => {
      this.isActiv = true;
      const color = getRandomHexColor();
      bgPlast.style.backgroundColor = color;
      btnStart.setAttribute('disabled', true);
      btnStop.removeAttribute('disabled');
    }, DELAY);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActiv = false;
    check = btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled');
  },
};
 */
