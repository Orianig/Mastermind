const rowBoard = document.querySelector('.board');
const colorList = ['red', 'blue', 'pink','green','yellow'];
const selectedRow = 2;
const selectedCol = 3;
// random
const secretColorList = ['red', 'blue', 'red','green','yellow']

// 
const matrizInicial = [[-1, -1, -1]]
const userColorList = [['red', 'pink', 'yellow','red','red']]
const scoreList = []


// matriz[0] = [0, -1];
// scoreList[0] = calculatePoints(matriz[0]);

const calculatePoints = () => {
    const secretColorList = ['red', 'blue', 'red','green','yellow']
    const userColorList = [['red', 'pink', 'yellow','red','red']]
    const resultado = [];
    
    for (let i = 0; i < userColorList.length; i++) {
      const userColors = userColorList[i];
      const coincidenciasExactas = [];
      const coincidenciasPorTipo = [];
    
      for (let j = 0; j < userColors.length; j++) {
        const userColor = userColors[j];
        const secretColor = secretColorList[j];
    
        if (userColor === secretColor) {
          coincidenciasExactas.push(userColor);
        } else if (secretColorList.includes(userColor)) {
          coincidenciasPorTipo.push(userColor);
        }
      }
    
      resultado.push({
        coincidenciasExactas,
        coincidenciasPorTipo,
      });
    }
    
    console.log(resultado); // Muestra el resultado por consola
    
    const nuevoArray = resultado.map((objeto) => {
      return {
        coincidenciasExactas: objeto.coincidenciasExactas.join(', '),
        coincidenciasPorTipo: objeto.coincidenciasPorTipo.join(', '),
      };
    });
    
 
    console.log(nuevoArray);
}
calculatePoints(userColorList);


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
            }
        };
        addColumns(selectedCol);

        const validation = document.createElement('button');
        row.appendChild(validation);
        validation.classList.add('validation-button');

        rowBoard.appendChild(row);
    }
};

addRows(selectedRow);


