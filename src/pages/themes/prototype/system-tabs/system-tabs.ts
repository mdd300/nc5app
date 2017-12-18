import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController, AlertController} from 'ionic-angular';
import {FeedPage} from "../feed/feed";
import {ExplorePage} from "../explore/explore";
import * as $ from 'jquery';
import {LoginPage} from "../login/login";

/**
 * Generated class for the SystemTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-system-tabs',
    templateUrl: 'system-tabs.html',
})
export class SystemTabsPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public menuCtrl: MenuController,
                private alertCtrl: AlertController
    ) {}

    public pageHome: any = FeedPage;
    public pageExplore: any = ExplorePage;
    public pageBag: any = null;
    public pageNotification: any = null;

    /**
     * Função utilizada para realizar o Scroll até o topo da pagina, quando clicar na "tab" que já está ativa
     * @type {(event) => any} - Infos of pointer click event */
    public scrollTopContent = ((event) => {
        if ($(event.target).closest('.tab-button[aria-selected="true"]').length > 0) {
            $('.scroll-content').stop().animate({'scrollTop': 0}, 300)
        }
    });

    /* Fim da função utilizada para o scroll até o topo da pagina */

    /**
     * Função utilizada para abrir o menu de opções */
    public openMenu = (() =>{
        this.menuCtrl.open();
    }); /* Fim da função utilizada para abrir o menu de opções */

    /**
     * Função utilizada para realizar o Logout do usuário */
    public doLogout = (() => {

        let alert = this.alertCtrl.create({
            title: 'Logout',
            subTitle: 'Deseja realmente realizar o Logout do aplicativo?',
            enableBackdropDismiss: false,
            buttons: [
            {
                text: 'Não',
                handler: () => {
                }
            },
            {
                text: 'Sim',
                handler: () => {
                    this.navCtrl.setRoot(LoginPage);
                } /* Hander of "OK" button */
            }]
        });
        alert.present();

    });/* Fim da função utilizada para realizar o logout do usuário */

}
