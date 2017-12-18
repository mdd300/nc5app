import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ForgotPass_2Page} from "../forgot-pass-2/forgot-pass-2";
import {Storage} from '@ionic/storage';

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

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        public storage: Storage
    ) {}

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


    /**
     * Função utilizada para prosseguir com o processo de recuperação de senha */
    public sendEmail = (()=>{

        /* Verifica se o Email digitado é valido */
        if( this.valid_email ){
            /* Caso valido, prossegue com o processo */

            console.log(this.storage.get('user_logged'));

            // this.navCtrl.push( ForgotPass_2Page )
        }else{
            /* Caso o email digitado não seja válido */
            /* Exibe o alerta dizendo que o email é necessário */
            let alert = this.alertCtrl.create({
                title: 'Email necessário',
                subTitle: 'Por favor, insira um email válido para prosseguir com o processo de recuperação de senha.',
                buttons: ['Ok']
            });
            alert.present();
            /* Fim do alerta de email necessário */
        }/* Fim da verificação de validade de Email */

    });/* Fim da função do processo de prosseguir com a recuperação da senha */

}
