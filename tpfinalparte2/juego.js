class juego {
  constructor() {
    this.fondo = imgFondo[int(random(1, 3))];
    this.crearPersonaje();
    this.crearObstaculos();
    this.crearMonedas();
    this.puntos = 0; // contador de monedas
  }
  dibujar() {
    // Fondo
    image(this.fondo, 0, 0, width, height);

    // personaje
    this.personaje.dibujar();

    // obstaculos
    for (let i = 0; i < 2; i++) {
      if (this.obstaculos[i]) {
        this.obstaculos[i].actualizar(); // se mueve hacia abajo
        this.obstaculos[i].dibujar();

        // 💥 Colisión con obstáculo
        let d = dist(
          this.personaje.posX,
          this.personaje.posY,
          this.obstaculos[i].posX,
          this.obstaculos[i].posY );
      }
    }

    // monedas
    for (let i = 0; i < 5; i++) {
      if (this.monedas[i]) {
        this.monedas[i].actualizar(); // se mueven hacia abajo
        this.monedas[i].dibujar();

        // Colisión con moneda
        let d = dist(
          this.personaje.posX,
          this.personaje.posY,
          this.monedas[i].posX,
          this.monedas[i].posY );
        if (d < 40) {
          // reposicionar moneda arriba
          //this.monedas[i].posY = random(-400, -50);
         // this.monedas[i].posX = random(100, width - 100);
         // this.puntos += 1; // suma 1 punto
        }
      }
    }
    // Mostrar puntos
    fill(0);
    textSize(20);
    text("Puntos: " + this.puntos, 480, 20);
  }

  crearObstaculos() {
    this.obstaculos = [];
    for (let i = 0; i < 3; i++) {
      this.obstaculos[i] = new obstaculo(i);
    }
  }

  crearMonedas() {
    this.monedas = [];
    for (let i = 0; i < 6; i++) {
      this.monedas[i] = new moneda();
    }
  }

  crearPersonaje() {
    this.personaje = new personaje();
  }

  teclaPresionada(keyCode) {
   this.personaje.teclaPresionada(keyCode);
  }
}

//  dibujar () {
//    image(this.fondo, 0, 0, width, height);
//    this.personaje.dibujar();

//    // Dibuja obstáculos
//    for (let i = 0; i < 10; i++) {
//      if (this.obstaculos[i]) {
//        this.obstaculos[i].dibujar();
//      }
//    }

//    // Dibuja monedas
//    for (let i = 0; i < 10; i++) {
//      if (this.monedas[i]) {
//        this.monedas[i].dibujar();
//      }
//    }
//  }


//  iniciar() {
//  }
//  crearObstaculos() {
//  this.obstaculos = [];

//  // Punto base de donde empieza la fila de arboles
//let baseX = random(270, 285);  // centrado horizontalmente
// let baseY = random(350, 220); // vertical (parte baja visible)

//  for (let i = 0; i < 2; i++) { // cuántos arboles hay en la  fila
//    this.obstaculos[i] = new obstaculo(i, baseX, baseY);
//    //this.obstaculos = [];
//    //for (let i = 0; i < 4; i++) {
//    //  this.obstaculos[i] = new obstaculo();
//   }
//  }
//  crearMonedas() {
//    this.monedas = [];
//    for (let i = 0; i < 5; i++) {
//      this.monedas[i] = new moneda();
//    }
//  }

//  crearPersonaje() {
//    this.personaje = new personaje();
//  }
//  personajeGano() {
//  }

//  teclaPresionada(keyCode) {
//    this.personaje.teclaPresionada(keyCode);
//  }
//}
