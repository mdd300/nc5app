import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from "../../../../config/Constants";
import { LoginPage } from "../login/login";

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {


  public constants:any = Constants;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
  ){}
  
  public goToLoginPage = (() => {
    this.navCtrl.push( LoginPage );
  });
  

}
