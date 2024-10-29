import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
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

  // Obtener sesión actual
  async getCurrentUser() {
    const { data, error } = await this.supabase.auth.getSession();
    if (error) {
      console.error('Error al obtener la sesión del usuario:', error);
      return null;
    }
    return data?.session || null; // Devuelve la sesión directamente
  }

  // Cerrar sesión
  async logout() {
    return await this.supabase.auth.signOut();
  }

  // Obtener datos del usuario (perfil)
  async getUserData(userId: string) {
    const { data, error } = await this.supabase
        .from('usuarios')  // Asegúrate de que la tabla es 'usuarios'
        .select('*')
        .eq('id', userId); // Aquí 'id' debe coincidir con el campo que almacena el user_id en tu tabla de usuarios

    if (error) {
        console.error('Error al obtener el perfil:', error);
    }
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
