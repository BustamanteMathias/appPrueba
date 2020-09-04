import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase01',
  templateUrl: './clase01.component.html',
  styleUrls: ['./clase01.component.css']
})

export class Clase01Component implements OnInit {
  title = 'Clase 01';

  public PROMEDIO:string = '';

  public edadUno:string;
  public edadDos:string;

  constructor() { }

  ngOnInit() {
  }

  Calcular() {
    this.PROMEDIO = ((parseFloat(this.edadUno) + parseFloat(this.edadDos)) / 2).toString();
  }

  Limpiar() {
    this.edadUno = '0';
    this.edadDos = '0';
    this.PROMEDIO = '';
  }
}
