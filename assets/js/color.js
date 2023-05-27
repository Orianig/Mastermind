
// Selectores DOM
const container = document.getElementById('balls-container');
const numBallsDictionary = {
    1: 4,
    2: 5,
    3: 6
}
let colorSelectedList = [];

//creacion de las bolas de juego
const addBalls = (numBalls) => {
    for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        const colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        ball.appendChild(colorPicker);
        container.appendChild(ball);
        colorPicker.addEventListener('change', (event) => {
            const selectedColor = event.target.value;
            ball.style.backgroundColor = selectedColor;
            colorSelectedList[i] = selectedColor;
            console.log(colorSelectedList);
        });
    };
};

// Defino la cantidad de bolas que van a aparecer en mi pantalla
let level = parseInt(localStorage.getItem('mind-level'));
if (level) {
    colorSelectedList = new Array(numBallsDictionary[level])
    addBalls(numBallsDictionary[level]);
};

//validaciones para poder continuar
btnSave.addEventListener("click", () => {
    const isValid = colorSelectedList.filter(color => {
        return color
    }).length == numBallsDictionary[level]
    if (!isValid) {
        showError("Selecciona todos los colores", 5000);
        return
    }
    localStorage.setItem('mind-colors', JSON.stringify(colorSelectedList));
    window.location.href = './board.html';
});
//error
const showError = (message, duration) => {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";

    setTimeout(() => {
        errorMessage.style.display = "none";
    }, duration);
}

