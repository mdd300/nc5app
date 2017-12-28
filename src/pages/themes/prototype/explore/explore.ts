import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, App} from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import {ExploreEstilosPage} from "../explore-estilos/explore-estilos";
import {LoginPage} from "../login/login";
import {Storage} from "@ionic/storage";

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

    public constants = Constants;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                public storage: Storage,
                public app: App
                ) {
    }

    public destaques = [
        {
            company_name: 'Unique',
            company_type: 'Confecção',
            company_logo: 'logo1.png',
            destaque_wallpaper: 'wallpaper4.jpg',
            destaque_products: [
                {product_image: 'roupa5.jpg'},
                {product_image: 'roupa6.jpg'},
                {product_image: 'roupa1.jpg'}
            ]
        },
        {
            company_name: 'Unieke',
            company_type: 'Confecção',
            company_logo: 'logo1.png',
            destaque_wallpaper: 'wallpaper3.jpg',
            destaque_products: [
                {product_image: 'roupa2.png'},
                {product_image: 'roupa3.jpg'}
            ]
        },
        {
            company_name: 'Gucci',
            company_type: 'Confecção',
            company_logo: 'logo1.jpg',
            destaque_wallpaper: 'wallpaper2.jpg',
            destaque_products: [
                {product_image: 'roupa3.jpg'},
                {product_image: 'roupa4.jpg'},
                {product_image: 'roupa1.png'}
            ]
        }
    ];
    /* Fim do array dos destaques */

    public feedExplore = [
        {
            direction: '',
            products: [
                {product_image: 'roupa6.jpg', product_logo: 'logo1.png'},
                {product_image: 'roupa5.jpg', product_logo: 'logo2.jpg'},
                {product_image: 'roupa4.jpg', product_logo: 'logo3.png'},
                {product_image: 'roupa7.jpg', product_logo: 'logo2.jpg'},
                {product_image: 'roupa7.jpg', product_logo: 'logo2.jpg'},
                {product_image: 'roupa9.jpg', product_logo: 'logo1.jpg'}
            ]
        },
        {
            direction: 'right',
            products: [
                {product_image: 'roupa4.jpg', product_logo: 'logo3.png'},
                {product_image: 'roupa9.jpg', product_logo: 'logo2.jpg'},
                {product_image: 'roupa7.jpg', product_logo: 'logo1.png'},
                {product_image: 'roupa9.jpg', product_logo: 'logo2.png'},
                {product_image: 'roupa8.jpg', product_logo: 'logo1.png'},
                {product_image: 'roupa7.jpg', product_logo: 'logo3.png'},
                {product_image: 'roupa8.jpg', product_logo: 'logo2.jpg'},
                {product_image: 'roupa6.jpg', product_logo: 'logo1.jpg'},
                {product_image: 'roupa8.jpg', product_logo: 'logo1.png'}
            ]
        },
    ]


    public suggestions = [
        {
            company_name: "Unique",
            company_type: "Confecção",
            company_logo: "logo1.png"
        },
        {
            company_name: "Empire",
            company_type: "Lojista",
            company_logo: "logo3.png"
        },
        {
            company_name: "Stark",
            company_type: "Confecção",
            company_logo: "logo2.png"
        }
    ]

    /**
     * Função utilizada para abrir o modal de gerenciamento de estilos por perfil */
    public settingsStyles = (() => {
        /* Cria o modal de estilos */
        let stylesModal = this.modalCtrl.create(ExploreEstilosPage, null, {'cssClass': 'fullModal'});
        stylesModal.present();
    });
    /** fim da function settingsStyles */

    public doLogout = ((): void => {

        this.storage.set('access', null).then(() => {
            this.storage.set('user_logged', null).then(() => {
                localStorage.setItem('user_logged', null);
                localStorage.setItem('access', null);
                this.app.getRootNav().setRoot(LoginPage);
            });
        });

    });


}
