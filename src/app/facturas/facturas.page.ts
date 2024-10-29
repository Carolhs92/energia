import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FacturasService } from '../services/facturas.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
})
export class FacturasPage implements OnInit {
  facturas: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['nombre', 'fecha_emision', 'importe', 'direccion_suministro', 'descargar'];
  userId: string | null = null;

  constructor(private facturasService: FacturasService, private authService: AuthService) {}

  async ngOnInit() {
    const userId = await this.authService.getCurrentUserId();
    if (userId) {
      await this.loadFacturas(userId);
    } else {
      console.error('No se pudo obtener el ID del usuario.');
    }
  } 

  async loadFacturas(userId: string) {
    const { data, error } = await this.facturasService.getFacturasByUser(userId);
    if (error) {
      console.error('Error al traer las facturas:', error);
    } else {
      this.facturas.data = data || [];
    }
  }
  
  async downloadPDF(facturaId: string) {
    const result = await this.facturasService.download(facturaId);
    
    if (result?.error) {
      console.error('Error al descargar el PDF:', result.error);
    } else if (result?.data) {
      console.log('PDF descargado con éxito');
    } else {
      console.error('No se pudo descargar el PDF debido a un error desconocido.');
    }
  }
  
}
