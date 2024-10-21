import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { username, password } = this.loginForm.value;

    // Simulación de autenticación con datos mock
    if (username === 'admin' && password === '1234') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }
}
