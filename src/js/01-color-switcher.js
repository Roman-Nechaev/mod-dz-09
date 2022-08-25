//  <button type="button" data-start>Start</button>
//     <button type="button" data-stop>Stop</button>
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', onbtnStart);
btnStop.addEventListener('click', onBtnStop);
let intervalId = '';
function onbtnStart(evt) {
  onIntervsl();
  // console.log('btnStart:', evt.target);
}

function onIntervsl() {
  const intervalId = setInterval(name, 1000);
}
function onBtnStop(evt) {
  clearInterval(intervalId);
  console.log('BtnStop');
}

function name(params) {
  console.log('start');
}
