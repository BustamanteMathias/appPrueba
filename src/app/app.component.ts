import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

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
