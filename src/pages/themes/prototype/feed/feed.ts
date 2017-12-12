<<<<<<< HEAD
import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import * as $ from "jquery";
=======
import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import {PostPage} from "../post/post";
>>>>>>> bfb0f165b210489218a8b87dab37d177e9cb1fcd

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

<<<<<<< HEAD
    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
    }
=======
  constructor(
      public navCtrl: NavController,
      public modalCtrl: ModalController,
      public navParams: NavParams
  ) {}
>>>>>>> bfb0f165b210489218a8b87dab37d177e9cb1fcd

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


    @ViewChild('filterCaret') filterCaret:any;
    public changeFilter = (( event ) => {
        let $caret = $(this.filterCaret.nativeElement);
        let $filter = $( event.path[0] );
        let dimensions = { w: $filter.width(), x: $filter.position().left }
        $caret.css({ width: dimensions.w+'px', left: dimensions.x + 'px' });
    });

}
