import {IonicPage, ModalController, NavController, NavParams, AlertController} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {Constants} from "../../../../config/Constants";
import {PostPage} from "../modais/post/post";
import * as $ from "jquery";
import {PostProvider} from '../../../../providers/post/post';
import {ActionSheetController} from 'ionic-angular'
import {SocialSharing} from '@ionic-native/social-sharing';
import {Http} from "@angular/http";
import {Storage} from '@ionic/storage';
//import {SystemTabsPage} from "../system-tabs/system-tabs";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-feed',
    templateUrl: 'feed.html',
    providers: [
        PostProvider
    ]
})
export class FeedPage {

    public constants = Constants;

    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController,
                public navParams: NavParams,
                public actionSheetCtrl: ActionSheetController,
                private socialSharing: SocialSharing,
                public postProvider: PostProvider,
                public storage: Storage,
                public alertCtrl: AlertController,
                public http: Http) {
    }

    // Abrir modal para realizar psot
    public doPost = (() => {
        let profileModal = this.modalCtrl.create(PostPage);
        profileModal.present();


    });


    /**
     * Estrutura Padrão e Base de como os dados do feed devem ser retornados */
    public feed = [];
    /*public feed = [
        {type: 1, company: 'Unique', image: "post1.jpg", products: null},
        {type: 1, company: 'Unieke', image: "unique.jpg", products: null},
        {type: 1, company: 'CHLOE', image: null, products: null},
        {type: 2, company: 'Marisa', image: 'roupa5.jpg', products: null},
        {
            type: 3, company: 'Zara', image: 'wallpaper.jpg', products:
            [
                { group: [
                    {prod_image: 'roupa5.jpg'},
                    {prod_image: 'roupa1.jpg'},
                    {prod_image: 'roupa1.png'},
                ]},
                { group: [
                    {prod_image: 'roupa5.jpg'},
                    {prod_image: 'roupa2.png'},
                    {prod_image: 'roupa4.jpg'}
                ]}
            ]
        },
        {
            type: 3, company: 'Brooksfield', image: null, products:
            [
                { group: [
                    {prod_image: 'roupa1.jpg'},
                    {prod_image: 'roupa2.png'},
                    {prod_image: 'roupa3.jpg'},
                ]},
                { group: [
                    {prod_image: 'roupa1.png'},
                    {prod_image: 'roupa2.png'},
                    {prod_image: 'roupa1.png'}
                ]},
                { group: [
                    {prod_image: 'roupa1.jpg'},
                    {prod_image: 'roupa2.png'},
                ]},
            ]
        },
        {type: 1, company: 'WebCloset', image: null, products: null}
    ]*/
    /* Fim da estrutura base de como o feed deve ser retornado */

    public filter: number = 1;
    @ViewChild('filterCaret') filterCaret: any;
    public changeFilter = ((event, filterId) => {
        let $caret = $(this.filterCaret.nativeElement);
        let $filter = $(event.path[0]);
        let dimensions = {w: $filter.width(), x: $filter.position().left}
        $caret.css({width: dimensions.w + 'px', left: dimensions.x + 'px'});
        this.filter = filterId;

        // Lista Somente Produtos
        if (filterId === 4) {
            this.feed = this.feed.filter(feed => {
                if (feed.type === 2 || feed.type === 3) {
                    return feed;
                }
            });

        } else {
            this.ionViewDidLoad();
        }
    });


    private feedAction: any = null;

    /**
     * Função utilizada para realizar ações relacionadas para
     * @param post
     */
    public actionsPostFeed(post: any) {

        this.feedAction = post;
        let actionSheet = this.actionSheetCtrl.create({
            cssClass: 'feed-post-actions',
            buttons: [
                {
                    text: 'Publicação: ' + this.feedAction.company.toUpperCase(),
                    cssClass: 'closeFeedActions'
                },
                {
                    text: 'Ocultar: ' + this.feedAction.company.toUpperCase(),
                    cssClass: 'actionButton btnOcultar',
                    handler: () => {
                    }
                },
                {
                    text: 'Receber Notificações',
                    cssClass: 'actionButton btnNotifications',
                    handler: () => {
                    }
                },
                {
                    text: 'Denunciar: ' + this.feedAction.company.toUpperCase(),
                    cssClass: 'actionButton btnDenunciar',
                    handler: () => {
                    }
                },
            ]
        });
        /* Fim das options de ações de Post do Feed */
        actionSheet.present();
    }

    /* Fim da function actionsPostFeed */


    public sharePost = ((post): void => {
        this.socialSharing.share('Olhe este produto que eu encontrei em: ', '', '', 'www.go.qrgo.com.br/image').then(() => {
        });
    });

    public likePost = ((post): void => {

        this.storage.get('access').then((access) => {

            var action = (post.like_id == null ? true : false);

            this.http.post(this.constants.api_path + 'post/like', $.param({
                post_id: post.id,
                token_id: access.token_id,
                token_hash: access.token_hash,
                action: action
            })).subscribe((data) => {

                var response = (data as any);
                response = JSON.parse(response._body);

                if (response.success) {
                    if (post.like_id) {
                        post.like_id = null;
                    }
                    else {
                        post.like_id = response.like_id;
                    }
                }

            }, () => {

                let alert = this.alertCtrl.create({
                    title: 'Parece que você está sem internet, sua ação será feita quando ficar online',
                    subTitle: '',
                    enableBackdropDismiss: true,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {

                                this.storage.get('likes_offline').then((likes_offline) => {

                                    if (likes_offline == null || likes_offline == undefined) {

                                        likes_offline = [post.id];

                                        this.storage.set('likes_offline', likes_offline);

                                    }
                                    else {

                                        likes_offline.push(post.id);

                                        this.storage.set('likes_offline', likes_offline);

                                    }

                                });

                            }
                        }]
                });
                alert.present();

            });
        });

    });

    ionViewDidLoad() {

        this.storage.get('access').then((access) => {
            this.postProvider.getPosts(access).subscribe(data => {
                var response = (data as any);
                var objeto_retorno = JSON.parse(response._body);
                
                this.storage.set('feed', objeto_retorno).then(() => {
                    this.feed = objeto_retorno;
                });
            }, error => {
                // caso aconteça erro na requisição ou usuario esteja sem internet ele pega o feed armazenado localmente
                this.storage.get('feed').then((feed) => {
                    this.feed = feed;
                });
            });
        });
    }

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
    }
}
