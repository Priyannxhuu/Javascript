const input = document.getElementById('input');
const display = document.getElementById('display');

input.addEventListener('input',function(e){
    e.preventDefault();

    const typed = input.value;

    display.innerText = typed;
})