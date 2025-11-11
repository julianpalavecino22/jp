let tiempoInicio;
let tiempoActual;
let objJuego;
let estado = "inicio"; // "inicio" o "jugando"
let imgInicio;
let imgFondo = [];
let imgPersonaje;
let imgObstaculos = [];
let imgMonedas = [];
let fondoY = 0; // para el efecto de movimiento del fondo

function preload() {
  
  // pantalla de inicio
  imgInicio = loadImage('data/inicio.png');
  
  // Fondo
  imgFondo[1] = loadImage('data/fondo1.png');
  imgFondo[2] = loadImage('data/fondo2.png');

  // Personaje
  imgPersonaje = loadImage('data/personaje.png');

  // Obstaculos
  imgObstaculos[1] = loadImage('data/arbol.png');
  imgObstaculos[2] = loadImage('data/arbol.png');
  imgObstaculos[3] = loadImage('data/arbol.png');

  // Monedas
  imgMonedas[1] = loadImage('data/moneda.png');
  imgMonedas[2] = loadImage('data/moneda.png');
  imgMonedas[3] = loadImage('data/moneda.png');
  imgMonedas[4] = loadImage('data/moneda.png');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new juego();
  tiempoInicio = millis(); // guarda el momento en que inicia (en milisegundos)
}

function draw() {
    
 if (estado === "inicio") {
    image(imgInicio, 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    text("PLAY", width / 2, height - 80);
    return; // 👈 Esto hace que no se ejecute el resto del juego todavía
  }
  
  moverFondo(); // fondo con efecto de movimiento

  objJuego.dibujar(); // dibuja el resto del juego

  // calcula el tiempo transcurrido en segundos
  tiempoActual = int((millis() - tiempoInicio) / 1000);

  fill(0);
  textSize(20);
  text("Tiempo: " + tiempoActual, 10, 25);
}

// Mueve el fondo para dar sensación de velocidad
function moverFondo() {
  // desplazamiento vertical del fondo
  fondoY += 8; // velocidad del desplazamiento
  if (fondoY > height) fondoY = 0;

  // Dibuja fondo doble para el efecto de desplazamiento
  imageMode(CORNER);
  image(imgFondo[1], 0, fondoY, width, height);
  image(imgFondo[2], 0, fondoY - height, width, height);
}

function mousePressed() {
  if (estado === "inicio") {
    estado = "jugando";
  }
}


function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}
