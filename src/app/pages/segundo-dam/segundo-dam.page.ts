import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-dam',
  templateUrl: './segundo-dam.page.html',
  styleUrls: ['./segundo-dam.page.scss'],
})
export class SegundoDamPage implements OnInit {

  constructor() { }
  asignaturas = [
    {
      procesos: 'Procesos y servicios',
      interfaces: 'Desarrollo de interfaces',
      gestionEmpresarial: 'Sistemas de gestión empresarial',
      datos: 'Acceso a datos',
      programacion: 'Programación multimedia',
      empresas: 'Empresas'
    }
  ];
  ngOnInit() {
  }

}
