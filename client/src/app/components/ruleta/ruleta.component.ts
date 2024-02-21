import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements OnInit {

  constructor() { }

  estado: 'inicial' | 'intermedio' | 'final' | 'cargando' = 'inicial';

  // imagenCargando: string = '../../../assets/RuletaGirando.png';
  imagen2: string = '../../../assets/RuletaX2.png';
  imagenIntermedia: string = '';
  imagenFinal: string = '';

  iniciarJuego(): void {
    this.estado = 'cargando';
    this.imagen2 = '../../../assets/RuletaGirando.png';
    setTimeout(() => {
      const resultadoRandom = Math.floor(Math.random() * 4) + 1;
      this.imagen2  = `../../../assets/RuletaGanador${resultadoRandom}.png`;
      this.estado = 'intermedio';
      setTimeout(() => {
        this.imagen2 = `../../../assets/Ganaste${resultadoRandom}.png`;
        this.estado = 'final';
      }, 5000); // Segundo wait de 5 segundos para mostrar el resultado final
    }, 5000); // Primer wait de 5 segundos antes de mostrar el resultado intermedio
  }

  ngOnInit(): void {
  }

}
