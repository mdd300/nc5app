import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
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

    public constants = Constants;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,) {}


    public destaques = [
        {
            company_name: 'Unique',
            company_type: 'Confecção',
            company_logo: ''
        },
        {
            company_name: 'Unieke',
            company_type: 'Confecção',
            company_logo: ''
        },
        {
            company_name: 'Gucci',
            company_type: 'Confecção',
            company_logo: ''
        }
    ];

}
