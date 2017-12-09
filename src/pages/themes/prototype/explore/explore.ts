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


    private timeoutRecommended: any = null;
    /**
     * Função para verificar o nivel de scroll
     */
    public doScrollRecommended = (() => {

        let $scroller: any = $(this.scrollerRecommended.nativeElement);
        let $items: any = $scroller.find('li.reccommendation-item');
        let platformWidth: number = this.platform.width();
        let halfPlatWidth: number = (platformWidth / 2);

        clearTimeout(this.timeoutRecommended);
        this.timeoutRecommended = setTimeout(function () {

            $.each($items, function (key, item) {
                let $item: any = $(item);
                let $itemScroll: number = parseInt($item.offset().left);
                let itensConfig = {w: $item.width(), h: $item.height(), wFull: ( $item.width() * key )}

                if (key > 0) {
                    itensConfig.wFull += (10 * key);
                }

                /* Verifica se o scroll é positivo - O Próximo item */
                if (( $itemScroll > 0 && $itemScroll < halfPlatWidth  )) {

                    $scroller.stop().animate({scrollLeft: itensConfig.wFull + "px"}, 100);
                    return false;

                }
                /* Fim da verificação de positividade */
                /* Verificação de negatividade - O item Anterior */
                else if (( $itemScroll > -(halfPlatWidth - 10) && $itemScroll <= 0)) {

                    $scroller.stop().animate({scrollLeft: itensConfig.wFull + "px"}, 100);
                    return false;

                }
                /* Fim da verificação da negatividade */


            });

        }, 150);

    });
    /* fim da função de checagem de scroll */


    private scrollable: boolean;
    private content: any;
    private coords: any;
    private scrollTimeout: any;
    /**
     * Função utilizada para iniciar o scroll do content */
    public doScrollContent = ( ( content:string , event : any ) => {

        let $scrollable = $('body').find( '.' + content );
        clearTimeout( this.scrollTimeout );
        console.log( event.distance );
        if( event.direction === 2 ){
            $scrollable.stop().animate({ scrollLeft: '+=' + ( event.distance / 10 ) +"px" }, 0 );
        }
        if( event.direction === 4 ){
            $scrollable.stop().animate({ scrollLeft: '-=' + ( event.distance / 10 ) +'px' }, 0 );

        }
        
    });


    /* Função iniciada quando a view for iniciada */
    ionViewDidLoad() {
        /* Quando a view foi iniciada, e ja está pronta */
        let profileModal = this.modalCtrl.create(GostosPage);
        profileModal.present();
    }

    /* Fim da função iniciada quando a view estiver pronta */

}
