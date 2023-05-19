
const save_localStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
};



const form = document.getElementById("myForm");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    console.log('Nombre ingresado:', nombre);

    save_localStorage('name', nombre);
});






/*save_localStorage();

const save_localStorage = () => {
    let user = {
        name: ""
    }
};

let name = "JUAN";

//let name = parseInt(prompt("introduce tu nombre"))
localStorage.setItem("usuario", nombre);

JSON.stringify(person)*/