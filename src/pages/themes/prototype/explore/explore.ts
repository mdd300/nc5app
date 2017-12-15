import {Component, ViewChild} from '@angular/core';
import {ModalController, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {GostosPage} from "../modais/gostos/gostos";
import {Constants} from "../../../../config/Constants";
import {CategoriaProvider} from '../../../../providers/categoria/categoria';
import {Storage} from '@ionic/storage';

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
                public platform: Platform,
                public categoriaProvider: CategoriaProvider,
                public storage: Storage) {
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

    public styles = [];

    /**
     * Função utilizada para iniciar o scroll do content */
    public doScrollContent = ( ( element:string , event: any) => {

    });/* Fim função executada com o scroll do content */


    /* Função iniciada quando a view for iniciada */
    ionViewDidLoad() {
        /* Quando a view foi iniciada, e ja está pronta */
        let profileModal = this.modalCtrl.create(GostosPage);

        this.categoriaProvider.getCategoriasSelecionadas().subscribe(data => {
            const response = (data as any);
            const objeto_retorno = JSON.parse(response._body);
            
            this.styles = objeto_retorno;
            
            // armazena localmente para caso de falta de internet
            this.storage.set('styles', objeto_retorno);
            this.storage.set('profile_modal_clicado', true);
        }, error => {
            console.log(error);
            // captura dados locais caso não consiga os dados online
            this.styles = (this.storage.get('styles') as any);
        }).add(() => {
            if (this.styles.length < 1) {
                profileModal.present();
            }
        });
    }

    /* Fim da função iniciada quando a view estiver pronta */

}
