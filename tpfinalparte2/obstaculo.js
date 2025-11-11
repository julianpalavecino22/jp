class obstaculo {
  constructor(indice = 0) {
    // posición "3D" inicial
    this.x = random(-250, 250);
    this.y = random(-150, 150);
    this.z = random(600, 1600); // qué tan lejos está

    // imagen del árbol
    this.img = imgObstaculos[int(random(1, 2))];
  }

  actualizar() {
    this.z -= 6; // velocidad con la que se acerca (ajustá según tu juego)

    // Si el árbol ya pasó al jugador, se reinicia
    if (this.z < 100) {
      this.z = random(1400, 1800);
      this.x = random(-250, 250);
      this.y = random(-150, 150);
      this.img = imgObstaculos[int(random(1, 2))];
    }
  }

  dibujar() {
    // Escala de perspectiva (más lejos = más chico)
    let escala = 400 / this.z;
    let pantallaX = width / 2 + this.x * escala;
    let pantallaY = height / 2 + this.y * escala;
    let tamaño = 300 * escala;

    imageMode(CENTER);
    image(this.img, pantallaX, pantallaY, tamaño, tamaño);
  }
}
