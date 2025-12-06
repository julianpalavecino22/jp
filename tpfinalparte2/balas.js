class Bala {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.velocidad = 5;  
    this.vida = true;
  }

  mover() {
    this.posY -= this.velocidad; 
  }
  
  activa() {
    return this.vida;
  }
  
  dibujar() {
    if (this.vida) {
      fill(0); 
      ellipse(this.posX, this.posY, 10, 10); 
    }
  }

  fueraDePantalla() {
    return this.posY < 0;  
  }

  matar() {
    this.vida = false; 
  }
}
