import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {SlidesPage} from "../pages/themes/prototype/slides/slides";
import {LoginPage} from "../pages/themes/prototype/login/login";
import {SystemTabsPage} from "../pages/themes/prototype/system-tabs/system-tabs";

@Component({
    templateUrl: 'app.html'
})
export class Qrgo_prototype {


    private storage: string = localStorage.getItem('qrgo_application');
    private session: any = JSON.parse(this.storage);
    rootPage: any = ( ( this.session == null || this.session.first_access != false ) ? SlidesPage : LoginPage );


    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.

            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}

