import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FeedPage } from "../feed/feed";
import { ExplorePage } from "../explore/explore";
import * as $ from 'jquery';
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

    /**
   * Função utilizada para realizar o Scroll até o topo da pagina, quando clicar na "tab" que já está ativa
   * @type {(event) => any} - Infos of pointer click event */
  public scrollTopContent = (( event )=>{
    if( $(event.target).closest('.tab-button[aria-selected="true"]').length > 0){
      $('.scroll-content').stop().animate({'scrollTop': 0}, 300)
    }
  });/* Fim da função utilizada para o scroll até o topo da pagina */

  openMenu() {
      this.menuCtrl.open();
  }
}
