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

        availableColors.splice(randomIndex, 1);
    }
    return randomColors;
};
