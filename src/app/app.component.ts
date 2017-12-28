import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import {SlidesPage} from "../pages/themes/prototype/slides/slides";
import {LoginPage} from "../pages/themes/prototype/login/login";
import {SystemTabsPage} from "../pages/themes/prototype/system-tabs/system-tabs";

@Component({
    templateUrl: 'app.html',
    providers: [Keyboard]
})
export class Qrgo_prototype {

    private storage: string = localStorage.getItem('qrgo_application');
    private session: any = JSON.parse(this.storage);
    private user_logged = (localStorage.getItem('user_logged') == '' ? null : JSON.parse(localStorage.getItem('user_logged')));

    rootPage: any = ((this.session == null || this.session.first_access != false) ? SlidesPage : (this.user_logged == null ? LoginPage : SystemTabsPage));

    constructor(public platform: Platform,
                statusBar: StatusBar,
                private keyboard: Keyboard,
                splashScreen: SplashScreen) {
        platform.ready().then(() => {

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            statusBar.hide();
            statusBar.overlaysWebView(false);
            splashScreen.hide();

        });

    }

    ionViewDidEnter() {
        this.platform.ready().then(() => {
            this.keyboard.disableScroll(true);
        });
    }

    ionViewWillLeave() {
        this.platform.ready().then(() => {
            this.keyboard.disableScroll(false);
        });
    }

}

