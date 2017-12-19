import { Component } from '@angular/core';
import {IonicPage, Keyboard, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";

/**
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

    public constants = Constants;
    public text = false;
    public end = [
        {
        nome:'Uniquechic',
        endereco: 'Rua Anhaia'
        },
        {
            nome: 'teste',
            endereco: 'rua teste'
        }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard,public viewCtrl: ViewController) {
  }
    public closeMeModal = (() => {
console.log('teste');
                this.viewCtrl.dismiss();

    });
}
