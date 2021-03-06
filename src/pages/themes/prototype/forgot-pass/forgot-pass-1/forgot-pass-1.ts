import {Component} from '@angular/core';
import {Http} from "@angular/http";
import {Constants} from "../../../../../config/Constants";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {ForgotPass_2Page} from "../forgot-pass-2/forgot-pass-2";
import {Storage} from '@ionic/storage';
import * as $ from "jquery";
import {LoadingController} from 'ionic-angular';

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

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private alertCtrl: AlertController,
                public storage: Storage,
                public http: Http,
                public loadingCtrl: LoadingController) {
    }

    public constants = Constants;
    public valid_email: boolean;
    public email_to_recover: string;
    public response: any;

    /**
     * Função utilizada para "voltar" uma pagina do aplicativo */
    public backPage = (() => {
        /* Remove uma página do controller de navegação */
        this.navCtrl.pop();
    });
    /* Fim da função de backPage */


    /**
     * Verifica se o email é valido para prosseguir */
    public validateEmail = ((email: string): void => {
        let regex = new RegExp(/([a-zA-Z0-9\._\-]{2})+@+([a-zA-Z0-9]{2,20})+\.+[a-z]{2}/);
        this.valid_email = regex.test(email);
    });


    /**
     * Função utilizada para prosseguir com o processo de recuperação de senha */
    public sendEmail = (() => {

        /* Verifica se o Email digitado é valido */
        if (this.valid_email) {
            /* Caso valido, prossegue com o processo */

            var data_send = {user_login: this.email_to_recover};

            //configura modal de load para reeinviar codigo
            let loader = this.loadingCtrl.create({content: "Autenticando o e-mail..."});
            //ativa o modal
            loader.present();

            this.http.post(this.constants.api_path + 'login/start_recover', $.param(data_send)).subscribe(response => {
                //destroe o modal
                loader.dismissAll();
                var res = (response as any);
                this.response = JSON.parse(res._body);

                if (this.response.success) {
                    this.navCtrl.push(ForgotPass_2Page, {user_login: this.email_to_recover})
                }else{
                    let alert = this.alertCtrl.create({
                        title: 'QRGO',
                        subTitle: 'E-mail não cadastrado.',
                        buttons: ['Ok']
                    });
                    alert.present();    
                }
            }, erro=>{
                loader.dismissAll();
                let alert = this.alertCtrl.create({
                    title: 'QRGO',
                    subTitle: 'Erro interno,<br> tente novamente mais tarde.',
                    buttons: ['Ok']
                });
                alert.present();  
            });

            // console.log(this.storage.get('user_logged'));
            // this.navCtrl.push( ForgotPass_2Page )
        } else {
            /* Caso o email digitado não seja válido */
            /* Exibe o alerta dizendo que o email é necessário */
            let alert = this.alertCtrl.create({
                title: 'Email necessário',
                subTitle: 'Por favor, insira um email válido para prosseguir com o processo de recuperação de senha.',
                buttons: ['Ok']
            });
            alert.present();
            /* Fim do alerta de email necessário */
        }
        /* Fim da verificação de validade de Email */

    });
    /* Fim da função do processo de prosseguir com a recuperação da senha */

}
