refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button'),
};
console.log(refs.form);
console.log(refs.btn);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {});
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
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
