const inpEl = document.querySelector('#name-input');
const outEl = document.querySelector('#name-output');

inpEl.addEventListener('input', () => {
    if (inpEl.value === '') {
        outEl.textContent = 'Anonymous';
    } else {
        outEl.textContent = inpEl.value;
    }
})
