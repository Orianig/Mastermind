let level = parseInt(localStorage.getItem('mind-level'));

// Selectores DOM
const level1 = document.getElementById('level-1');
const level2 = document.getElementById('level-2');
const level3 = document.getElementById('level-3');
const btnSave = document.getElementById('btnSave');


if (level) {
    if (level === 1) {
        level1.classList.add('active')
    }
    if (level === 2) {
        level2.classList.add('active')
    }
    if (level === 3) {
        level3.classList.add('active')
    }
} else {
    level = 1
}

//para el background de los elementos segun seleccion
level1.addEventListener("click", () => {
    level = 1
    level1.classList.add('active')
    level2.classList.remove('active')
    level3.classList.remove('active')
});
level2.addEventListener("click", () => {
    level = 2
    level1.classList.remove('active')
    level2.classList.add('active')
    level3.classList.remove('active')
});
level3.addEventListener("click", () => {
    level = 3
    level1.classList.remove('active')
    level2.classList.remove('active')
    level3.classList.add('active')
});
//guardado de la eleccion y paso a la siguiente pagina
btnSave.addEventListener("click", () => {
    localStorage.setItem('mind-level', level);
    window.location.href = './color.html';
});