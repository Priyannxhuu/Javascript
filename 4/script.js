const Right = document.getElementById('Right');
const Wrong = document.getElementById('Wrong');
const popup = document.getElementById('popup');
const message = document.getElementById('message');
let timeoutId;

Right.addEventListener('click', function(e) {
    e.preventDefault();
    popup.style.background = 'rgb(0, 110, 0)';
    popup.style.visibility = 'visible';
    message.innerText = 'Access Granted';

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
        popup.style.visibility = 'hidden';
    }, 3000);
});

Wrong.addEventListener('click', function(e) {
    e.preventDefault();
    popup.style.background = 'rgb(110, 0, 0)';
    popup.style.visibility = 'visible';
    message.innerText = 'Access Denied';

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
        popup.style.visibility = 'hidden';
    }, 3000);
});
