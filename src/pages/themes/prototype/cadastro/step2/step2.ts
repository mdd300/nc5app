import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, Keyboard} from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";
import {Step1Page} from "../step1/step1";
import {Step3Page} from "../step3/step3";
import {Http, Headers, RequestOptions} from '@angular/http';
import * as $ from 'jquery';
import {LoadingController} from 'ionic-angular';

/**
 * Generated class for the Step2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-step2',
    templateUrl: 'step2.html',
})
export class Step2Page {

    public constants = Constants;
    public emp: any = {
        empresa_razao: "",
        empresa_nomefantasia: "",
        empresa_bairro: "",
        empresa_endereco: "",
        empresa_numero: "",
        empresa_cidade: "",
        empresa_estado: "",
        empresa_cnpj: "",
        empresa_existe: false
    };
    public captcha: any = {digito: "", key: "", cnpj: "", vazio: ""};
    public stepOk: boolean = false;
    public stepOkCnpj: boolean = false;
    public stepBuscar: boolean = true;
    public imgCaptcha: string = "";
    public user_type = this.navParams.get("user_type");


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        private keyboard: Keyboard,
        private http: Http,
        public loadingCtrl: LoadingController

    ) {}


    presentLoading(data) {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: data == null ? 1000 : 0
        });
        loader.present();

    }


    /**

     /**
     /**
     * Função utilizada para retornar ao passo 1 do cadastro
     * @type {() => any} */
    public backToStep1 = (() => {
        this.navCtrl.push(Step1Page);
    });
    /** Fim da função de retorno ao passo 1 do cadastro */

    /**
     * Função utilizada para verifica o CNPJ digitado
     * @type {(cnpj: number) => any} - valor do numero do cnpj
     */


    public statusBusca = (() => {

        this.stepOk = false;
        this.stepOkCnpj = false;
    });

    public searchCnpj = (() => {
        /* Verifica se o CNPJ é real */

        this.captcha.cnpj = $(".cnpj").val();

        if (this.validateCnpj()) {
            this.captcha.cnpj = this.clearDataMask(this.captcha.cnpj, 'cnpj');
            this.getCaptcha();
        }

    });
    /* Fim da função */

    public getCaptcha = (() => {
        this.captcha.digito = "";
        var resposta = null;
        this.http.post(
            Constants.api_path + 'cadastro/getCaptcha', {'cnpj': this.captcha.cnpj})
            .subscribe((data) => {
                    var resposta = (data as any);
                    resposta = JSON.parse(resposta._body);
                    if (!resposta.existe) {

                        this.imgCaptcha = resposta.dados.captchaBase64;
                        this.captcha.key = resposta.dados.cookie;
                        this.stepOk = true;
                        this.stepOkCnpj = false;
                        this.emp.empresa_existe = false;

                    } else {
                        this.emp = resposta.dados[0];
                        this.stepOkCnpj = true;
                        this.stepOk = false;
                        this.emp.empresa_existe = true;

                    }
                }
            )
    });

    public validateCnpj = (() => {
        var reg = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
        var validate = true;

        if (!(this.captcha.cnpj.length > 0)) {
            let alert = this.alertCtrl.create({
                title: 'Preencha o CNPJ',
                subTitle: 'Por favor, preencha o seu CNPJ e verifique se os dados correspondem corretamente.',
                buttons: ['Ok']
            });
            alert.present();
            validate = false;

        } else if (!reg.test(this.captcha.cnpj)) {
            let alert = this.alertCtrl.create({
                title: 'Preencha o CNPJ',
                subTitle: 'Por favor, preencha o seu CNPJ no formato correto.',
                buttons: ['Ok']
            });
            alert.present();
            validate = false;
        }

        return validate;
    });


    public getCnpj = (() => {
        var resposta = null;
        this.http.post(
            Constants.api_path + 'cadastro/getCnpj', (this.captcha))
            .subscribe((data) => {

                this.presentLoading(resposta);

                resposta = (data as any);
                    resposta = JSON.parse(resposta._body);
                    if (resposta.success) {

                        this.emp = resposta.dados;
                        this.stepOkCnpj = true;
                        this.stepOk = false;

                    } else {
                        this.captcha.digito = "";
                        let alert = this.alertCtrl.create({
                            title: resposta.title,
                            subTitle: resposta.msg,
                            buttons: ['Ok']
                        });
                        alert.present();
                        this.getCaptcha();

                    }
                }
            )
    });
    public clearDataMask = ((data, type) => {
        var retorno = ''
        switch (type) {
            case 'cnpj':
                data = data.replace(".", "");
                data = data.replace(".", "");
                data = data.replace("/", "");
                data = data.replace("-", "");
                retorno = data;

                break;
        }

        return retorno;


    });

    /**
     * Função utilizada para avançar para o Setep 3 Do cadastro do perfil
     * @type {() => any}*/
    public goToStep3 = (() => {
        /* Verifica se o Passo está preenchido corretamente, ou seja, se o CNPJ foi escrito */
        if (this.stepOkCnpj) {
            /* Caso os campos estejam preenchidos corretamente, o passo poderá ser avançado */
            this.navCtrl.push(Step3Page, {empresa: this.emp, user_type: this.user_type});

        } else {
            /* Caso os campos não estejam preenchidos corretamente, o passo não poderá ser avançado */
            let alert = this.alertCtrl.create({
                title: 'Preencha o CNPJ',
                subTitle: 'Por favor, preencha o seu CNPJ e verifique se os dados correspondem corretamente.',
                buttons: ['Ok']
            });
            alert.present();
        }
    });
    /* Fim da função de avanço dos passos de cadastro do perfil */

}


