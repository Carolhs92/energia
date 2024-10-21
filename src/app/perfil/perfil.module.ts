import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Importar MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Importar MatInputModule
import { MatCardModule } from '@angular/material/card'; // Importar MatCardModule
import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilPage } from './perfil.page'; // Asegúrate que sea el componente correcto
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PerfilPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    PerfilPageRoutingModule,
    IonicModule
  ]
})
export class PerfilPageModule { }
