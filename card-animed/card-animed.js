window.onload = function () {
let container = document.getElementById('animatedDiv')
let img = document.querySelector('img')
container.addEventListener("mousemove",function (e) 
{
     const x = e.clientX - e.target.offsetLeft;
     const y = e.clientY - e.target.offsetTop;
console.log(x,y);
     img.style.transformOrigin = `${x}px ${y}px`;
     img.style.transform ='translateX(50px)';
     img.style.backgroundColor = 'rgba(103, 114, 157, 0.67)';
     img.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
   
   
});
container.addEventListener("mouseleave",function(e){
    img.style.transformOrigin ='center center';
    img.style.transform= 'translateX(0)';
    img.style.backgroundColor = 'transparent';
});

}