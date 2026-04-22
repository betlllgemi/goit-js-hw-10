import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Math.max(0, Number(form.elements.delay.value));
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(value => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${value}ms`,
        close: false,
        position: 'topRight',
        backgroundColor: '#3acd8d',
        messageColor: '#fff',
        iconColor: '#fff',
        progressBar: false,
      });
    })
    .catch(value => {
      iziToast.error({
        message: `❌ Rejected promise in ${value}ms`,
        close: false,
        position: 'topRight',
        backgroundColor: '#ff5f53',
        messageColor: '#fff',
        iconColor: '#fff',
        progressBar: false,
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

