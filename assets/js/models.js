export class Player {
    constructor(avatar, name) {
        this.id = null;
        this.name = name;
        this.avatar = null;
        this.score = 0;
    }
}

export class Game {
    constructor(level, color) {
        this.level = level;
        this.color = color;
    }
}

export class LocalStorage {
    constructor() {

    }

    // Método para guardar un valor en el Local Storage
    setItem = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Método para obtener un valor del Local Storage
    getItem = (key) => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    // Método para eliminar un valor del Local Storage
    removeItem = (key) => {
        localStorage.removeItem(key);
    }

    // Método para limpiar todos los valores del Local Storage
    clear = () => {
        localStorage.clear();
    }
}