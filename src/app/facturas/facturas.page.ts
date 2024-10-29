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
    const session = await this.authService.getCurrentUser();
    console.log("ID del usuario autenticado:", session?.user?.id);
    this.userId = session?.user?.id || null;

    if (this.userId) {
      await this.loadFacturasPaginadas();
    } else {
      console.error('No se pudo obtener el ID del usuario.');
    }
  }

  async loadFacturasPaginadas() {
    if (!this.userId) {
      console.error("User ID no está definido.");
      return;
    }
  
    console.log('Cargando facturas para userId:', this.userId);  // Confirmar userId en la consola
  
    const { data, error } = await this.facturasService.getFacturasByUser(this.userId);
    if (error) {
      console.error('Error al traer las facturas', error);
    } else {
      this.facturas.data = data || [];
      console.log('Facturas cargadas:', this.facturas.data);
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
