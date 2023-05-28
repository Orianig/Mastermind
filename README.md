
# MASTERMIND


Este proyecto es un juego interactivo desarrollado utilizando HTML, CSS y JavaScript. El objetivo de este juego es adivinar una combinación de colores generada aleatoriamente por la computadora. El usuario va pasando por una serie de procesos como lo son el registro - seleccion de avatar - seleccion de nivel y seleccion de colores de juego.

## TECNOLOGÍAS UTILIZADAS
- HTML
- CSS
- JavaScript
- Animaciones Keyframe

Para este proyecto se ha generado un tablero dinamico que reacciona a la eleccion de los niveles y a los colores elegidos por el usuario; se hace uso del sesion storage para almacenar los datos y por ultimo, tiene un diseño totalmente responsive.

## Instrucciones del juego
1. Abre el archivo index.html en tu navegador web preferido.
2. Introduce tu nombre y avatar
3. Selecciona la dificultad del juego: Fácil, Medio o Difícil.
4. Haz clic en los botones de colores para seleccionar los colores con los que deseas jugar
5. Selecciona sobre las bolas del tablero para ir colocando la combinacion de juego y pulsa el boton de "validar"
6. El juego te proporcionará pistas sobre la precisión de tu elección:
    - Cada ficha morada significa que tienes un color correcto en la posición correcta.
    - Cada ficha blanca significa que tienes un color correcto, pero en una posición incorrecta.
7. Utiliza las pistas para ajustar tu estrategia y realizar nuevas combinaciones.
8. Repite los pasos 4-7 hasta que adivines la combinación correcta o alcances el número máximo de intentos permitidos.

![Instrucciones de juego personalizadas](https://github.com/Orianig/Mastermind/blob/main/assets/img/instrucciones-web.PNG)

## Estructura del proyecto
El proyecto consta de varias paginas principales necesarias para el desenvolvimiento del juego, estos son:

- index.html: En este caso se caracteriza por ser la pantalla de bienvenida al juego. como nota particular, esta pagina contiene keyframes para generar un sistema de loading. 

![Bienvenida al mastermind](https://github.com/Orianig/Mastermind/blob/main/assets/img/index.JPG)

- home.html:Esta pagina contiene el boton PLAY para inicio del juego y asu vez te redirige a otra dos paginas : instrucciones de juego y about creator. Como nota especial esta pagina es la unica que contiene sonido con la funcionalidad de poder apagarlo, a su vez, es la unica que contiene un gif de fondo.

![Inicio al mastermind](https://github.com/Orianig/Mastermind/blob/main/assets/img/home.JPG)

- register.html: En esta pagina el usuario puede acceder a la eleccion del avatar y a personalizar su nombre en el juego. Como notas particulares de esta pagina se tiene el uso de dropdown para la eleccion del avatar y salto de mensajes de error si no se cumplen todos los parametros para avanzar.

![Sistema de registro](https://github.com/Orianig/Mastermind/blob/main/assets/img/register.JPG)

- level.html: En esta pagina el usuario realiza la eleccion del nivel teniendo para elegir entre facil, dificil e intermedio.

![Eleccion del nivel](https://github.com/Orianig/Mastermind/blob/main/assets/img/level.JPG)

- color.html:En esta pagina el usuario realiza la eleccion de los colores de las bolas de juego. Como nota particular, se utiliza la eleccion mediante el uso del color picker, de esta manera se puede customizar totalmente los colores, por otra parte, tambien se establece un mensaje de error si no se completan todos los colores.

![Eleccion del color](https://github.com/Orianig/Mastermind/blob/main/assets/img/colors.JPG)

- board.html: Este es el tablero del juego, aca se traen todos los datos previamente completados y de forma dinamica se genera el tablero en funcion del nivel seleccionado y los colores elegidos. Esta pagina a su vez contiene acceso mediante popUps a las instrucciones del juego y al boton de salida que permite al usuario abandonar la partida. Una vez se gane o pierda se es redirigido a las respectivas paginas de ganador o perdedor que asu vez permiter al usuario seleccionar que hacer a continuacion.

![Tablero de juego](https://github.com/Orianig/Mastermind/blob/main/assets/img/board.JPG)

License and Copyright
Add MIT Licence. The style is completely created by Oriana Infante, the images of the about.html page as well as the main logo are taken from the free svg image server.
