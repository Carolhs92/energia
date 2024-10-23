import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../services/facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
})
export class FacturasPage implements OnInit {
  facturas: any[] = [];
  displayedColumns: string[] = ['nombre', 'fecha_emision', 'importe', 'direccion_suministro', 'descargar'];

  constructor(private facturasService: FacturasService) {}

  ngOnInit() {
    this.loadFacturasPaginadas();  
  }

  async loadFacturasPaginadas() {
    const { data, error } = await this.facturasService.getFacturasPaginadas();
    if (error) {
      console.error('Error al traer las facturas', error);
    } else {
      this.facturas = data || [];
      console.log('Facturas cargadas:', this.facturas);
    }
  }

  async downloadPDF(facturaId: string) {
    const file = await this.facturasService.download(facturaId);
    if (file) {
      const url = URL.createObjectURL(file);  // Crear una URL para el archivo Blob
      const a = document.createElement('a');
      a.href = url;
      a.download = `factura_${facturaId}.pdf`;  // Nombre del archivo
      a.click();
      URL.revokeObjectURL(url);  // Liberar la URL después de usarla
    }
  }
}
