const game = document.getElementById('game');
const basket = document.getElementById('basket');
const apple = document.getElementById('apple');
const scoreDisplay = document.getElementById('score');

let score = 0;
let basketPosition = 120;
const basketWidth = 60;
const gameWidth = 300;
let appleFallInterval;
let appleFallSpeed = 1000;

function startGame() {
    document.addEventListener('keydown', moveBasket);
    spawnApple();
    appleFallInterval = setInterval(fallApple, appleFallSpeed);
}

function moveBasket(event) {
    if (event.key === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 20;
    } else if (event.key === 'ArrowRight' && basketPosition < gameWidth - basketWidth) {
        basketPosition += 20;
    }
    basket.style.left = basketPosition + 'px';
}

function spawnApple() {
    const randomX = Math.random() * (gameWidth - 20);
    apple.style.left = randomX + 'px';
    apple.style.top = '0px';
}

function fallApple() {
    const appleTop = parseInt(apple.style.top);
    if (appleTop < 380) {
        apple.style.top = appleTop + 20 + 'px';
    } else {
        checkCatch();
        spawnApple();
    }
}

function checkCatch() {
    const appleX = parseInt(apple.style.left);
    if (appleX >= basketPosition && appleX <= basketPosition + basketWidth) {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
    }
}

startGame();
