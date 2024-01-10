let mainnav = document.getElementById('mainNav')
const logoImg = document.querySelector('img')
console.log(mainnav)

document.addEventListener("scroll",function () {
    if (document.documentElement.scrollTop > 0) {
        logoImg.style.height = '64px';
        mainnav.classList.add('bg-black')
        mainnav.classList.add('txt-white')
    }else{
        mainnav.classList.remove('bg-black')
        mainnav.classList.remove('txt-white')
    }
    
})