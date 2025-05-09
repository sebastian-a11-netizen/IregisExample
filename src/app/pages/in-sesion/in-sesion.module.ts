import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InSesionPageRoutingModule } from './in-sesion-routing.module';

import { InSesionPage } from './in-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InSesionPageRoutingModule
  ],
  declarations: [InSesionPage]
})
export class InSesionPageModule {}
