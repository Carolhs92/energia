import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  goToFacturas() {
    this.router.navigate(['/facturas']).then(() => {
      window.location.reload();
    });
  }
  
  goToPerfil() {
    this.router.navigate(['/perfil']).then(() => {
      window.location.reload();
    });
  }  

  async logout() {
    await this.authService.logout();
    window.location.href = '/login';
  }
  
}
