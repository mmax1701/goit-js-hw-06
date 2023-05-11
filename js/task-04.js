let counterValue = 0;

const decEl = document.querySelector('button[data-action="decrement"]'); 
const incEl = document.querySelector('button[data-action="increment"]'); 
const valEl = document.querySelector('#value');


const clickDecEl = decEl.addEventListener('click', () => {
    counterValue -= 1;
    valEl.textContent = counterValue;
});

const clickIncEl = incEl.addEventListener('click', () => {
    counterValue += 1;
    valEl.textContent = counterValue;
});
