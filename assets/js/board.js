
//datos del jugador - nombre y avatar / level/ colores
let player = JSON.parse(localStorage.getItem('mind-player'));
let level = parseInt(localStorage.getItem('mind-level'));
let colorballs = JSON.parse(localStorage.getItem('mind-colors'));

//elementos DOM
const containerPlayer = document.getElementById('color-balls-container-player');
const rowBoard = document.getElementById('board');
const avatarImg = document.getElementById('avatar-img');
const userName = document.getElementById('user-name');

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

// Constante para guardar y seleccionar el numero de filas y de columnas por nivel
const selectedRow = numRowDictionary[level]
const selectedCol = numColumsDictionary[level]

// Acceder a las propiedades individuales (usuario y avatar)
const userNamePlayer = player.username;
const avatarPlayer = player.avatar;
avatarImg.style.backgroundImage = `url(${avatarPlayer})`;
userName.textContent = userNamePlayer;

// Generador de la jugada ganadora - busco de forma random dentro de mis colores
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

//guardado de la jugada ganadora en el local storage
const secretColorsList = getSecretColorList(colorballs);
localStorage.setItem('winner-colors', JSON.stringify(secretColorsList));

//Array para la filas y columnas, permite el desbloqueo y bloqueo de las filas
//al realizar las jugadas y validar
let colorMatrix = new Array(selectedRow);
for (let i = 0; i < selectedRow; i++) {
    //se genera un array y se llena con -1 para empezar el conteo
    colorMatrix[i] = new Array(selectedCol).fill(-1);
}

//se establece en falso las filas para bloquearlas y se pone en verdadero la primera
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
            secretColorsAux[i] = null; // Marcar el color como usado
        } else {
            // Verificar coincidencia por tipo
            const index = secretColorsAux.findIndex((color) => color === userColor);
            if (index !== -1) {
                match = 'blanco';
                secretColorsAux[index] = null;
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
                pointScore.id = 'pointScore';
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

                //mensaje de error para que el usuario sepa que no puede acceder aun
                colBalls.addEventListener("click", () => {
                    //me bloquea el que pueda cambiar los colores de todas las filas
                    //ya que primero debe pasar por la validacion para desbloquearse
                    if (!validationRowList[indexRow]) {
                        errorMessage.textContent = 'Aún no puedes jugar esta fila!!';
                        return
                    }

                    if (colorMatrix[indexRow][indexColumn] < numBalls - 1) {
                        colorMatrix[indexRow][indexColumn]++;
                        //si me alcanza el ultimo color disponible vuelve a la posicion 0
                    } else {
                        colorMatrix[indexRow][indexColumn] = 0;
                    }
                    //índice para acceder al color específico en la matriz colorballs    
                    colBalls.style.backgroundColor = colorballs[colorMatrix[indexRow][indexColumn]];
                });
            }
        };
        if (level) {
            generateColumns(selectedCol);
        };
        rowContainer.appendChild(columnContainer);

        // generador del botón validación
        const validationButton = document.createElement('button');
        validationButton.classList.add('validation-button');
        validationButton.innerText = "Validar";
        rowContainer.appendChild(validationButton);

        //eventos del boton validacion
        //si ya se ha rellenado todos los colores (como empiezan en -1 deben ser 0 o mas)
        validationButton.addEventListener("click", () => {
            const isCompleteRow = colorMatrix[indexRow].every(item => item >= 0);
            // se condiciona cada columna para que siempre esten rellenas todas las bolas
            if (!isCompleteRow) {
                errorMessage.textContent = 'Asigna un color a cada bola!!';
                return;
            }
//se hace un recorrido para devolver el color en funcion del numero en la matriz
            const colorHexaRowList = colorMatrix[indexRow].map(item => colorballs[item]);
            let matches = calculateMatches(secretColorsList, colorHexaRowList);
           //elimina los espacios vacios del array
            matches = matches.filter(item => item);

            //pintado de los puntos de pistas en funcion del color que le corresponde
            let scorePoints = containerPointScore.getElementById('pointScore');
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
//condicion para ganar o para desbloquear la siguiente fila
            const isWinSet = matches.every(item => item == 'negro');
            if (isWinSet) {
                window.location.href = './winner.html';
                return;
            }

            //se pasa a true la siguiente fila para realizar la jugada
            validationRowList[indexRow] = false;
            if (indexRow < numRows - 1) {
                validationRowList[indexRow + 1] = true;
            } else {
                window.location.href = './loser.html';
            }
        })
        rowBoard.insertBefore(rowContainer, rowBoard.firstChild);
    }
};
if (level) {
    generateRows(selectedRow);
};

//bolas que contienen los colores seleccionados por el usuario
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

//popUp
$(document).ready(function () {
    $('#open').on('click', function () {
        $('#popup').fadeIn('slow');
    });

    $('#close').on('click', function () {
        $('#popup').fadeOut('slow');
    });
});


