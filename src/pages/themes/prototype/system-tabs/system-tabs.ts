import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController, AlertController} from 'ionic-angular';
import {FeedPage} from "../feed/feed";
import {ExplorePage} from "../explore/explore";
import * as $ from 'jquery';
import {LoginPage} from "../login/login";
import {Storage} from '@ionic/storage';
import {ProfilePage} from "../profile/profile";
import { NotificacaoPage} from "../notificações/notificacao/notificacao"
import {ProductProfilePage} from "../produtos/product-profile/product-profile";


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

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public menuCtrl: MenuController,
        private alertCtrl: AlertController,
        public storage: Storage) {}

    public pageHome: any = FeedPage;
    public pageExplore: any = ExplorePage;
    public pageBag: any = ProductProfilePage;
    public pageMessages: any = NotificacaoPage;
    public pageProfile: any = ProfilePage;

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

                        this.storage.set('user_logged', '').then(() => {
                            localStorage.setItem('user_logged', '');
                            this.storage.set('access', null);
                            this.navCtrl.setRoot(LoginPage);
                        });

                    } /* Hander of "OK" button */
                }]
        });
        alert.present();

    });
    /* Fim da função utilizada para realizar o logout do usuário */

}
