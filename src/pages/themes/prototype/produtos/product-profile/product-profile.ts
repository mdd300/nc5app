import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";

/**
 * Generated class for the ProductProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-profile',
  templateUrl: 'product-profile.html',
})
export class ProductProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public constants = Constants;

}
