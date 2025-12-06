class Personaje {
  constructor() {
    this.posX = width / 2 - 100;
    this.posY = height - 180;  
    this.balas = []; 
    this.image = personaje;
  }

  dibujar() {
    image(this.image,this.posX, this.posY, 200, 200);  
  }
   
  disparar() {
    let bala = new Bala(this.posX + 100, this.posY); 
    this.balas.push(bala);
  }
}
