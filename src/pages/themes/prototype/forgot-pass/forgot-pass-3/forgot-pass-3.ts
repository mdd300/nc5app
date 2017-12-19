import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../../login/login";
import {Constants} from "../../../../../config/Constants";
import * as $ from "jquery";
import {Http} from "@angular/http";

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

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private alertCtrl: AlertController,
                public http: Http) {
    }

    public constants = Constants;

    public user_pass: any;
    public confirm_pass: any;
    public response: any;

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
    public finishNewPass = (() => {

        if (this.user_pass == this.confirm_pass) {

            var access = this.navParams.get('access');
            var access_id = access.access_id;
            var access_secret = access.access_secret;
            var data_send = {access_id: access_id, access_secret: access_secret, user_pass: this.user_pass};

            this.http.post(this.constants.api_path + 'login/update_pass', $.param(data_send)).subscribe(response => {

                var res = (response as any);
                this.response = JSON.parse(res._body);

                if (this.response.success) {
                    /* Caso valido, prossegue com o processo */

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

                }
                else {

                    let alert = this.alertCtrl.create({
                        title: 'Código incorreto',
                        subTitle: this.response.text,
                        buttons: ['Ok']
                    });

                    alert.present();

                }

            });

        }
        else {
            let alert = this.alertCtrl.create({
                title: 'Senhas diferentes',
                subTitle: 'Por favor, confira se as senhas foram digitadas iguais',
                enableBackdropDismiss: false,
                buttons: ['Ok']
            });
            alert.present();
        }

    });

}
