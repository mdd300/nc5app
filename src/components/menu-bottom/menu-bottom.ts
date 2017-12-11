import {Component, Input, ViewChild } from '@angular/core';
import { Constants } from "../../config/Constants";
import { FeedPage } from "../../pages/themes/prototype/feed/feed";
import { NavController, Content } from "ionic-angular";
import { ExplorePage } from "../../pages/themes/prototype/explore/explore";
/**
 * Generated class for the MenuBottomComponent component.
 *
 * Componente utilizado para manter o template do menu bottom padronizado
 * Criação do menu fixo inferior
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'fixed-menu',
  templateUrl: 'menu-bottom.html'
})
export class MenuBottomComponent {

  @Input() page: string;
  @ViewChild(Content) content: Content;

  public constants = Constants;

  constructor(
        public navCtrl: NavController
  ){}

  public goToExplore = (()=>{
      if( this.page !== 'explore' ){
        this.navCtrl.push( ExplorePage );
      }else{
          this.content.scrollToTop();
      }
  });

  public goToFeed = (()=>{
      if( this.page !== 'feed' ) {
          this.navCtrl.push(FeedPage);
      }else{
          this.content.scrollToTop();
      }
  });



}
