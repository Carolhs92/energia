import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // Método para obtener facturas del usuario
  async getFacturasByUser(userId: string) {
    const { data, error } = await this.supabase
      .from('facturas')
      .select('*')
      .eq('user_id', userId); // Aplica el filtro por user_id
  
    if (error) {
      console.error('Error al obtener facturas:', error);
    }
    return { data, error };
  }  
  
  
  // Método para descargar el PDF
  async download(facturaId: string): Promise<{ data: boolean | null; error: any | null }> {
    const { data, error } = await this.supabase.storage
      .from('facturasPDF')
      .download(`public/${facturaId}.pdf`);
  
    if (error) {
      console.error('Error al descargar el archivo:', error);
      return { data: null, error }; // Retorna un objeto con `data: null` y `error`
    } else if (data) {
      const url = URL.createObjectURL(data);
      window.open(url); // Abre el archivo PDF
      return { data: true, error: null }; // Retorna éxito en `data`
    }
  
    // Agregar retorno en caso de que `data` no esté definido y tampoco haya un error explícito
    return { data: null, error: 'Unknown error' };
  }

}
