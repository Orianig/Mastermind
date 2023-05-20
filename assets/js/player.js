import { LocalStorage, Player } from "./models";

const localStorage = new LocalStorage();
const player = new Player('Juanito');
localStorage.setItem('player', player);