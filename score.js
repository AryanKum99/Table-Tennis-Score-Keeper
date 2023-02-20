const butt1 = document.querySelector('#butt1')
const butt2 = document.querySelector('#butt2')
const butt3 = document.querySelector('#reset')
const playto = document.querySelector('#maxsc')
let p1sc = 0;
let winningSc = playto.value;
const p1score = document.querySelector('#p1sc')
let gameOver = false;
butt1.addEventListener("click", function () {
    if (!gameOver) {
        p1sc += 1;
        if (p1sc === winningSc) {
            gameOver = true;
            p1score.classList.add('has-text-success')
            p2score.classList.add('has-text-danger')
            butt1.disabled = true
            butt2.disabled = true 
        }
        p1score.textContent = p1sc;
    }
})
playto.addEventListener('change', function () {
    if (playto.value !== 'NULL') {
        winningSc = parseInt(this.value)
        reset()
    }
    else {
        alert('enter valid input')
    }
})

const p2score = document.querySelector('#p2sc')
let p2sc = 0;
butt2.addEventListener("click", function () {
    if (!gameOver) {
        p2sc += 1;
        if (p2sc === winningSc) {
            gameOver = true;
            p2score.classList.add('has-text-success')
            p1score.classList.add('has-text-danger')
            butt1.disabled = true
            butt2.disabled = true
        }
        p2score.textContent = p2sc;
    }
})
butt3.addEventListener('click', reset)

function reset() {
    if (p1sc === winningSc) {
        p1score.classList.remove('has-text-success')
        p2score.classList.remove('has-text-danger')
    }
    else {
        p1score.classList.remove('has-text-danger')
        p2score.classList.remove('has-text-success')
    }
    gameOver = false;
    p1sc = 0;
    p2sc = 0;
    p1score.textContent = p1sc;
    p2score.textContent = p2sc;
    butt1.disabled = false
    butt2.disabled = false
}