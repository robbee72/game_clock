var elements = document.getElementsByClassName('listener');
var i;

for (i = 0; i < elements.length; ++i) {
 elements[i].addEventListener('click', changeColor)
}

function changeColor() {
    this.style.backgroundColor = this.getAttribute('data-color');
    return false;
}
