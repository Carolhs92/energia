import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';  
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FacturasPageRoutingModule } from './facturas-routing.module';
import { FacturasPage } from './facturas.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule, 
    MatIconModule, 
    IonicModule,
    FacturasPageRoutingModule,
    RouterModule,
  ],
  declarations: [FacturasPage]
})
export class FacturasPageModule {}
