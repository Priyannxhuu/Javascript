const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const text = document.getElementById('text');

plus.addEventListener('click',function(e){
    e.preventDefault();

    if(window.getComputedStyle(text).display === "none" || window.getComputedStyle(plus).display === "flex"){
    text.style.display = "flex";
    plus.style.display = "none";
    minus.style.display = "flex"
    }
    else{
        text.style.display = "none";
        plus.style.display = "flex";
        minus.style.display = "none";
    }
})
minus.addEventListener('click',function(e){
    e.preventDefault();

    if(window.getComputedStyle(text).display === "flex" || window.getComputedStyle(minus).display === "flex"){
    text.style.display = "none";
    minus.style.display = "none"
    plus.style.display = "flex";
    }
    else{
        text.style.display = "flex";
        plus.style.display = "none";
        minus.style.display = "flex";
    }
})