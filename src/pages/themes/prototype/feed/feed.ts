import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import {PostPage} from "../post/post";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public constants = Constants;

  constructor(
      public navCtrl: NavController,
      public modalCtrl: ModalController,
      public navParams: NavParams
  ) {}

  // Abrir modal para realizar psot
    public doPost = ( ()=>{
        let profileModal = this.modalCtrl.create(PostPage);
        profileModal.present();

    });


}
