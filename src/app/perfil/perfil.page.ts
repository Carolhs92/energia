import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  personalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      nombre: ['Juan Pérez', Validators.required],
      email: ['juan.perez@example.com', [Validators.required, Validators.email]],
      fechaAlta: ['2023-01-01', Validators.required],
      direccionEnvio: ['Calle Falsa 123', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log('Datos personales actualizados:', this.personalForm.value);
  }
}
