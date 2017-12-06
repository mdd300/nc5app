import { Component } from '@angular/core';
import {ModalController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {GostosPage} from "../gostos/gostos";

/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public modalCtrl: ModalController
  ) {}


  /* Função iniciada quando a view for iniciada */
  ionViewDidLoad() {
    /* Quando a view foi iniciada, e ja está pronta */
      let profileModal = this.modalCtrl.create(GostosPage);
      profileModal.present();
  }/* Fim da função iniciada quando a view estiver pronta */

}
