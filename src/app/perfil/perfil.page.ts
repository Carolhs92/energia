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

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadPerfil();
  }

  // Cargar datos del perfil del usuario
  async loadPerfil() {
    const session = await this.authService.getCurrentUser(); // Accede directamente a session
    if (session && session.user) {
      const { data: perfil, error } = await this.userService.getUserData(session.user.id);

      if (perfil && perfil.length > 0) {
        // Asignar valores directamente a las propiedades de la clase
        this.nombre = perfil[0].nombre;
        this.correo = perfil[0].correo || session.user.email; // Usa el correo de sesión si no está en el perfil
        this.fechaAlta = perfil[0].fecha_alta;
        this.direccion = perfil[0].direccion;
      } else {
        console.error('Perfil no encontrado o vacío.');
      }
    } else {
      console.error('No hay sesión activa o usuario no encontrado.');
    }
  }

  // Actualizar los datos del perfil
  async actualizarPerfil() {
    const session = await this.authService.getCurrentUser(); // Accede directamente a session
    console.log("ID del usuario autenticado:", session?.user?.id);

    if (session && session.user) {
      const updateData = {
        nombre: this.nombre,
        direccion: this.direccion,
        correo: this.correo,  // Usa el correo actual
        fecha_alta: this.fechaAlta
      };
      const { data, error } = await this.userService.updateUserData(session.user.id, updateData);

      if (error) {
        console.error('Error actualizando perfil:', error);
      } else {
        alert('Perfil actualizado correctamente');
      }
    }
  }
}
