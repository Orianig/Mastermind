
const btnPlay = document.getElementById('play-button');

btnPlay.addEventListener("click", () => {
    window.location.href = './register.html';
});

//selectores DOM
const toggleSoundButton = document.getElementById('sound-button');


function toggleSound() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        soundImage.src = '../assets/img/sound-on.png'; // Cambiar a la imagen de sonido activado
    } else {
        audioPlayer.pause();
        soundImage.src = '../assets/img/sound-off.png'; // Cambiar a la imagen de sonido desactivado
    }
}

toggleSoundButton.addEventListener('click', toggleSound);