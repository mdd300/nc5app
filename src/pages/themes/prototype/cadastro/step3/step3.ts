import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";
import {Step2Page} from "../step2/step2";
import {ConfirmCadPage} from "../confirm-cad/confirm-cad";

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
        private alertCtrl: AlertController
    ) {}

    /** Definição das variáveis de escopo padrão */
    public constants = Constants;
    public passwordsValiable: boolean = false;
    public password: any;
    public confirmPassword: any;

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
        this.passwordsValiable = ( this.password == this.confirmPassword ? true : false );

    }); /* Fim da função utilizada para conferir se as senhas estão iguais */

    /**
     * Função utilizada para finalizar o cadastro do perfil */
    public cadFinish = (() => {
    
        /** Verifica se as senhas correspondem umas as outras */
        if( this.passwordsValiable ){
            /* Caso as senhas correspondam umas as outras */
            this.navCtrl.push( ConfirmCadPage );

        }else{
            /* Caso as senhas não correspondam umas as outras */

            let alert = this.alertCtrl.create({
                title: 'Senhas Incorretas',
                subTitle: 'Por favor, preencha as senhas de forma identica!',
                buttons: ['Ok']
            });
            alert.present();

        }/* Fim da verificação da correspondencia das senhas */

    });

}
