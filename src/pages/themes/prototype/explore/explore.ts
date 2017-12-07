import {Component } from '@angular/core';
import {ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {GostosPage} from "../gostos/gostos";
import {Constants} from "../../../../config/Constants";

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

    public constants = Constants;
    public recommendations = [
        {mark: 'Unique', wallpaper: 'unique.jpg'},
        {mark: 'Unike', wallpaper: 'unique2.jpg' }
    ];

    public marcas = [
        {
            marca: 'Unique',
            produtos: [{null: null},{ null: null}]
        },
        {
            marca: 'Unieke',
            produtos: [{null: null},{ null: null}, {null: null}, {null: null}]
        }
    ];
    
    
    public doScroll = (( event:any )=>{
        console.log( event.path[0] );
    })

  /* Função iniciada quando a view for iniciada */
  ionViewDidLoad() {
    /* Quando a view foi iniciada, e ja está pronta */
      let profileModal = this.modalCtrl.create(GostosPage);
      profileModal.present();
  }/* Fim da função iniciada quando a view estiver pronta */

}
