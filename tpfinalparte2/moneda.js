class moneda {
  constructor() {
    // Posición inicial "3D"
    this.x = random(-200, 200);
    this.y = random(-100, 100);
    this.z = random(500, 1500); // qué tan lejos arranca

    // Imagen aleatoria como ya tenías
    this.img = imgMonedas[int(random(1, 5))];
  }

  actualizar() {
    this.z -= 4; // velocidad de acercamiento

    // Si "pasa" al jugador, se reinicia al fondo
    if (this.z < 100) {
      this.z = random(800, 1500);
      this.x = random(-200, 200);
      this.y = random(-100, 100);
      this.img = imgMonedas[int(random(1, 5))];
    }
  }

  dibujar() {
    // Escala de perspectiva (más lejos = más chico)
    let escala = 300 / this.z;
    let pantallaX = width / 2 + this.x * escala;
    let pantallaY = height / 2 + this.y * escala;
    let tamaño = 60 * escala;

    imageMode(CENTER);
    image(this.img, pantallaX, pantallaY, tamaño, tamaño);
  }
}
