const datetime = document.getElementById('datetime');
const date = document.getElementById('date');
const time = document.getElementById('time');

const datetime1 = document.getElementsByClassName('datetime')[0];
const date1 = document.getElementsByClassName('date')[0];
const time1 = document.getElementsByClassName('time')[0];

datetime.addEventListener('click', function(e) {
    e.preventDefault();

    updateDateTime();

    setInterval(() => {
        updateDateTime();
    }, 1000);
});
function updateDateTime(){
    let currentDate = new Date();
    let formattedDateTime = currentDate.toLocaleString();

    datetime1.innerText = formattedDateTime;
}

date.addEventListener('click', function(e) {
    e.preventDefault();

    updateDate();

    setInterval(() => {
        updateDate();
    }, 1000);
});
function updateDate(){
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString();

    date1.innerText = formattedDate;
}

time.addEventListener('click', function(e) {
    e.preventDefault();

    updateTime();

    setInterval(() => {
        updateTime();
    }, 1000);
});
function updateTime(){
    let currentTime = new Date();
    let formattedTime = currentTime.toLocaleTimeString();
    time1.innerText = formattedTime;
}