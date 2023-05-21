//datos del jugador - nombre y avatar / level/ colores
let player = parseInt(localStorage.getItem('mind-player'));
let level = parseInt(localStorage.getItem('mind-level'));
let colorballs = parseInt(localStorage.getItem('mind-colors'));
//elementos DOM
const container = document.querySelector('.color-balls-container');
const containerPlayer = document.querySelector('.color-balls-container-player');

// Obtencion de la cantidad de bolas segun el nivel
// filas del tablero
const numBallsLevel1 = 4;
const numBallsLevel2 = 5;
const numBallsLevel3 = 6;
const addBalls = (numBalls) => {
    for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        container.appendChild(ball);
    };
};
if (level) {
    if (level === 1) {
        addBalls(numBallsLevel1);
    }
    if (level === 2) {
        addBalls(numBallsLevel2);
    }
    if (level === 3) {
        addBalls(numBallsLevel3);
    }
} else {
    addBalls(numBallsLevel1);
};

// Obtencion de la cantidad de bolas segun el nivel
// fila de color
const addBallsPlayer = (numBalls) => {
    for (let i = 0; i < numBalls; i++) {
        const ballPlayer = document.createElement('div');
        ballPlayer.classList.add('ballPlayer');
        containerPlayer.appendChild(ballPlayer);
    };
};
if (level) {
    if (level === 1) {
        addBallsPlayer(numBallsLevel1);
    }
    if (level === 2) {
        addBallsPlayer(numBallsLevel2);
    }
    if (level === 3) {
        addBallsPlayer(numBallsLevel3);
    }
} else {
    addBallsPlayer(numBallsLevel1);
};

//obtencion del color
