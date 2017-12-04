import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from "../../../../config/Constants";
import {SlidesPage} from "../slides/slides";
import {Step1Page} from "../cadastro/step1/step1";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public constants = Constants;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams) {}

      public goBackSlides = (() => {

        this.navCtrl.push( SlidesPage );

      });


  public goToCadastro = (() => {
      this.navCtrl.push( Step1Page );
  });

}
