import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SystemTabsPage } from './system-tabs';

@NgModule({
  declarations: [
    SystemTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SystemTabsPage),
  ],
})
export class SystemTabsPageModule {}
