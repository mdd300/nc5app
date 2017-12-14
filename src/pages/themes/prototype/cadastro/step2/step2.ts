import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, Keyboard} from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";
import {Step1Page} from "../step1/step1";
import {Step3Page} from "../step3/step3";
import {Http} from '@angular/http';

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
    public cnpj:any = "";
    public emp:any = {razao:"" , nome:"", bairro:"" , endereco:"" , numero:"", cidade:"", estado:""};
    public stepOk:boolean = false;


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
    public keyupCnpj = (( cnpj:number )=>{
        /* Verifica se o CNPJ é real */
        this.stepOk = ( ( cnpj == 123 ) ? true : false );
        this.getPeople();
        console.log(cnpj);
        if( this.stepOk ){
            this.keyboard.close();
        }
    });/* Fim da função */

    getPeople() {
        this.http.post('http://localhost/fashon/qrgo/Cadastro/getCaptcha', JSON.stringify({solicitacao: true})).subscribe(
            res => {

            }
        );
    }



    /**
     * Função utilizada para avançar para o Setep 3 Do cadastro do perfil
     * @type {() => any}*/
    public goToStep3 = (() => {
        /* Verifica se o Passo está preenchido corretamente, ou seja, se o CNPJ foi escrito */
        if( this.stepOk ){
            /* Caso os campos estejam preenchidos corretamente, o passo poderá ser avançado */
            this.navCtrl.push(Step3Page);

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


