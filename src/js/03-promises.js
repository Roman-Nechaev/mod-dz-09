import { Notify } from 'notiflix/build/notiflix-notify-aio';

let firstDelay;
let delayStep = 0;
const form = document.querySelector('.form');

///////////////////////////////////////////////////
///////////////////////////////////////////////////
form.addEventListener('submit', onSobmitForm);
// refs.btn.addEventListener('click', onBtn);
//////////////////////////////////////////////////
//форма сабмита /убрана дефолтная перезагрузка формы / диструкторизация полей ввода / onBtn - принимает выводимый в форму интервал и значение количеств повторений
function onSobmitForm(e) {
  e.preventDefault();

  let { delay, step, amount } = e.currentTarget;
  amountValue = amount.value;
  firstDelay = Number(delay.value);
  delayStep = Number(step.value);
  onBtn(delayStep, amountValue);
}

// функция при нажатии по кнопке према ввода в сабмите и срабатывания формы / принимает интервал и количество повторений
function onBtn(step, amount) {
  count = 0; // начальное значение повтореений
  //  for (let i = 0; i < amountValue; i++) {
  //       if (i > 0) {
  //         firstDelayInputValue += delayStep;
  //       }

  let goDelay = firstDelay;
  let goStep = delayStep;
  intervalId = setInterval(function () {
    count += 1;
    goDelay += goStep;
    // console.log((firstDelay = firstDelay + step));
    if (count == amount) {
      clearInterval(intervalId);
    }
    onLaunchPromis(count, goDelay); /// вызывает функцию  в которой воводит работу промиса
  }, step);
}

/// createPromise - функия работы промиса обрабатывает
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, firstDelay);
  });
}

// onLaunchPromis - функчия обрабатывания вывода промисов
function onLaunchPromis(position, goDelay) {
  createPromise(position, goDelay) // функция создания промиса принимает positionNum - нумерация промиса / firstDelay - задержка срабатывания промиса
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', definePromise);

let amountValue = null;
let delayTime = null;
let firstDelayInputValue = null;

function definePromise(event) {
  event.preventDefault();

  const { elements } = event.currentTarget;

  const { delay, step, amount } = elements;
  amountValue = Number(amount.value);
  delayTime = Number(step.value);
  firstDelayInputValue = Number(delay.value);

  generatePromises(amountValue, firstDelayInputValue);

  function generatePromises(amountValue, firstDelayInputValue) {
    let position = null;

    for (let i = 0; i < amountValue; i++) {
      if (i > 0) {
        firstDelayInputValue += delayTime;
      }
      position += 1;

      function createPromise(position, delayTime) {
        const shouldResolve = Math.random() > 0.3;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (shouldResolve) {
              resolve({ position, delayTime });
            } else {
              reject({ position, delayTime });
            }
          }, firstDelayInputValue);
        });
      }

      createPromise(position, firstDelayInputValue)
        .then(({ position, delayTime }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delayTime}ms`
          );
        })
        .catch(({ position, delayTime }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delayTime}ms`
          );
        });
    }
  }
}
 */
