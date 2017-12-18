import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../../login/login";

/**
 * Generated class for the ForgotPass_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-forgot-pass-3',
    templateUrl: 'forgot-pass-3.html',
})
export class ForgotPass_3Page {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController
    ) {}

    /**
     * Função utilizada para "voltar" uma pagina do aplicativo */
    public backPage = (() => {
        /* Remove uma página do controller de navegação */
        this.navCtrl.pop();
    });
    /* Fim da função de backPage */

    /**
     * Função utilizada para finalizar o processo de recuperação de senha.
     */
    public finishNewPass = ( () => {

        let alert = this.alertCtrl.create({
            title: 'Senhas Alteradas!',
            subTitle: 'Suas senhas foram alteradas com sucesso! você será redirecionado para a página de login.',
            enableBackdropDismiss: false,
            buttons: [{
                text: 'Ok',
                handler: () => {
                    this.navCtrl.setRoot(LoginPage);
                } /* Hander of "OK" button */
            }]
        });
        alert.present();

    } );

}
