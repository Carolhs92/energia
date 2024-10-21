import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit{
  constructor(private router: Router) {
    console.log('DashboardPage constructor')
  }

  goToFacturas() {
    console.log('Navigating to Facturas');
    this.router.navigateByUrl('/facturas');
  }

  goToPerfil() {
    console.log('Navigating to Perfil');
    this.router.navigateByUrl('/perfil');
  }

  ngOnInit() {
    console.log('DashboardPage cargada');
  }
}
