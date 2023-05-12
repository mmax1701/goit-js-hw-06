const formEl = document.querySelector('.login-form');
const subEl = formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailEl = formEl.elements.email;
    const passwordEl = formEl.elements.password;

    if (!emailEl.value || !passwordEl.value) {
        alert('Всі поля повинні бути заповнені!');
        return;
    }

    const user = {
        email: emailEl.value,
        password: passwordEl.value
    }
    console.log(user);

    formEl.reset();
})

