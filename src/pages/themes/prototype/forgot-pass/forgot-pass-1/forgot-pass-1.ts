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

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    public valid_email:boolean;
    /**
     * Função utilizada para "voltar" uma pagina do aplicativo */
    public backPage = (() => {
        /* Remove uma página do controller de navegação */
        this.navCtrl.pop();
    }); /* Fim da função de backPage */


    /**
     * Verifica se o email é valido para prosseguir */
    public validateEmail = (( email:string ) :void => {
        let regex = new RegExp(/([a-zA-Z0-9\._\-]{2})+@+([a-zA-Z0-9]{2,20})+\.+[a-z]{2}/);
        this.valid_email = regex.test( email );
    });

}
