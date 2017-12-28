import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, AlertController, ActionSheetController} from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import {ExploreEstilosPage} from "../explore-estilos/explore-estilos";
import * as $ from "jquery";
import {ProfileConfigPage} from "../profile-config/profile-config";
import {SocialSharing} from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';
import {ProfileProvider} from "../../../../providers/profile/ProfileProvider";

@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        private socialSharing: SocialSharing,
        private callNumber: CallNumber,
        private alertCtrl: AlertController,
        public actionSheetCtrl: ActionSheetController,
        public profileProvider: ProfileProvider
    ) {}

    public constants: any = Constants;
    public profile:any = {
        campany_name: 'Unique',
        company_type: 'Confecção',
        profile_id: 1,
        profile_connections: 1000,
        company_logo: 'logo3.png',
    };

    public ownProfile:boolean = true;
    public seenProfile: boolean = false;


    /**
     * Função utilizada para abrir o modal de gerenciamento de estilos por perfil */
    public settingsStyles = (() => {
        /* Cria o modal de estilos */
        let stylesModal = this.modalCtrl.create(ExploreEstilosPage, null, {'cssClass': 'fullModal'});
        stylesModal.present();
    });
    /** fim da function settingsStyles */

    public profile_produts = [
        {background: 'roupa6.jpg'},
        {background: 'roupa5.jpg'},
        {background: 'roupa5.jpg'},
        {background: 'roupa5.jpg'},
        {background: 'roupa5.jpg'},
        {background: 'roupa7.jpg'}
    ];

    private lockScroll: boolean = false;

    /**
     * Função utilizada para dar ao usuário um feedback de que ele realizará a busca no perfil (scrolla a pagina até que o input de busca fique no topo) */
    public startSearch = (() => {
        if (!this.lockScroll) {

            this.lockScroll = true;
            let __this = this;

            $('.scroll-content').stop().animate({scrollTop: '350px'}, 400);
            setTimeout(function () {
                __this.lockScroll = false;
            }, 400);

        }
    });
    /** Fim da função startSearch */

    public headerIndicator: any = {left: '0%'};
    public activedPage: string = 'feed';
    /**
     * Função utilizada para aplicar o "switch" da view da pagina de perfil, entre produtos e feed */
    public switchProfilePage = ((page: string): void => {

        this.activedPage = page;
        $('.scroll-content').stop().animate({scrollTop: '280px'}, 800);
        /* Verifica qual a pagina que deverá ser exibida */
        if (page == "feed") {
            /* Caso a pagina a ser exibida deva ser a de "feed"  */
            this.headerIndicator = {left: '0'};
        }
        /* Verifica se a pagina a ser exibida deverá se a de "produtos" */
        if (page == "products") {
            this.headerIndicator = {left: '50%'};
        }
        /* Fim das verificações de tipo de pagina à ser exibida */

    });
    /* Fim da função utilizada para realizar a troca da view da pagina */

    /**
     * Função utilizada para abrir a pagina de configurações do perfil do usuário */
    public profileConfigs = ((): void => {
        this.navCtrl.push(ProfileConfigPage);
    });
    /* Fim da função de configuração do perfil do usuário */

    /**
     *
     */
    public shareProfile = ((): void => {
        this.socialSharing.share('Dê uma olhada neste perfil! www.open.qrgo/profile-1')
            .then()
            .catch( ()=> {
                let alert = this.alertCtrl.create({
                    title: 'Compartilhamento',
                    subTitle: 'Não é possivel compartilhar este perfil no momento, por favor tente novamente mais tarde.',
                    buttons: ['Ok']
                });
                alert.present();
            });
    });

    /**
    * Função utilizada para realizar a chamada para o telefone do perfil */
    public callProfile = ( ():void => {
        /* Inicia a função para realizar a chamada */
        this.callNumber.callNumber("11967964984", true)
            /* Quando a chamada for realizada */
            .then(() => {})
            /* Caso não seja possivel realizar a chamada */
            .catch(() => {
                /* Alerta de impossibilidade de realização d chamada */
                let alert = this.alertCtrl.create({
                    title: 'Chamadas',
                    subTitle: 'Não foi possivel realizar esta chamada, por favor tente novamente',
                    buttons: ['Ok']
                });
                alert.present();
                /* Fim da mensagem de impossibilidade de chamada */
            });/* Fim da função de Catch da tentativa de chamada */
    });/* Fim da função callProfile para realizar a chamada do perfil */


    /**
     * Função utilizada para abrir as opções e ações sobre um perfil de um terceiro */
    public profileActions = ( ():void =>{

        let actionSheet = this.actionSheetCtrl.create({
            cssClass: 'feed-post-actions',
            buttons: [
                {
                    text: 'Perfil: Unique ',
                    cssClass: 'closeFeedActions'
                },
                {
                    text: 'Conectar com Unique ',
                    cssClass: 'actionButton btnConnectUser',
                    handler: () => {
                    }
                },
                {
                    text: 'Bloquear Unique',
                    cssClass: 'actionButton btnBlockUser',
                    handler: () => {
                    }
                },
                {
                    text: 'Denunciar Unique ',
                    cssClass: 'actionButton btnDenunciarUser',
                    handler: () => {
                    }
                },
            ]
        });
        /* Fim das options de ações de Post do Feed */
        actionSheet.present();

    }); /* Fim da function profileActions */

    public disableProfileView = ( ():void => {
        this.profileProvider.set( 'ownProfile', true );
        this.profileProvider.set( 'seenProfile', false );

        this.ownProfile = true;
        this.seenProfile = false;
    });

    ionViewDidEnter() {
        this.ownProfile = this.profileProvider.get('ownProfile');
        this.seenProfile = this.profileProvider.get('seenProfile');
    }

}
