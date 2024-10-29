import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private authService: AuthService) {}

  getUserData(userId: string) {
    return this.authService.getUserData(userId);
  }

  updateUserData(userId: string, profileData: any) {
    return this.authService.updateUserData(userId, profileData);
  }
}
