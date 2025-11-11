class personaje {
  constructor() {
    this.posX = 200;
    this.posY = 280;
    this.img = imgPersonaje;
    this.vida = 1;
  }

  //dibuja la imagen del personaje
  dibujar () {
    image(this.img, this.posX, this.posY, 250, 200)
  }

  //si presiona la tecla LEFT se va a mover  hacia la  -->
  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha ();
    }
  }
  moverDerecha () {
    this.posX += 40;
  }


  moverIzquierda() {
    this.posX -=40;
  }

  estaVivo () {
  }
}
