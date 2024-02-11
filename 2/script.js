const image = document.getElementById('image');
const border0 = document.getElementById('border0')
const border1 = document.getElementById('border1')
const border2 = document.getElementById('border2')

border0.addEventListener('click' , function(e){
    e.preventDefault();

    image.style.borderRadius = "0%";
})
border1.addEventListener('click' , function(e){
    e.preventDefault();

    image.style.borderRadius = "50%";
})
border2.addEventListener('click' , function(e){
    e.preventDefault();

    image.style.borderRadius = "21px";
})