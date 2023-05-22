
// Selectores DOM
const container = document.querySelector('.balls-container');
const numBallsLevel1 = 4;
const numBallsLevel2 = 5;
const numBallsLevel3 = 6;
const colorSelectedList = [];

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
            colorSelectedList.push(selectedColor);
        });
    };
};

// Defino la cantidad de bolas que van a aparecer en mi pantalla
let level = parseInt(localStorage.getItem('mind-level'));
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

btnSave.addEventListener("click", () => {
 const randomCombination = generateRandomColors(colorSelectedList.length, colorSelectedList);
 localStorage.setItem('mind-random-combination', JSON.stringify(randomCombination));
 localStorage.setItem('mind-colors', JSON.stringify(colorSelectedList));
 window.location.href = './board.html';
});

const generateRandomColors = (numColors, availableColors) => {
let randomColors = [];
for (let i = 0; i < numColors; i++) {
 const randomIndex = Math.floor(Math.random() * availableColors.length);
 const randomColor = availableColors[randomIndex];
 randomColors.push(randomColor);
}
return randomColors;
};
