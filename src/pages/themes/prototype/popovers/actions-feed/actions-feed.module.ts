import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionsFeedPage } from './actions-feed';

@NgModule({
  declarations: [
    ActionsFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionsFeedPage),
  ],
})
export class ActionsFeedPageModule {}
