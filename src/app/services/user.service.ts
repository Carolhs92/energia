import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) {}

  // Obtener datos del perfil desde AuthService
  getUserData(userId: string) {
    return this.authService.getUserData(userId);
  }

  // Actualizar datos del perfil desde AuthService
  updateUserData(userId: string, profileData: any) {
    return this.authService.updateUserData(userId, profileData);
  }
}
