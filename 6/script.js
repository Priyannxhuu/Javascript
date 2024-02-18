function generate(){
    const randomnum = Math.floor(Math.random()*10)+1;

    const display = document.getElementById("randomnumber");

    display.innerText = randomnum;
}