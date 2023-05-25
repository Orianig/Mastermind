
const btnPlay = document.getElementById('play-button');

btnPlay.addEventListener("click", () => {
    window.location.href = './pages/register.html';
});

//Elementos DOM
const audioPlayer = document.getElementById('audioPlayer');
const toggleSoundButton = document.getElementById('sound-button');
const soundImage = document.getElementById('soundImage');

function toggleSound() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        soundImage.src = '../assets/img/sound-on.png'; // Cambiar a la imagen de sonido activado
    } else {
        audioPlayer.pause();
        soundImage.src = '../assets/img/sound-off.png'; // Cambiar a la imagen de sonido desactivado
    }
}

// Evento clic del botón para activar/desactivar el sonido y cambiar la imagen
toggleSoundButton.addEventListener('click', toggleSound);