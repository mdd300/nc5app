import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GostosPage } from './gostos';

@NgModule({
  declarations: [
    GostosPage,
  ],
  imports: [
    IonicPageModule.forChild(GostosPage),
  ],
})
export class GostosPageModule {}
