import { LocalStorage } from "./models.js";

const localStorage = new LocalStorage();














/*class Person {
    birthDate;
    name;
    lastname;
    picture; // url en formato string donde se guarda la foto
    id;
    identification;
    identificationType;

    constructor(name, lastname, birthDate, np, pm) {
        this.name = name;
        this.lastname = lastname;
        this.identification = np;
        this.identificationType = pm;
        this.birthDate = birthDate;
        this.minAvatar = '';
    }

    getFullName() {
        return `${this.name} ${this.lastname}`;
    }

    validateId() {
        return this.identification && this.identificationType;
    }

    getBirthDateFormatted() {
        // pasa por un proceso para que me devuelva la fecha en un formato especifico
        return 'lun 4 may 23';
    }
}


const personInstance1 = new Person('Juan', 'Perez', 'avatar.png', '00', 'passport');
personInstance1.name = 'JuanJo';
console.log('persona clase 1', personInstance1);
const person2Instance = new Person('Oriana', 'Gonzalez', 'avatar.png', '00', 'passport');
console.log('persona clase 2', person2Instance);
console.log('getFullName persona 2', person2Instance.getFullName())
const isValidPerson1Id = personInstance1.validateId();
console.log('es valida la cedula de la persona 1', isValidPerson1Id);
console.log('es valida la cedula de la persona 2', person2Instance.validateId());

localStorage.setItem('player1', personInstance1);

function upLoadPicture(rutaLocal) {
    // proceso guardar foto
    return 'amazon/ruta/avatar.png';
}

personInstance1.picture = upLoadPicture();
person2Instance.picture = upLoadPicture();
person2Instance.name = 'Estuarda';

console.log('persona clase 1 - posterior subir foto', personInstance1);
console.log('persona 2 - posterior subir foto', person2Instance);


let personaObj = {
    name: 'Juan',
    lastname: 'Cal',
    picture: null,
    id: '0101',
    idType: 'passport',
}
personaObj.picture = 'avatar.png';

const validateId = (id, idType) => {
    const result = false;
    // dfsklfjalk
    return result
}
const isValidIdPersonObj = validateId(personaObj.id, personaObj.idType);*/

/*
const save_localStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
};



const form = document.getElementById("myForm");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    console.log('Nombre ingresado:', nombre);

    save_localStorage('name', nombre);
}); */






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