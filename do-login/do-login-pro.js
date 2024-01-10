let userNameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');

let userNameValid = document.querySelector('.username-validation');
let passwordValid = document.querySelector('.password-validation');
console.log(userNameValid)

function usernameValidation() {
    if (userNameInput.value.length < 12) {
        userNameValid.style.color = 'red'
        userNameValid.style.display = 'inline'
        userNameValid.innerHTML = "نام کاربری باید بالا 12 کاراکتر باشد."
        
    } else {
        userNameValid.style.color = 'green'
        userNameValid.style.display = 'inline'
        userNameValid.innerHTML = "نام کاربری درست است!"
    }
}
function passwordValidation(){
    if (passwordInput.value.length < 8) {
        passwordValid.style.color = 'red'
        passwordValid.style.display = 'inline'
        passwordValid.innerHTML = "رمز عبور باید بالا 8 کاراکتر باشد."
        
    } else {
        passwordValid.style.color = 'green'
        passwordValid.style.display = 'inline'
        passwordValid.innerHTML = "رمز عبور درست است!"
    }
}
