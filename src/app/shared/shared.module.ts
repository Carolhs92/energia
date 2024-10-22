import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from '../components/menu/menu.component';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [FooterComponent, MenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIcon
  ],
  exports: [FooterComponent, MenuComponent]  
})
export class SharedModule {
  constructor() {}
}
