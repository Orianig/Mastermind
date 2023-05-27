
let player = JSON.parse(localStorage.getItem('mind-player'));

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
    localStorage.setItem('mind-player', JSON.stringify(player));

    if (player.avatar !== '' && player.username !== '') {
        localStorage.setItem('mind-player', JSON.stringify(player));
        window.location.href = './level.html';
    } else {
        if (player.avatar === '') {
            showError("Selecciona tu avatar", 5000);
        } else {
            showError("Escribe tu nombre", 5000);
        }
    }
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
