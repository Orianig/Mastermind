const rowBoard = document.querySelector('.board');
const colorList = ['red', 'blue', 'pink', 'green', 'yellow'];
const selectedRow = 2;
const selectedCol = 3;
// random


//Comprobacion de fichas blancas y negras

const secretColorList = ['pink', 'blue', 'red', 'green', 'yellow'];
const userColorList = ['red', 'blue', 'yellow', 'red', 'red'];

const calculateMatches = (secretColors, userColors) => {
    const matches = [];

    for (let i = 0; i < userColors.length; i++) {
        const userColor = userColors[i];
        let match = '';

        // Verificar coincidencia exacta
        if (userColor === secretColors[i]) {
            match = 'negro';
            secretColors[i] = null; // Marcar el color como usado en secretColors
        } else {
            // Verificar coincidencia por tipo
            const index = secretColors.findIndex((color) => color === userColor);
            if (index !== -1) {
                match = 'blanco';
                secretColors[index] = null; // Marcar el color como usado en secretColors
            }
        }

        matches.push(match);
    }

    return matches;
};

const result = calculateMatches(secretColorList, userColorList);
console.log(result);

//Funcion que genera la combinación ganadora.
const secretColorList = () => {
    let colorList = [

    ];

    for (let i = 0; i < colorList.length; i++) {
        let randomPosition = Math.floor(Math.random() * colorList.length);

        secretColorList.push(colorList[randomPosition]);
    }

    console.log(colorList, "estos son los colores posibles...")
    console.log(secretColorList, "estos son los colores ganadores....")
};

secretColorList();








// const calculatePoints = matrizPropuesta.map((valor, indice) => {
//     if (valor === secretColorList[indice]) {
//       return 1;
//     } else {
//       return 0; 
//     }
//   });
//   const resultadosPosicion = Array.from(calculatePoints);
//   console.log(resultadosPosicion);




const addRows = (numRows) => {
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        const row = document.createElement('div');
        row.classList.add('row-ppal');

        const points = document.createElement('div');
        points.classList.add('points');

        for (let j = 0; j < selectedCol; j++) {
            const ball = document.createElement('span');
            ball.classList.add('ball');
            points.appendChild(ball);
        }
        row.appendChild(points);

        const ballsContainer = document.createElement('div');
        ballsContainer.classList.add('color-balls-container');

        const addColumns = (numBalls) => {
            for (let columnIndex = 0; columnIndex < numBalls; columnIndex++) {
                const ball = document.createElement('div');
                ball.classList.add('ball');
                row.appendChild(ball);
                //asignacion del color de cada bola
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
            generateColumns(selectedCol);
        };
        row.appendChild(columnContainer);

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

