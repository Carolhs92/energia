import {Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Factura {
  nombre: string;
  fecha: string;
  importe: number;
  direccion: string;
}

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
})
export class FacturasPage {
  displayedColumns: string[] = ['nombre', 'fecha', 'importe', 'direccion'];
  facturas: Factura[] = [
    { nombre: 'Factura 1', fecha: '2023-10-19', importe: 100, direccion: 'Calle Falsa 123' },
    { nombre: 'Factura 2', fecha: '2023-10-18', importe: 200, direccion: 'Calle Real 456' },
  ];

  constructor(private router: Router) {}

  // goToFacturas() {
  //   this.router.navigate(['/facturas'], { replaceUrl: true });
  // }

  // goToPerfil() {
  //   this.router.navigate(['/perfil'], { replaceUrl: true });
  // }
  

}
