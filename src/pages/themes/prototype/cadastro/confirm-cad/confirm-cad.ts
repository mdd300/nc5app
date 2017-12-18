import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Http } from '@angular/http';
import * as $ from 'jquery';

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

    private Url_http = 'http://localhost/fashon/qrgo/cadastro/autenticacao';

    public seisdigitos:boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: Http,
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
            //this.seisdigitos=true;

            //realiza o ajax enviando como parametro o código de entrada "data"
            this.http.post(this.Url_http,$.param({codigo:code})).subscribe(data => {
                const response = (data as any);
                const objeto_retorno = JSON.parse(response._body);
                
                //console.log(response._body);
                //retorna o código
                if(objeto_retorno === true){

                    //modal de confirmação para o usuario
                    let alert = this.alertCtrl.create({
                        title: 'Parabéns',
                        subTitle: 'Parabéns, você realizou o cadastro em nosso sistema. Você será logado automáticamente.',
                        buttons: ['Ok']
                    });
                    alert.present();
                }else{

                    //modal de código invalido
                    let alert =this.alertCtrl.create({
                        title: 'Autenticação',
                        subTitle: 'Código incorreto',
                        buttons: ['Ok']
                    });
                    alert.present();
                }

            }, error => {

                //modal de erro na autenticação
                let alert =this.alertCtrl.create({
                    title: 'Autenticação',
                    subTitle: 'Erro na autenticação',
                    buttons: ['Ok']
                });
                alert.present();
                console.log(error);
            });

            
        }
    });

}
