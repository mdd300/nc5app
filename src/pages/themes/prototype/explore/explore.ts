import {Component, ViewChild} from '@angular/core';
import {ModalController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {GostosPage} from "../gostos/gostos";
import {Constants} from "../../../../config/Constants";
import * as $ from 'jquery';


/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-explore',
    templateUrl: 'explore.html',
})
export class ExplorePage {


    @ViewChild('scrollerRecomended') scrollerRecomended: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController) {
    }

    public constants = Constants;
    public recommendations = [
        {mark: 'Unique', wallpaper: 'unique.jpg'},
        {mark: 'Unike', wallpaper: 'unique2.jpg'},
        {mark: 'Unike', wallpaper: 'unique2.jpg'}
    ];

    public marcas = [
        {marca: 'Unique', produtos: [{null: null}, {null: null}]},
        {marca: 'Unieke', produtos: [{null: null}, {null: null}, {null: null}, {null: null}]}
    ];


    private timeoutRecommended: any = null;
    /**
     * Função para verificar o nivel de scroll
     */
    public doScrollRecommended = (() => {

        clearTimeout(this.timeoutRecommended);
        this.timeoutRecommended = setTimeout(function () {

            console.log( this.scrollerRecomended );
            //let $scroller = $( this.scrollerRecomended );
            //let $itens = $scroller.find( 'li.reccommendation-item' );
            //console.log( $itens );


        }, 350);


    });
    /* fim da função de checagem de scroll */


    /* Função iniciada quando a view for iniciada */
    ionViewDidLoad() {
        /* Quando a view foi iniciada, e ja está pronta */
        let profileModal = this.modalCtrl.create(GostosPage);
        profileModal.present();
    }

    /* Fim da função iniciada quando a view estiver pronta */

}
