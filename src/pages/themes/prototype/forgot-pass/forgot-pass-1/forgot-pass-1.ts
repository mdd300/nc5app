import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ForgotPass_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-forgot-pass-1',
    templateUrl: 'forgot-pass-1.html',
})
export class ForgotPass_1Page {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    /**
     * Função utilizada para "voltar" uma pagina do aplicativo */
    public backPage = (() => {
        /* Remove uma página do controller de navegação */
        this.navCtrl.pop();
    }); /* Fim da função de backPage */

}
