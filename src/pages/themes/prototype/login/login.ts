import {Component} from '@angular/core';
import {Http} from "@angular/http";
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import {SlidesPage} from "../slides/slides";
import {Step1Page} from "../cadastro/step1/step1";
import {SystemTabsPage} from "../system-tabs/system-tabs";
import * as $ from "jquery";

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

    public teste = "";

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                public http: Http,) { /* Init of constructor of class */
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

        var data_send = this.logindata;

        this.http.post(this.constants.api_path + 'login/dologin', $.param(data_send)).subscribe(response => {

            console.log(response);

            this.login = JSON.parse(response._body);

            if (this.login.success) {
                /* Redireciona a pagina root como a pagina de exploração */
                this.navCtrl.setRoot(SystemTabsPage, {}, {animate: true, direction: 'forward'});
            }
            else {

                var __this = this;

                setTimeout(function () {
                    __this.login.text = "";
                }, 2000);
            }

        });


    });
    /* Fim da função de realização do login do usuário */


}
