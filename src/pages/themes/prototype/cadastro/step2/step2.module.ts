import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step2Page } from './step2';
import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    Step2Page,
  ],
  imports: [
    IonicPageModule.forChild(Step2Page),
      BrMaskerModule,

  ],
})
export class Step2PageModule {}
