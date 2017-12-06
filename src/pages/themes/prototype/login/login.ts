import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import {SlidesPage} from "../slides/slides";
import {Step1Page} from "../cadastro/step1/step1";
import {ExplorePage} from "../explore/explore";

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

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController
    ){ /* Init of constructor of class */ }/** Fim do constructor da classe */

    /**
     * Função utilizada para redirecionar o usuário novamente à pagina de slides */
    public goBackSlides = (() => {
        this.navCtrl.push(SlidesPage);
    }); /* Fim da função de redirecionamento para os slides */

    /**
    * Função utilizada para redirecionar o usuário à pagina de realizar o cadastro */
    public goToCadastro = (() => {
        this.navCtrl.push(Step1Page);
    });/* Fim da função de regdirecionamento para a página de cadastro */

    /**
     * Função utilizada para realizar o login do usuário */
    public doLogin = ( ()=>{
        /* Redireciona a pagina root como a pagina de exploração */
        this.navCtrl.setRoot( ExplorePage, {}, {animate: true, direction: 'forward'} );
    });/* Fim da função de realização do login do usuário */


}
