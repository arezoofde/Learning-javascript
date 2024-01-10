//append element li
let textInput =document.getElementsByTagName('LI');

for (let i = 0; i < textInput.length; i++) {
    let span = document.createElement('SPAN');
    let text = document.createTextNode("\u00D7")

    span.className = 'close';
    span.appendChild(text);
    textInput[i].appendChild(span)
    
}console.log('aaa')


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
  
}
// Add a "checked" symbol when clicking on a list item
document.addEventListener('DOMContentLoaded', function() {
    var list = document.querySelector('ul');
    if (list) {
      list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
        }
      }, false);
    } else {
      console.error('Element with selector "ul" not found.');
    }
  });
  

// Create a new list item when clicking on the "Add" button
function newparametr() {
    var li = document.createElement('LI');
    var input = document.getElementById('myInput').value;
    var txt = document.createTextNode(input);
    li.appendChild(txt)
    if (input === '') {
        alert(" por kooon !!!")
    }else{
        document.getElementById('myUL').appendChild(li)
    }
    document.getElementById('myUL').value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    
}