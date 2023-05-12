function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const btnCrEl = document.querySelector('button[data-create]');
const btnDestrEl = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');

let amount = 0;

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    boxEl.append(divEl);
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    size += 10;
  }
 
}

function destroyBoxes() {
boxEl.innerHTML = '';
}

const input = inputEl.addEventListener('input', () => {
  amount = inputEl.value;
})

const create = btnCrEl.addEventListener('click', () => {
  createBoxes(amount);
})

const destroy = btnDestrEl.addEventListener('click', () => {
  destroyBoxes();
})

