import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  private supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

  constructor() {}

  // Obtener todas las facturas con paginación
  async getFacturasPaginadas() {
    const { data, error } = await this.supabase
      .from('facturas')
      .select('*')
      .range(0, 9);  // Devuelve las primeras 10 facturas
    return { data, error };
  }

  // Obtener todas las facturas
  async getFacturas() {
    const { data, error } = await this.supabase
      .from('facturas')
      .select('*');
    return { data, error };
  }

    // Obtener el archivo PDF desde Supabase Storage
    async download(facturaId: string) {
        const { data, error } = await this.supabase
        .storage
        .from('facturasPDF')  // Nombre del bucket en Supabase Storage
        .download(`public/${facturaId}.pdf`);  // Ruta del archivo en el bucket
    
        if (error) {
        console.error('Error al descargar el PDF:', error);
        return null;  // Retorna null si hay un error
        }
    
        // data es un Blob que representa el archivo PDF
        return data;  // Devuelve el archivo como Blob
    }
  
  
}
