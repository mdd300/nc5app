import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import {SlidesPage} from "../slides/slides";
import {Step1Page} from "../cadastro/step1/step1";
import {SystemTabsPage} from "../system-tabs/system-tabs";
import {ForgotPass_1Page} from "../forgot-pass/forgot-pass-1/forgot-pass-1";
import {Http} from "@angular/http";
import * as $ from "jquery";
import {ConfirmCadPage} from "../cadastro/confirm-cad/confirm-cad";
import {Storage} from '@ionic/storage';
import {Platform} from 'ionic-angular';

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
    public login = {};
    public logindata = {
        user_login: "",
        user_pass: ""
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                public http: Http,
                public storage: Storage,
                public platform: Platform) { /* Init of constructor of class */

        platform.ready().then(() => {

            // console.log(user_logged);
            //
            // storage.set('user_logged', null);
            //
            // storage.get('user_logged').then((user_logged) => {
            //
            //     console.log(user_logged);
            //
            //     if (user_logged !== null) {
            //
            //         console.log(user_logged.user_id);
            //
            //         if (user_logged.user_id) {
            //             console.log(user_logged);
            //             this.navCtrl.setRoot(SystemTabsPage, {}, {animate: true, direction: 'forward'});
            //         }
            //     }
            //
            // });


        });

    }

    /** Fim do constructor da classe */

    /**
     * Função utilizada para redirecionar o usuário novamente à pagina de slides */
    public goBackSlides = (() => {
        this.navCtrl.push(SlidesPage);
    });
    /* Fim da função de redirecionamento para os slides */

    /**
     * Função utilizada para redirecionar o usuário à pagina de realizar o cadastro */
    public goToCadastro = (() => {
        this.navCtrl.push(Step1Page);
    });
    /* Fim da função de regdirecionamento para a página de cadastro */

    /**
     * Função utilizada para realizar o login do usuário */
    public doLogin = (() => {
        //this.navCtrl.setRoot(SystemTabsPage, {}, {animate: true, direction: 'forward'});

        var data_send = this.logindata;
        this.http.post(this.constants.api_path + 'login/dologin', $.param(data_send)).subscribe(response => {

            var res = (response as any);
            this.login = JSON.parse(res._body);
            var login = (this.login as any);

            if (login.success) {

                this.storage.set('user_logged', login.userdata).then(() => { // Setando os dados do usuário logado no storage
                    localStorage.setItem('user_logged', JSON.stringify(login.userdata)); // E no localStorage
                });

                this.storage.set('access', login.access); // Setando o hash e token de acesso

                if (login.no_verified) {
                    this.navCtrl.push(ConfirmCadPage);
                }
                else {
                    this.navCtrl.setRoot(SystemTabsPage, {}, {animate: true, direction: 'forward'});
                }

            } else {
                var __this = this;
                setTimeout(function () {
                    var text = (__this.login as any);
                    text.text = "";
                }, 3000);

            }

        });


    });
    /* Fim da função de realização do login do usuário */

    /**
     * Função para dar inicio ao processo de recuperar senha
     * @type {() => void}
     */
    public recoverPass = ((): void => {
        /**
         * Redireciona o usuário para a primeira págimna do processo */
        this.navCtrl.push(ForgotPass_1Page);

    });
    /* Fim da função recoverPass  */

}
