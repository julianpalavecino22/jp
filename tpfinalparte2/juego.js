class Juego {
  constructor() {
  
    this.personaje = new Personaje(); 
    this.enemigosGenerados = false; 
    this.posicionesX = [40, 160, 280, 400, 520, 640];  
    this.posicionY = 30; 
    this.enemigosMuertos = 0; 
    this.descensoActivo = false;  
    this.velDescenso = 0.1; 
    this.filasDeEnemigos = [];  
    this.cantidadEnemigos = 0; 
  }

 activarDescenso() {
    if (this.enemigosMuertos > 3) {
      this.descensoActivo = true;  
      for (let fila of this.filasDeEnemigos) {
        for (let enemigo of fila) {
          if (enemigo.estaVivo()) {
            enemigo.posY += this.velDescenso; 
          }
        }
      }
    }
  }

  aumentoVelocidadDescenso() {
      if (this.enemigosMuertos > 3 && (this.enemigosMuertos - 3) % 2 === 0) {
      this.velDescenso += 0.001;  
    }
  }
 
  incrementarVelocidad() {
    if (this.enemigosMuertos > 6 && (this.enemigosMuertos % 2 === 0)) {
      for (let fila of this.filasDeEnemigos) {
        for (let enemigo of fila) {
          enemigo.velocidad += 0.01;  
        }
      }
    }
  }

  dibujar() {
    this.personaje.dibujar(); 
    this.incrementarVelocidad() ;
    this.activarDescenso();
    this.incrementarVelocidad();
    this.crearNuevasFilas();  
    this.aumentoVelocidadDescenso();

    for (let fila of this.filasDeEnemigos) {
      for (let enemigo of fila) {
        enemigo.dibujar();
        enemigo.mover();
      }
    }

    for (let i = 0; i < this.personaje.balas.length; i++) {
      this.personaje.balas[i].mover();
      this.personaje.balas[i].dibujar();

      if (this.personaje.balas[i].fueraDePantalla()) {
        this.personaje.balas[i].matar(); 
      }

      for (let j = 0; j < this.filasDeEnemigos.length; j++) {
        for (let k = 0; k < this.filasDeEnemigos[j].length; k++) {
          let enemigo = this.filasDeEnemigos[j][k];
          
          if (enemigo.estaVivo() && enemigo.colisionConBala(this.personaje.balas[i]) && this.personaje.balas[i].activa()) {
            enemigo.matar();  
            this.personaje.balas[i].matar();  
            this.enemigosMuertos++;  
            this.cantidadEnemigos--;  
            break;  
          }
        }
        if (!this.personaje.balas[i].activa()) {
          break;
        }
      }
    }
   
    for (let i = 0; i < this.filasDeEnemigos.length; i++) {
      this.filasDeEnemigos[i] = this.filasDeEnemigos[i].filter(enemigo => enemigo.estaVivo() && !enemigo.fueraDePantalla());
    }

    if (!this.enemigosGenerados) {
      this.crearFilaDeEnemigos();  
      this.enemigosGenerados = true;  
    }

    if (this.enemigosMuertos === 36) {
      return "gano";  
    }
   
    
    for (let fila of this.filasDeEnemigos) {
      for (let enemigo of fila) {
        if (enemigo.estaVivo() && enemigo.posY >= height) {
          return "perdio";  
        }
      }
    }
    return "jugando";  
  }
  
    teclaPresionada(keyCode) { 
    if (keyCode === 32) {  
      this.personaje.disparar();
      disparo.play();
    }
  }

  getTotalEnemigos() {
    return this.cantidadEnemigos;
  }

  crearFilaDeEnemigos() {
    let fila = [];
    for (let i = 0; i < this.posicionesX.length; i++) {
      let x = this.posicionesX[i];
      let y = this.posicionY;
      let enemigo = new Enemigo(x, y);
      fila.push(enemigo);
      this.cantidadEnemigos++;  
    }
    this.filasDeEnemigos.push(fila);
  }

  crearNuevasFilas() {
    let fila1 = [], fila2 = [], fila3 = [], fila4 = [], fila5 = [];
     if (this.enemigosMuertos >= 3 && this.filasDeEnemigos.length === 1) {
    for (let i = 0; i < this.posicionesX.length; i++) {
      fila1.push(new Enemigo(this.posicionesX[i], -50));
      fila2.push(new Enemigo(this.posicionesX[i] + 50, -150));
      fila3.push(new Enemigo(this.posicionesX[i], -250));
      fila4.push(new Enemigo(this.posicionesX[i] + 50, -350));
      fila5.push(new Enemigo(this.posicionesX[i], -450));
      this.cantidadEnemigos += 5;  
    }

    this.filasDeEnemigos.push(fila1, fila2, fila3, fila4, fila5);
    this.descensoActivo = true;
  }
}

 reiniciarJuego() {
    this.enemigos = [];
    this.personaje = new Personaje();
    this.enemigosMuertos = 0;
    this.descensoActivo = false;
    this.velDescenso = 0.1;
    this.filasDeEnemigos = [];
    this.cantidadEnemigos = 0;
    this.enemigosGenerados = false;
    this.crearNuevasFilas();  
    }
}
