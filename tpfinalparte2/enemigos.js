class Enemigo {
  constructor(posX, posY, velocidad = 1, image = enemigos) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
    this.velocidad = velocidad;
    this.ancho = 50;
    this.alto = 70;
    this.image = image;
  }
  
 
  dibujar(){
    if(this.vida){
      image(this.image, this.posX, this.posY, this.ancho, this.alto);
    }
  }
  
  mover() {
    this.posX += this.velocidad; 

    if (this.posX > width) {
      this.posX = -this.ancho;  
    }
  }
  
  estaVivo() {
    return this.vida;
  }
  
  matar() {
    this.vida = false;
  }
  
  colisionConBala(bala) {
    return (bala.posX > this.posX && bala.posX < this.posX + this.ancho) && 
           (bala.posY > this.posY && bala.posY < this.posY + this.alto);
  }

  fueraDePantalla() {
    return this.posX < -this.ancho;  
  }
}
