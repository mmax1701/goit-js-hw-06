const inpEl = document.querySelector('#name-input');
const outEl = document.querySelector('#name-output');

let textEl = inpEl.addEventListener('input', () => {
    outEl.textContent = inpEl.value;
})