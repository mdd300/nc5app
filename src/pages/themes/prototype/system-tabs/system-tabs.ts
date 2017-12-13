import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {FeedPage} from "../feed/feed";
import {ExplorePage} from "../explore/explore";

/**
 * Generated class for the SystemTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-system-tabs',
  templateUrl: 'system-tabs.html',
})
export class SystemTabsPage {
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public menuCtrl: MenuController

  ) {}

  public pageHome:any     = FeedPage;
  public pageExplore:any  = ExplorePage;
  public pageBag:any      = null;
  public pageNotification:any = null;


  openMenu() {
      this.menuCtrl.open();
  }

}
