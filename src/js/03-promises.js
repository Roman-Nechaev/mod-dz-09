function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// const timer = {
//   start() {
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       console.log(currentTime - startTime);
//     }, 1000);
//   },
// };

// timer.start();

const mass = ['Roman', 'Ragnar', 'Thor', 'Odin']; // массив объектов
const promises = mass.map(prom); // возвращает массив объектов
// const promises = mass.map(mas => prom(mas)); // идентичная запись что и выше
function prom(mas) {
  const TIME = 2000; // дефолт интервала
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mas);
    }, TIME);
  }); // промис БЕЗ обработки ощибки
}
prom(promises).then(x => console.log(x)); // результат и вызов промиса
