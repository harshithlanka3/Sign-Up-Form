const pwd = document.querySelector('#password');
const confPwd = document.querySelector('#confpassword');
const errorMsg = document.querySelector('.error-msg');

function confirmPassword(e) {
    if (pwd.value !== confPwd.value) {
        if (!pwd.classList.contains('error')) {
            pwd.classList.add('error');
            confPwd.classList.add('error');
            errorMsg.textContent = '*Passwords do not match';
        } else {
            pwd.classList.remove('error');
            confPwd.classList.remove('error');
            errorMsg.textContent = '';
        }
    }
}

pwd.addEventListener('input', confirmPassword);
confPwd.addEventListener('input', confirmPassword);