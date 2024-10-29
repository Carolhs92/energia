import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService 
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  async onSubmit() {
    const { email, password } = this.loginForm.value;
    
    console.log('Intentando iniciar sesión con:', email, password); 
  
    // Autenticación usando el servicio
    const { data, error } = await this.authService.login(email, password);

    if (data?.user) {
      console.log('Autenticación correcta, navegando a Facturas');
      this.router.navigate(['/facturas']).then(() => {
        window.location.reload();
      });
    } else {
      console.log('Error de autenticación:', error);
      alert('Usuario o contraseña incorrecta');
    }
  }

  async loginUser(email: string, password: string) {
    const { data, error } = await this.authService.login(email, password);
    if (error) {
      console.error("Error de inicio de sesión:", error.message);
    } else {
      console.log("Inicio de sesión exitoso:", data);
    }
  }
  
}
