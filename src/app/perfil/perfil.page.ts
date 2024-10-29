import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre: string = '';
  correo: string = '';
  fechaAlta: string = '';
  direccion: string = '';
  userId: string | null = null;

  // Declarar userProfile opcionalmente para almacenar el perfil del usuario
  userProfile?: { nombre: string; correo: string; fechaAlta: string; direccion: string };

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    const userId = await this.authService.getCurrentUserId();
    if (userId) {
      this.userId = userId;
      await this.loadUserProfile(userId);
    } else {
      console.error('No se pudo obtener el ID del usuario.');
    }
  }

  // Cargar datos del perfil del usuario
  async loadUserProfile(userId: string) {
    const { data, error } = await this.userService.getUserData(userId);
    if (error) {
      console.error('Error al obtener datos del usuario:', error);
    } else if (data) {
      const userProfile = data[0];
      this.nombre = userProfile.nombre;
      this.correo = userProfile.correo;
      this.direccion = userProfile.direccion;
      this.fechaAlta = userProfile.fecha_alta;
    }
  }
  

  // Actualizar los datos del perfil
  async actualizarPerfil() {
    if (this.userId) {
      const updateData = {
        nombre: this.nombre,
        direccion: this.direccion,
        correo: this.correo,
        fecha_alta: this.fechaAlta
      };
      
      const { error } = await this.userService.updateUserData(this.userId, updateData);
      if (error) {
        console.error('Error actualizando perfil:', error);
      } else {
        alert('Perfil actualizado correctamente');
      }
    } else {
      console.error('No se pudo actualizar el perfil porque el ID del usuario no está disponible.');
    }
  }
}
