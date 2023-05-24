
//datos del jugador - nombre y avatar / level/ colores
let player = parseInt(localStorage.getItem('mind-player'));
let level = parseInt(localStorage.getItem('mind-level'));
let colorballs = JSON.parse(localStorage.getItem('mind-colors'));

//elementos DOM
const containerPlayer = document.querySelector('.color-balls-container-player');
const rowBoard = document.querySelector('.board');

// cantidad a la que equivalen las columnas, filas y puntos segun el nivel que venga
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

// Generador de la jugada ganadora
const secretColorList = (colorList) => {
    let secretColors = [];

    for (let i = 0; i < colorList.length; i++) {
        let randomPosition = Math.floor(Math.random() * colorList.length);
        secretColors.push(colorList[randomPosition]);
    }

    console.log(colorList, "estos son los colores posibles...");
    console.log(secretColors, "estos son los colores ganadores....");
    return secretColors;
};

const secretColorsResult = secretColorList(colorballs);
localStorage.setItem('winnerColors', JSON.stringify(secretColorsResult));



//generador de cada una de las filas que me venganpor nivel asignado
const generateRows = (numRows) => {
    for (let i = 0; i < numRows; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-ppal');

        //genera el contenedor para los puntos
        const containerPointScore = document.createElement('div');
        containerPointScore.classList.add('points');

        //genera cada punto
        const generatePointScore = (numPoints) => {
            for (let j = 0; j < numPoints; j++) {
                const pointScore = document.createElement('span');
                pointScore.classList.add('pointScore');
                containerPointScore.appendChild(pointScore);
            }
        }
        if (level) {
            generatePointScore(selectedCol);
        };
        rowContainer.appendChild(containerPointScore);

        // genera el contenedor para las bolas del tablero
        const columnContainer = document.createElement('div');
        columnContainer.classList.add('color-balls-container');

        //genera cada una de las bolas del tablero
        const generateColumns = (numBalls) => {
            for (let k = 0; k < numBalls; k++) {
                const colBalls = document.createElement('div');
                colBalls.classList.add('ball');
                columnContainer.appendChild(colBalls);

                //asignacion del color de cada bola
                colBalls.addEventListener("click", () => {
                    if (rowColorIndexList[k] < numBalls - 1) {
                        rowColorIndexList[k]++;
                        //si me alcanza el ultimo color disponible vuelve a la posicion 0
                    } else {
                        rowColorIndexList[k] = 0;
                    }
                    console.log(colorballs[rowColorIndexList[k]]);
                    //   índice para acceder al color específico en la matriz colorballs    
                    colBalls.style.backgroundColor = colorballs[rowColorIndexList[k]];
                });
            }
        };
        if (level) {
            generateColumns(selectedCol);
        };
        rowContainer.appendChild(columnContainer);

        const validation = document.createElement('button');
        validation.classList.add('validation-button');
        rowContainer.appendChild(validation);

        rowBoard.appendChild(rowContainer);
    }
};
if (level) {
    generateRows(selectedRow);
};

const generateColsBallsPlayer = (numBalls) => {
    for (let i = 0; i < numBalls; i++) {
        const ballPlayer = document.createElement('div');
        ballPlayer.classList.add('ballPlayer');
        ballPlayer.style.backgroundColor = colorballs[i];
        containerPlayer.appendChild(ballPlayer);
    }
}
if (level) {
    generateColsBallsPlayer(selectedCol);
};



