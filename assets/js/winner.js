
//datos del jugador - nombre y avatar / level/ colores
let level = parseInt(sessionStorage.getItem('mind-level'));
let colorballs = JSON.parse(sessionStorage.getItem('winner-colors'));

//elementos DOM
const containerWinnerBalls = document.querySelector('.ballsWinnerColors');

// cantidad a la que equivalen las columnas, filas y puntos segun el nivel que venga
const numColumsDictionary = {
    1: 4,
    2: 5,
    3: 6
}

// Constante para guardar y seleccionar el numero de filas y de columnas por nivel
const selectedCol = numColumsDictionary[level]

const generateWinnerBalls = (numBalls) => {
    for (let i = 0; i < numBalls; i++) {
        const winnerColor = document.createElement('div');
        winnerColor.classList.add('winnerColors');
        winnerColor.style.backgroundColor = colorballs[i];
        containerWinnerBalls.appendChild(winnerColor);
    }
}
if (level) {
    generateWinnerBalls(selectedCol);
};

const validationPlayAgain = document.getElementById('btnPlayAgain');
validationPlayAgain.addEventListener("click", () => {
    window.location.href = './level.html';
});

const validationReturnHome = document.getElementById('btnReturnHome');
validationReturnHome.addEventListener("click", () => {
    window.location.href = '../index.html';
});


const validationPlaySame = document.getElementById('btnPlaySame');
validationReturnHome.addEventListener("click", () => {
    window.location.href = '../board.html';
});
