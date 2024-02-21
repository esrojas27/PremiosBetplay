import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  constructor() { }

  cajaMega: string = "../../../assets/BoxCajaMega.png";
  cajaExtra: string = "../../../assets/BoxCajaExtra.png";
  cajaSuper: string = "../../../assets/BoxCajaSuper.png";

  abrirMega(){
    this.cajaMega = `../../../assets/BoxCajaMegaAbierta.png`;
  }
  abrirExtra(){
    this.cajaExtra = `../../../assets/BoxCajaExtraAbierta.png`;
  }
  abrirSuper(){
    this.cajaSuper = `../../../assets/BoxCajaSuperAbierta.png`;
  }

  ngOnInit(): void {
  }

}
