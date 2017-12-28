import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import * as $ from 'jquery';
import {Constants} from "../../../../../config/Constants";
import {SystemTabsPage} from "../../system-tabs/system-tabs";
import {Storage} from '@ionic/storage';
import {LoadingController} from 'ionic-angular';

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

    public seisdigitos: boolean = false;
    public constants = Constants;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: Http,
                private alertCtrl: AlertController,
                public storage: Storage,
                public loadingCtrl: LoadingController) {
    }

    public newCod = (() => {
        /* Reenvia novo código de atutenticação */
        this.storage.get('access').then((access) => {

            this.http.post(this.constants.api_path + 'cadastro/gerar_code',$.param({
                token_id: access.token_id,
                token_hash: access.token_hash,
                updat:true
            })).subscribe(data => {
                const response = (data as any);
                const objeto_retorno = JSON.parse(response._body);
                //console.log(objeto_retorno);
                let alert = this.alertCtrl.create({
                    title: 'QRGO',
                    subTitle: objeto_retorno.email_enviado,
                    buttons: ['Ok']
                });
                alert.present();
            }, error => {
                //modal de erro na autenticação
                    return false;
                });

        });

    });

    public skipCad = (() => {
        /* Pula a confirmação do cadastro */
        let alert = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: 'Autenticação pendente. Valide seu email para ter acesso a todo nosso app.',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        // this.navCtrl.setRoot(ExplorePage);

                        this.navCtrl.setRoot(SystemTabsPage, {}, {animate: true, direction: 'forward'});


                    }
                }]
        });
        alert.present();
    });
    //função verifica o codiga com a existencia de 6 digitos 
    public autenticaCod = ((code: any) => {

        //desabilita o input
        //this.seisdigitos=true;

        this.storage.get('access').then((access) => {

             //configura modal de load para reeinviar codigo
             let loader = this.loadingCtrl.create({content: "Autenticando o e-mail..."});
             //ativa o modal
             loader.present();

//realiza o ajax enviando como parametro o código de entrada "data"
            this.http.post(this.constants.api_path + 'cadastro/autenticacao', $.param({
                codigo: code,
                token_id: access.token_id,
                token_hash: access.token_hash
            })).subscribe(data => {
                const response = (data as any);
                const objeto_retorno = JSON.parse(response._body);

                //destroe o modal
                loader.dismissAll();
                //console.log(response._body);
                //retorna o código
                if (objeto_retorno === true) {


                    //modal de confirmação para o usuario
                    let alert = this.alertCtrl.create({
                        title: 'Parabéns<br>',
                        subTitle: 'Parabéns, você realizou o cadastro em nosso sistema. Você será logado automáticamente.',
                        enableBackdropDismiss: false,
                        buttons: [
                            {
                                text: 'Ok',
                                handler: () => {
                                    // this.navCtrl.setRoot(ExplorePage);
                                    this.navCtrl.setRoot(SystemTabsPage, {}, {animate: true, direction: 'forward'});
                                }
                            }]
                    });
                    alert.present();
                } else {

                    //modal de código invalido
                    let alert = this.alertCtrl.create({
                        title: 'Autenticação',
                        subTitle: 'Código incorreto',
                        buttons: ['Ok']
                    });
                    alert.present();
                }

            }, error => {
                //destroe o modal
                loader.dismissAll();
                //modal de erro na autenticação
                let alert = this.alertCtrl.create({
                    title: 'Autenticação',
                    subTitle: 'Erro na autenticação',
                    buttons: ['Ok']
                });
                alert.present();
            });

        });


    });

}
