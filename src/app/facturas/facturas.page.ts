import { Component, OnInit } from '@angular/core';

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
export class FacturasPage implements OnInit {
  displayedColumns: string[] = ['nombre', 'fecha', 'importe', 'direccion'];
  facturas: Factura[] = [
    { nombre: 'Factura 1', fecha: '2023-10-19', importe: 100, direccion: 'Calle Falsa 123' },
    { nombre: 'Factura 2', fecha: '2023-10-18', importe: 200, direccion: 'Calle Real 456' },
  ];

  constructor() {
    console.log('Facturas page initialized');
  }

  ionViewWillEnter() {
    console.log('Entering Facturas page');
  }

  ngOnInit() {
    console.log('Facturas page loaded');
  }
}
