import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from "../../../../../config/Constants";
import {LoginPage} from "../../login/login";

/**
 * Generated class for the Step1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step1',
  templateUrl: 'step1.html',
})
export class Step1Page {

  public constants = Constants;
  public actived:number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public backToLogin = (() => {
    this.navCtrl.push( LoginPage );
  });

  public defineActived = (( data:number )=>{
    this.actived = data;
  });



}
