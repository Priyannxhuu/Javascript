const username = document.getElementById('username');
const password = document.getElementById('password');

username.addEventListener('input',function(){

    const typed = username.value;

    console.log(typed);
})
password.addEventListener('input',function(){

    const typed = password.value;

    console.log(typed);
})