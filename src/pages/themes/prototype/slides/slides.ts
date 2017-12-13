import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
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


    public constants: any = Constants;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams) {
    }

    /**
     * Função utilizada para enviar o usuário para a pagina de login */
    public startLogin = (() => {
        /* Envia o usuário à pagina de login */

        let storage:object = { 'first_access': false };
        localStorage.setItem("qrgo_application", JSON.stringify( storage ) );

        this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
    });

}
