const inpEl = document.querySelector('#validation-input');
const maxLength = inpEl.dataset.length;

let text = '';


const textEl = inpEl.addEventListener('change', () => {
   text = inpEl.value;
})

const validEl = inpEl.addEventListener('blur', () => {
    if (text.length <= maxLength) {
        inpEl.classList.remove('invalid');
        inpEl.classList.add('valid');
    } else {
        inpEl.classList.remove('valid');
        inpEl.classList.add('invalid');
    }
})