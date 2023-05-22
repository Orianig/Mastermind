
//datos del jugador - nombre y avatar / level/ colores
let player = parseInt(localStorage.getItem('mind-player'));
let level = parseInt(localStorage.getItem('mind-level'));
let colorballs = JSON.parse(localStorage.getItem('mind-colors'));

//elementos DOM
const containerPlayer = document.querySelector('.color-balls-container-player');
const rowBoard = document.querySelector('.board');

// Obtencion de la cantidad de bolas segun el nivel
const numBallsLevel1 = 4;
const numBallsLevel2 = 5;
const numBallsLevel3 = 6;

// Obtencion de la cantidad de bolas segun el nivel
const numRowsLevel1 = 10;
const numRowsLevel2 = 8;
const numRowsLevel3 = 6;

//guardado de cada color al hacer clic, array que permite el bucle
const colorballsCounterClick = [0, 0, 0, 0, 0, 0];

const addRows = (numRows) => {
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('div');
        row.classList.add('row-ppal');

        const points = document.createElement('div');
        points.classList.add('points');

        for (let j = 0; j < 4; j++) {
            const ball = document.createElement('span');
            ball.classList.add('ball');
            points.appendChild(ball);
        }
        row.appendChild(points);

        const ballsContainer = document.createElement('div');
        ballsContainer.classList.add('color-balls-container');


        const addBalls = (numBalls) => {
            for (let i = 0; i < numBalls; i++) {
                const ball = document.createElement('div');
                ball.classList.add('ball');
                ballsContainer.appendChild(ball);

                ball.addEventListener("click", () => {
                    console.log(colorballs[colorballsCounterClick[i]]);
                    ball.style.backgroundColor = colorballs[colorballsCounterClick[i]];
                    if (colorballsCounterClick[i] < numBalls - 1) {
                        colorballsCounterClick[i]++;
                    } else {
                        colorballsCounterClick[i] = 0;
                    }
                    console.log(colorballsCounterClick, colorballs)
                });
            }
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
        row.appendChild(ballsContainer);

        const validation = document.createElement('button');
        validation.classList.add('validation-button');
        row.appendChild(validation);

        rowBoard.appendChild(row);
    }
};
if (level) {
    if (level === 1) {
        addRows(numRowsLevel1);
    }
    if (level === 2) {
        addRows(numRowsLevel2);
    }
    if (level === 3) {
        addRows(numRowsLevel3);
    }
} else {
    addRows(numRowsLevel1);
};

const addBallsPlayer = (numBalls) => {
    for (let i = 0; i < numBalls; i++) {
        const ballPlayer = document.createElement('div');
        ballPlayer.classList.add('ballPlayer');
        ballPlayer.style.backgroundColor = colorballs[i];
        containerPlayer.appendChild(ballPlayer);
    }
}
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

