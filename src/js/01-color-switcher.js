//  <button type="button" data-start>Start</button>
//     <button type="button" data-stop>Stop</button>
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bgPlast = document.body.style.background;

btnStart.addEventListener('click', onbtnStart);
btnStop.addEventListener('click', onBtnStop);

function onbtnStart(evt) {
  // onIntervsl();
  if (!onIntervsl) {
    btnStart.setAttribute('disabled', true);
  } else {
    const foo = btnStart.removeAttribute('disabled');

    onBtnStop(foo);
  }
}

function onIntervsl() {
  const intervalId = setInterval(onGenerColorsBG, 1000);
}

function onBtnStop(evt) {
  // clearInterval(intervalId);
  console.log('BtnStop');
  btnStop.setAttribute('disabled', true);
}

function name(params) {
  console.log('start');
}

// генерация случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//
function onGenerColorsBG(params) {
  const generdColorBg = (document.body.style.background = getRandomHexColor());
}
