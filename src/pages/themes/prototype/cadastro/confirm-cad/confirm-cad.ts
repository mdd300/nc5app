import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ConfirmCadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-confirm-cad',
    templateUrl: 'confirm-cad.html',
})
export class ConfirmCadPage {

    public seisdigitos:boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private alertCtrl: AlertController
    ) {}

    /**
     * Função utilizada para pular a confirmação do cadastro
     */
    public skipCad = (() => {
        /* Pula a confirmação do cadastro */
        let alert = this.alertCtrl.create({
            title: 'Parabéns',
            subTitle: 'Parabéns, você realizou o cadastro em nosso sistema. Você será logado automáticamente.',
            buttons: ['Ok']
        });
        alert.present();
    });
    //função verifica o codiga com a existencia de 6 digitos 
    public autenticaCod = (( code:any) => {

        //se o usuario digitar 6 digitos
        if(code.length == 6 ){

            //desabilita o input 
            this.seisdigitos=true;

            //realiza o ajax 
            
            let alert =this.alertCtrl.create({
                title: 'Autenticação',
                subTitle: 'Usúario autenticado com sucesso!',
                buttons: ['Ok']
            });
            alert.present();
        }
    });

}
