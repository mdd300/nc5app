import {Component, ViewChild} from '@angular/core';
import {ModalController, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
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

    @ViewChild('scrollerRecommended') scrollerRecommended;


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                public platform: Platform) {
    }

    public constants = Constants;
    public recommendations = [
        {mark: 'Unique', wallpaper: 'unique.jpg'},
        {mark: 'Unike', wallpaper: 'unique2.jpg'},
        {mark: 'Unique', wallpaper: 'unique.jpg'},
        {mark: 'Unike', wallpaper: 'unique2.jpg'},
        {mark: 'Unique', wallpaper: 'unique.jpg'},
    ];

    public marcas = [
        {marca: 'Unique', produtos: [{null: null}, {null: null}]},
        {marca: 'Unieke', produtos: [{null: null}, {null: null}, {null: null}, {null: null}]}
    ];


    private timeoutScroll:any;
    /**
     * Função utilizada para iniciar o scroll do content */
    public doScrollContent = ( ( element:string , event: any) => {

        let $element: any = $('body').find( '.' + element );
        let $items: any = $element.find('.item-scrollable');
        let platformWidth: number = this.platform.width();

        clearTimeout( this.timeoutScroll );
        this.timeoutScroll = setTimeout(function(){
            $.each($items, function (key, item) {

                let $item: any = $(item);
                let $itemScroll: number = parseInt($item.offset().left);
                let itensConfig = {w: $item.width(), h: $item.height(), scroll: ( $item.width() * key )}
                if (key > 0) {
                    itensConfig.scroll += (10 * key);
                }
                /* Verifica se o scroll é positivo - O Próximo item */
                if (( $itemScroll > 0 && $itemScroll < ( platformWidth / 2 ) )) {
                    $element.stop().animate({scrollLeft: itensConfig.scroll + "px"}, 50);
                    return false;
                }
                /* Fim da verificação de positividade */
                /* Verificação de negatividade - O item Anterior */
                else if (( $itemScroll > -( ( platformWidth / 2 ) - 10) && $itemScroll <= 0)) {
                    $element.stop().animate({scrollLeft: itensConfig.scroll + "px"}, 50);
                    return false;
                }
                /* Fim da verificação da negatividade */
            });
        }, 150);

    });/* Fim função executada com o scroll do content */


    /* Função iniciada quando a view for iniciada */
    ionViewDidLoad() {
        /* Quando a view foi iniciada, e ja está pronta */
        let profileModal = this.modalCtrl.create(GostosPage);
        profileModal.present();
    }

    /* Fim da função iniciada quando a view estiver pronta */

}
