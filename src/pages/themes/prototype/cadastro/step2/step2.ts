import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, Keyboard} from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";
import {Step1Page} from "../step1/step1";
import {Step3Page} from "../step3/step3";
import {Http, Headers, RequestOptions} from '@angular/http';

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
    public emp:any = {empresa_razao:"" , empresa_nomefantasia:"", empresa_bairro:"" , empresa_endereco:"" , empresa_numero:"", empresa_cidade:"", empresa_estado:"" ,empresa_cnpj:""};
    public captcha:any = {digito:"", key:"", cnpj:""};
    public stepOk:boolean = false;
    public stepOkCnpj:boolean = false;
    public imgCaptcha:string = "";
    public user_type = this.navParams.get("user_type");

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        private keyboard: Keyboard,
        private http: Http

    ) {}


    /**
     * Função utilizada para retornar ao passo 1 do cadastro
     * @type {() => any} */
    public backToStep1 = (() => {
        this.navCtrl.push(Step1Page);
    }); /** Fim da função de retorno ao passo 1 do cadastro */

    /**
     * Função utilizada para verifica o CNPJ digitado
     * @type {(cnpj: number) => any} - valor do numero do cnpj
     */
    public keyupCnpj = (()=>{
        /* Verifica se o CNPJ é real */
        // console.log(this.cnpj.length);

        if( this.captcha.cnpj.length == 14  ){
            this.getCaptcha();
            this.keyboard.close();
        }else{
            this.stepOk = false;
        }
    });/* Fim da função */


    public getCaptcha = (() => {
console.log(this.user_type);
        this.http.post(
            'http://localhost/fashon/qrgo/cadastro/getCaptcha', {'cnpj': this.captcha.cnpj})
            .subscribe((data) => {
                    var resposta = JSON.parse(data._body);
                    if(!resposta.existe){
                        this.imgCaptcha = resposta.dados.captchaBase64;
                        this.captcha.key = resposta.dados.cookie;
                        this.stepOk = true;

                    }
                }

            )
    });


    public getCnpj = (() => {

        this.http.post(
            'http://localhost/fashon/qrgo/cadastro/getCnpj',(this.captcha))
            .subscribe((data) => {
                    var resposta = JSON.parse(data._body);
                    if(resposta.success){
                        this.emp = resposta.dados;
                        this.stepOkCnpj = true;
                        this.stepOk = false;


                    }
                }

            )
    });



    /**
     * Função utilizada para avançar para o Setep 3 Do cadastro do perfil
     * @type {() => any}*/
    public goToStep3 = (() => {
        /* Verifica se o Passo está preenchido corretamente, ou seja, se o CNPJ foi escrito */
        if( this.stepOkCnpj  ){
            /* Caso os campos estejam preenchidos corretamente, o passo poderá ser avançado */
            this.navCtrl.push(Step3Page , {empresa:this.emp , user_type:this.user_type});

        }else{
            /* Caso os campos não estejam preenchidos corretamente, o passo não poderá ser avançado */
            let alert = this.alertCtrl.create({
                title: 'Preencha o CNPJ',
                subTitle: 'Por favor, preencha o seu CNPJ e verifique se os dados correspondem corretamente.',
                buttons: ['Ok']
            });
            alert.present();
        }
    });/* Fim da função de avanço dos passos de cadastro do perfil */

}


