let userName = document.querySelector('.username');
let password = document.querySelector('.password')
let modal =document.querySelector('.modal')

function dataValidation() {
    let usernameValue = userName.value;
    let passwordValue = password.value;

    
    if (usernameValue.length < 10 || passwordValue.length < 8) {
        modal.style.display = 'inline';
    } else {
        modal.style.display = 'inline';
        modal.style.background = 'green';
        modal.innerHTML = 'باریکلااااا';
        
    }
    setTimeout(() => {
        modal.style.display = 'none'
    }, 3000);
}