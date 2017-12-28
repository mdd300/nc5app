import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import {ProfileProvider} from "../../../../providers/profile/ProfileProvider";

/**
 * Generated class for the ProfileConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-profile-config',
    templateUrl: 'profile-config.html',
})
export class ProfileConfigPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public profileProvider: ProfileProvider) {
    }

    public constants = Constants;

    /**
     * Função utilizada para fechar a pagina de configurações */
    public closeSettings = ((): void => {
        this.navCtrl.pop();
    });
    /* Fim da função de fechamento das configurações */

    public changeProfileView = ( (): void => {

        let profileView = this.profileProvider.get('ownProfile');
        this.profileProvider.set( 'ownProfile', !profileView );
        this.profileProvider.set( 'seenProfile', profileView );
        this.closeSettings();

    });


}
