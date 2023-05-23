
//datos del jugador - nombre y avatar / level/ colores
let player = parseInt(localStorage.getItem('mind-player'));
let level = parseInt(localStorage.getItem('mind-level'));
let colorballs = JSON.parse(localStorage.getItem('mind-colors'));

//elementos DOM
const containerPlayer = document.querySelector('.color-balls-container-player');
const rowBoard = document.querySelector('.board');

const numColumsDictionary = {
    1: 4,
    2: 5,
    3: 6
}

const numRowDictionary = {
    1: 10,
    2: 8,
    3: 6
}

// Selecciona el numero de filas y de columnas
const selectedRow = numRowDictionary[level]
const selectedCol = numColumsDictionary[level]

//seguimiento del índice del color seleccionado para cada bola
const rowColorIndexList = [];

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
            for (let k = 0; k < numBalls; k++) {
                const ball = document.createElement('div');
                ball.classList.add('ball');
                ballsContainer.appendChild(ball);

                ball.addEventListener("click", () => {
                    if (rowColorIndexList[k] < numBalls - 1) {
                        rowColorIndexList[k]++;
                 //si me alcanza el ultimo color disponible vuelve a la posicion 0
                    } else {
                        rowColorIndexList[k] = 0;
                    }
                    console.log(colorballs[rowColorIndexList[k]]);
               //   índice para acceder al color específico en la matriz colorballs    
                    ball.style.backgroundColor = colorballs[rowColorIndexList[k]];
                });
            }
        };
        if (level) {
            rowColorIndexList[i] = new Array(selectedCol).fill(-1);
            addBalls(selectedCol);
        };
        row.appendChild(ballsContainer);

        const validation = document.createElement('button');
        row.appendChild(validation);
        validation.classList.add('validation-button');

        rowBoard.appendChild(row);
    }
};
if (level) {
    addRows(selectedRow);
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
    addBallsPlayer(selectedCol);
};



