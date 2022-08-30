let positionNum = 1;
let firstDelay = 0;
let delayStep = 0;
refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('input'),
  btn: document.querySelector('button'),
};
console.log(refs.form);
console.log(refs.input);
console.log(refs.btn);
///////////////////////////////////////////////////
///////////////////////////////////////////////////
refs.form.addEventListener('submit', onSobmitForm);
// refs.btn.addEventListener('click', onBtn);
//////////////////////////////////////////////////

function onSobmitForm(e) {
  e.preventDefault();

  let { delay, step, amount } = e.currentTarget;

  firstDelay = delay.value;

  delayStep = step.value;
  onBtn(delayStep, amount.value);
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    positionNum += 1;

    setInterval(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

function funcBefore() {
  createPromise(positionNum, firstDelay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

function onBtn(step, amount) {
  count = 0; // начальное значение повтореений
  console.log(amount);
  console.log(step);
  const foo = 1000;
  const foo1 = 500;

  intervalId = setInterval(function () {
    console.log((foo += foo1 + foo));
    count += 1;
    // console.log((firstDelay = firstDelay + step));
    if (count == amount) {
      clearInterval(intervalId);
    }
    funcBefore();
  }, step);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const mass = ['Roman', 'Ragnar', 'Thor', 'Odin']; // массив объектов
// const promises = mass.map(prom); // возвращает массив объектов
// // const promises = mass.map(mas => prom(mas)); // идентичная запись что и выше
// function prom(mas) {
//   const TIME = 2000; // дефолт интервала
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(mas);
//     }, TIME);
//   }); // промис БЕЗ обработки ощибки
// }
// prom(promises).then(x => console.log(x)); // результат и вызов промиса
