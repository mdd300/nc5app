import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {ForgotPass_3Page} from "../forgot-pass-3/forgot-pass-3";
import {Constants} from "../../../../../config/Constants";
import {Http} from "@angular/http";
import * as $ from "jquery";

/**
 * Generated class for the ForgotPass_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-forgot-pass-2',
    templateUrl: 'forgot-pass-2.html',
})
export class ForgotPass_2Page {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private alertCtrl: AlertController,
                public http: Http) {
    }

    public constants = Constants;
    public validCode: boolean = true;
    public response: any;
    public code: any;

    /**
     * Função utilizada para "voltar" uma pagina do aplicativo */
    public backPage = (() => {
        /* Remove uma página do controller de navegação */
        this.navCtrl.pop();
    });
    /* Fim da função de backPage */

    /**
     * Função utilizada para confirmar o código de verificação do email */
    public confirmCode = (() => {

        /* Verifica se o código digitado é valido */
        if (this.validCode) {

            var user_login = this.navParams.get('user_login');
            var data_send = {code: this.code, user_login: user_login};

            this.http.post(this.constants.api_path + 'login/do_recover', $.param(data_send)).subscribe(response => {

                var res = (response as any);
                this.response = JSON.parse(res._body);

                if (this.response.success) {
                    /* Caso valido, prossegue com o processo */
                    this.navCtrl.push(ForgotPass_3Page, {access: this.response.access});
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

        } else {
            /* Caso o código digitado não seja válido */
            /* Exibe o alerta dizendo que o código é necessário */
            let alert = this.alertCtrl.create({
                title: 'Código Inválido',
                subTitle: 'Por favor, insira um código válido para prosseguir com o processo de recuperação de senha.',
                buttons: ['Ok']
            });
            alert.present();
            /* Fim do alerta de codigo necessário */
        }
        /* Fim da verificação de validade de código */

    });
    /* Fim da função de confirmação do código enviado no email */

}
