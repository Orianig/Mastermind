
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
const getSecretColorList = (colorList) => {
    let secretColors = [];

    for (let i = 0; i < colorList.length; i++) {
        let randomPosition = Math.floor(Math.random() * colorList.length);
        secretColors.push(colorList[randomPosition]);
    }

    console.log(colorList, "estos son los colores posibles...");
    console.log(secretColors, "estos son los colores ganadores....");
    return secretColors;
};

const secretColorsList = getSecretColorList(colorballs);
localStorage.setItem('winnerColors', JSON.stringify(secretColorsList));


let colorMatrix = new Array(selectedRow);
for (let i = 0; i < selectedRow; i++) {
    colorMatrix[i] = new Array(selectedCol).fill(-1);
}

let validationRowList = new Array(selectedRow);
validationRowList.fill(false);
validationRowList[0] = true;


// Comprobacion de fichas blancas y negras
const calculateMatches = (secretColors, userColors) => {
    const matches = [];
    const secretColorsAux = [...secretColors];

    for (let i = 0; i < userColors.length; i++) {
        const userColor = userColors[i];
        let match = '';

        // Verificar coincidencia exacta
        if (userColor === secretColorsAux[i]) {
            match = 'negro';
            secretColorsAux[i] = null; // Marcar el color como usado en secretColors
        } else {
            // Verificar coincidencia por tipo
            const index = secretColorsAux.findIndex((color) => color === userColor);
            if (index !== -1) {
                match = 'blanco';
                secretColorsAux[index] = null; // Marcar el color como usado en secretColors
            }
        }
        matches.push(match);
    }
    return matches;
};


//generador de cada una de las filas que me venganpor nivel asignado
const generateRows = (numRows) => {
    for (let indexRow = 0; indexRow < numRows; indexRow++) {
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
            for (let indexColumn = 0; indexColumn < numBalls; indexColumn++) {

                const colBalls = document.createElement('div');
                colBalls.classList.add('ball');
                columnContainer.appendChild(colBalls);

                //asignacion del color de cada bola
                colBalls.addEventListener("click", () => {
                    if (!validationRowList[indexRow]) {
                        alert('No puedes jugar esta fila aun');
                        return
                    }
                    if (colorMatrix[indexRow][indexColumn] < numBalls - 1) {
                        colorMatrix[indexRow][indexColumn]++;
                        //si me alcanza el ultimo color disponible vuelve a la posicion 0
                    } else {
                        colorMatrix[indexRow][indexColumn] = 0;
                    }
                    //   índice para acceder al color específico en la matriz colorballs    
                    colBalls.style.backgroundColor = colorballs[colorMatrix[indexRow][indexColumn]];
                });
            }
        };
        if (level) {
            generateColumns(selectedCol);
        };
        rowContainer.appendChild(columnContainer);

        // Manejador del botón
        const validationButton = document.createElement('button');
        validationButton.classList.add('validation-button');
        validationButton.innerText = "Validar";
        rowContainer.appendChild(validationButton);
        validationButton.addEventListener("click", () => {
            const isCompleteRow = colorMatrix[indexRow].every(item => item >= 0);
            if (!validationRowList[indexRow]) {
                alert('No puedes validar esta fila aun');
                return
            }
            if (!isCompleteRow) {
                alert('No puedes validar si no has anadido todos los colores');
                return;
            }
            const colorHexaRowList = colorMatrix[indexRow].map(item => colorballs[item]);
            let matches = calculateMatches(secretColorsList, colorHexaRowList);
            matches = matches.filter(item => item);

            let scorePoints = containerPointScore.querySelectorAll('.pointScore');
            for (i = 0; i < scorePoints.length; i++) {
                const match = matches[i];
                if (match === 'negro') {
                    scorePoints[i].style.backgroundColor = 'black';
                    scorePoints[i].classList.add('black');
                }
                if (match === 'blanco') {
                    scorePoints[i].style.backgroundColor = 'white';
                    scorePoints[i].classList.add('white');
                }
            }

            const isWinSet = matches.every(item => item == 'negro');
            if (isWinSet) {
                alert('G A N A S T E');
                window.location.href = './winner.html';
                return;
            }
            validationRowList[indexRow] = false;
            if (indexRow < numRows - 1) {
                validationRowList[indexRow + 1] = true;
            } else {
                alert('P E R D I S T E');
            }
        })

        rowBoard.insertBefore(rowContainer, rowBoard.firstChild);
    }
};
if (level) {
    generateRows(selectedRow);
};

const generateBallsPlayer = (numBalls) => {
    for (let i = 0; i < numBalls; i++) {
        const ballPlayer = document.createElement('div');
        ballPlayer.classList.add('ballPlayer');
        ballPlayer.style.backgroundColor = colorballs[i];
        containerPlayer.appendChild(ballPlayer);
    }
}
if (level) {
    generateBallsPlayer(selectedCol);
};



