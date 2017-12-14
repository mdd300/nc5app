import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {Constants} from "../../../../config/Constants";
import {PostPage} from "../modais/post/post";
import * as $ from "jquery";

import { ActionSheetController } from 'ionic-angular'

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
})
export class FeedPage {

    public constants = Constants;

  constructor(
      public navCtrl: NavController,
      public modalCtrl: ModalController,
      public navParams: NavParams,
      public actionSheetCtrl: ActionSheetController
  ) {}

  // Abrir modal para realizar psot
    public doPost = ( ()=>{
        let profileModal = this.modalCtrl.create(PostPage);
        profileModal.present();

    });

    /**
     * Estrutura Padrão e Base de como os dados do feed devem ser retornados */
    public feed = [
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
            ]/* Fim do products */
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
            ]/* Fim do products */
        },
        {type: 1, company: 'WebCloset', image: null, products: null}
    ]
    /* Fim da estrutura base de como o feed deve ser retornado */

    public filter:number = 1;
    @ViewChild('filterCaret') filterCaret:any;
    public changeFilter = (( event, filterId ) => {
        let $caret = $(this.filterCaret.nativeElement);
        let $filter = $( event.path[0] );
        let dimensions = { w: $filter.width(), x: $filter.position().left }
        $caret.css({ width: dimensions.w+'px', left: dimensions.x + 'px' });
        this.filter = filterId;
    });


    private feedAction:any = null;

    /**
     * Função utilizada para realizar ações relacionadas para
     * @param post
     */
    public actionsPostFeed( post:any ) {

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
                    handler: () => {}
                },
                {
                    text: 'Receber Notificações',
                    cssClass: 'actionButton btnNotifications',
                    handler: () => {}
                },
                {
                    text: 'Denunciar: ' + this.feedAction.company.toUpperCase(),
                    cssClass: 'actionButton btnDenunciar',
                    handler: () => {}
                },
            ]
        });
        /* Fim das options de ações de Post do Feed */
        actionSheet.present();
    }/* Fim da function actionsPostFeed */

}
