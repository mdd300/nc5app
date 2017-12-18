import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";
import {Step2Page} from "../step2/step2";
import {ConfirmCadPage} from "../confirm-cad/confirm-cad";
import {Http, Headers, RequestOptions} from '@angular/http';
import * as $ from 'jquery';


/**
 * Generated class for the Step3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-step3',
    templateUrl: 'step3.html',
})
export class Step3Page {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        private http: Http
    ) {}

    /** Definição das variáveis de escopo padrão */
    public constants = Constants;
    public passwordsValiable: boolean = false;
    public camposValiable: boolean = false;
    public confirmPassword: any;
    public user_type:any = this.navParams.get("user_type");
    public empresa:any = this.navParams.get("empresa");
    public user:any = {name:"" , email:"", password:"" ,fone:"" ,type: this.user_type};

    /**
     * Função utilizada para voltar para o passo 2 do cadastro do perfil do usuário  */
    public backToStep2 = (() => {
        this.navCtrl.push(Step2Page);
    });
    /* Fim da função de retorno para o passo 2 do cadastro do perfil */

    /**
     * Função utilizada para conferir se as senhas estão iguais */
    public checkPass = (()=>{
        /** Verifica se as senhas correspondem umas as outras*/

        this.passwordsValiable = (this.user.password == this.confirmPassword ? true : false );

    }); /* Fim da função utilizada para conferir se as senhas estão iguais */

    /**
     * Função utilizada para finalizar o cadastro do perfil */


    public validateUser = (() => {

        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var validate = true;
        if(this.user.name == "" || this.user.email == "" ||  this.user.password == "" ||  this.user.fone == "" || this.confirmPassword == "") {
            let alert = this.alertCtrl.create({
                title: 'Campos Vazios',
                subTitle: 'Existem campos vazios a serem preechidos',
                buttons: ['Ok']
            });
           validate = false;
            alert.present();
            // this.camposValiable = false;
        }
        else if(!this.passwordsValiable ){
            let alert = this.alertCtrl.create({
                title: 'Senhas Incorretas',
                subTitle: 'Por favor, preencha as senhas de forma identica!',
                buttons: ['Ok']
            });
            alert.present();
           validate = false;
            /* Fim da verificação da correspondencia das senhas */

        }else if(!reg.test(this.user.email)){
            let alert = this.alertCtrl.create({
                title: 'Email Invalido',
                subTitle: 'Por favor, Insira um email invalido!',
                buttons: ['Ok']
            });
            alert.present();
          validate = false;
        }else if(this.user.password.length < 6) {
            let alert = this.alertCtrl.create({
                title: 'Senha',
                subTitle: 'Por favor, Preencher no minimo 6 caracteres!',
                buttons: ['Ok']
            });
            alert.present();
            validate = false;
        }
        return validate;


    });



    public cadFinish = (() => {

        /** Verifica se as senhas correspondem umas as outras */
         if(this.validateUser()){
             /* Caso as senhas correspondam umas as outras */
            this.setUser();
         }


    });


    public setUser = (() => {
        this.http.post(
            Constants.api_path+'cadastro/insertCadastro', $.param({'empresa': this.empresa ,'usuario': this.user }))
            .subscribe((data) => {
                    var resposta = JSON.parse(data._body);
                    if(!resposta.existe){
                        if(resposta.success){
                            this.navCtrl.push( ConfirmCadPage , {email:this.user.email});
                        }
                    }else{
                            let alert = this.alertCtrl.create({
                                title: 'Cadastro',
                                subTitle: resposta.msg,
                                buttons: ['Ok']
                            });
                        alert.present();
                    }
                }

            )
    });

}
