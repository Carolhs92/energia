import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // Iniciar sesión
  async login(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({ email, password });
  }

  // Obtener ID del usuario actual
  async getCurrentUserId(): Promise<string | null> {
    const { data, error } = await this.supabase.auth.getSession();
    if (error) {
      console.error('Error al obtener la sesión:', error);
      return null;
    }
    return data.session?.user?.id || null;  // Devuelve solo el user ID
  }

  // Cerrar sesión
  async logout() {
    return await this.supabase.auth.signOut();
  }

  // Obtener datos del usuario (perfil)
  async getUserData(userId: string) {
    const { data, error } = await this.supabase
      .from('usuarios')
      .select('*')
      .eq('user_id', userId);
  
    if (error) {
      console.error('Error al obtener los datos del usuario:', error);
    } else if (data && data.length === 0) {
      console.warn(`No se encontraron datos para el usuario con ID: ${userId}`);
    }
  
    console.log("Datos obtenidos del usuario:", data);
    return { data, error };
  }

  // Actualizar datos del usuario (perfil)
  async updateUserData(userId: string, profileData: any) {
    return this.supabase
      .from('usuarios')
      .update(profileData)
      .eq('user_id', userId);
  }
}
