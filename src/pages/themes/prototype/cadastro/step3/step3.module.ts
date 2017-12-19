import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step3Page } from './step3';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    Step3Page,
  ],
  imports: [
    IonicPageModule.forChild(Step3Page),
      BrMaskerModule,
  ],
})
export class Step3PageModule {}
