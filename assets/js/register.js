import { LocalStorage } from "./models.js";

const storage = new LocalStorage();
let player = storage.getItem('mind-player');
console.log(player);

if (player) { // quiero que me conserve los datos del jugador al recargar la pagina
    const avatarImage = document.querySelector('.avatar-image');
    avatarImage.style.backgroundImage = `url(${player.avatar})`
    document.querySelector('.user-name').value = player.username
    console.log(player);
} else {
    player = {
        avatar: '',
        username: ''
    };
    console.log(player);
}

// Selectores DOM
const avatarImg = document.querySelector('#avatar-image');
const ddlAvatar = document.getElementById('dropdown-content');
const btnAvatar = document.getElementById('btnAvatar');
const dropdownImages = document.querySelectorAll('#dropdown-content img');
const btnSave = document.getElementById('btnSave');

btnAvatar.addEventListener("click", () => {
    ddlAvatar.classList.toggle("show");
});

dropdownImages.forEach((imgAvatar) => {
    imgAvatar.addEventListener('click', () => {
        const avatarUrl = imgAvatar.getAttribute('src');
        console.log(avatarUrl);
        avatarImg.style.backgroundImage = `url('${avatarUrl}')`;
        ddlAvatar.classList.remove('show');
        player.avatar = avatarUrl;
    });
});

btnSave.addEventListener("click", () => {
    const txtUsername = document.querySelector('.user-name');
    player.username = txtUsername.value;
    storage.setItem('mind-player', player);
    window.location.href = './board.html';
});