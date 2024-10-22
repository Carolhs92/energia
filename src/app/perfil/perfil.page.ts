import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],

})
export class PerfilPage {
  personalForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.personalForm = this.fb.group({
      nombre: ['Juan Pérez', Validators.required],
      email: ['juan.perez@example.com', [Validators.required, Validators.email]],
      fechaAlta: ['2023-01-01', Validators.required],
      direccionEnvio: ['Calle Falsa 123', Validators.required],
    });
  }

  onSubmit() {
    console.log('Datos personales actualizados:', this.personalForm.value);
  }

  // goToFacturas() {
  //   this.router.navigate(['/facturas'], { replaceUrl: true });
  // }

  // goToPerfil() {
  //   this.router.navigate(['/perfil'], { replaceUrl: true });
  // }
}
