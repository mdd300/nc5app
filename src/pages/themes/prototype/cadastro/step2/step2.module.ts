import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step2Page } from './step2';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    Step2Page,
  ],
  imports: [
    IonicPageModule.forChild(Step2Page),
      HttpModule
  ],
})
export class Step2PageModule {}
