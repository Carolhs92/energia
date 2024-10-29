import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // Iniciar sesión
  async login(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({ email, password });
  }

  // Obtener sesión actual
  async getCurrentUser() {
    return this.supabase.auth.getSession();  // Devuelve la sesión actual
  }

  // Cerrar sesión
  async logout() {
    return await this.supabase.auth.signOut();
  }

  // Obtener datos del usuario (perfil)
  async getUserData(userId: string) {
    return this.supabase
      .from('usuarios')
      .select('*')
      .eq('user_id', userId);
  }

  // Actualizar datos del usuario (perfil)
  async updateUserData(userId: string, profileData: any) {
    return this.supabase
      .from('usuarios')
      .update(profileData)
      .eq('user_id', userId);
  }
}
