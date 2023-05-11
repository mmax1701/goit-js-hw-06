const user = {
    email: '',
    password: ''
}

const formEl = document.querySelector('.login-form');
const subEl = formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
})