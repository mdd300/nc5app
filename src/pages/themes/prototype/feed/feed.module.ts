import { NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { SharedModule } from "../../../../config/share.module";

@NgModule({
  declarations: [
    FeedPage
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
    SharedModule
  ]
})
export class FeedPageModule {}
