import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import {SlidesPage} from "../slides/slides";
import {Step1Page} from "../cadastro/step1/step1";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    public constants = Constants;

    private close:boolean = false;


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public platform: Platform,
        public toastCtrl: ToastController
    ){ /* Init of constructor of class */
        
        /* Quando a plataforma estiver preparada */
        platform.ready().then(() => {
            /* Regista um evento no botão de voltar do celular */
            platform.registerBackButtonAction(() => {
                /* Quando o usuário pressionar o botão de voltar no celular */

                if( !this.close ){

                    let toast = this.toastCtrl.create({
                        message: 'Pressione "Voltar" novamente para fechar o aplicativo.',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();

                    this.close = true;
                    let timeout = setTimeout(() => {
                        this.close = false;
                    }, 3000);

                }else{

                    this.platform.exitApp();

                }

            }); /* Fim do registro do evento de quando o usuário pressionar o botão voltar do celular */

        });/* Fim de quando a plataforma estiver preparada e pronta */


    }/** Fim do constructor da classe */

    public goBackSlides = (() => {

        this.navCtrl.push(SlidesPage);

    });

    public goToCadastro = (() => {
        this.navCtrl.push(Step1Page);
    });



}
