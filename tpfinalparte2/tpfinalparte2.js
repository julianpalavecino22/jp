//Alma Kaldi, comisión 4
//https://youtu.be/dHbMVwv6S_4
let pantallaPrincipal;  

function preload(){
  soundFormats('mp3');
  personaje = loadImage("data/perry.png");
  enemigos = loadImage("data/Doofenshmirtz.png");
  disparo = loadSound('data/disparo.mp3');
  logo = loadImage("data/logo.png");
  phineas = loadImage("data/phineas.png");
}
function setup() {
  createCanvas(640, 480); 
  pantallaPrincipal = new Pantalla();  
}

function draw() {
  background(90);
  pantallaPrincipal.dibujar(); 

  if (pantallaPrincipal.estado === 3) {
    pantallaPrincipal.objJuego.dibujar(); 
  }
}

function keyPressed() {
  pantallaPrincipal.keyPressed();   
}
