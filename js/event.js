// option 2 to handle event

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
const btnMakeBlue = document.getElementById('btn-make-blue');

// option 3 : getElementById and set onclick

btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

document.getElementById('btn-make-green').addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})