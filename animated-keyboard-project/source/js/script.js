document.addEventListener('keyup', function (event) {
    //console.log(event.key)
appendValueKey(event)
let userEventKey = event.key.toUpperCase();
let mainKeyElem =  document.getElementById(userEventKey)


mainKeyElem.classList.add('hit')

mainKeyElem.addEventListener('animationend',function () {
    mainKeyElem.classList.remove('hit')
})
})
let userTypeKey = document.querySelector('.title')
function appendValueKey(event) {
if (event.code === 'Backspace') {
    userTypeKey.innerHTML = userTypeKey.innerHTML.slice(0,-1);
    return
}

    userTypeKey.innerHTML += event.key;
}