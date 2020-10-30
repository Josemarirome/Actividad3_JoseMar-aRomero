import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {

  constructor() { }
  datosPersonales = [
    {
      nombre: 'Jose María',
      apellido: 'Romero',
      dni: '71368846F',
      direccion: 'Colón 29',
      poblacion: 'San Carlos del Valle'
    }
  ];
  ngOnInit() {
  }

}
