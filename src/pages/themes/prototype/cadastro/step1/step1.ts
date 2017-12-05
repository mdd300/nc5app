import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";
import {LoginPage} from "../../login/login";
import {Step2Page} from "../step2/step2";

/**
 * Generated class for the Step1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-step1',
    templateUrl: 'step1.html',
})
export class Step1Page {

    public constants = Constants;
    public actived: number = 0;


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController
    ) {}

    /**
     * Função utilizada para a "volta" da pagina para a pagina de login
     * @type {() => any} */
    public backToLogin = (() => {
        /* Redireciona para a pagina de login */
        this.navCtrl.push(LoginPage);
    });

    /**
     * Função utilizada para redirecionar para o segundo passo do cadastro */
    public goToStep2 = (() => {
        /* Verifica se o redirect está habilitado. Só estará se algum perfil foi selecionado, ou seja: se actived for diferente de 0 */
        if (this.actived != 0) {
            /* Se o redirect estiver hasbilitado */
            this.navCtrl.push(Step2Page);
        }else{
            /* Caso o redirect não esteja habilitado, exibe o alerta */
            let alert = this.alertCtrl.create({
                title: 'Selecione o perfil',
                subTitle: 'Por favor, selecione o seu perfil como usuário.',
                buttons: ['Ok']
            });
            alert.present();

        }
    });/* Fim da função utiliazada para avançãr os passos do cadastro */

    /**
     * Função utilizada para definir o tipo do perfil selecionado
     * @type {(data: number) => any} - ID do perfil selecionado */
    public defineActived = ((data: number) => {
        /* Define o ID do perfil selecionado */
        this.actived = data;
    });/* Fim da função de definição do perfil selecionado */


}
