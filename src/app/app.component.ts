import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import {LoginPage} from "../pages/themes/prototype/login/login";
import {FeedPage} from "../pages/themes/prototype/feed/feed";

@Component({
    templateUrl: 'app.html',
    providers: [Keyboard]
})
export class Qrgo_prototype {

    // private storage: string = localStorage.getItem('qrgo_application');
    // private session: any = JSON.parse(this.storage);
    // private user_logged = (localStorage.getItem('user_logged') == '' ? null : JSON.parse(localStorage.getItem('user_logged')));
    //
    // rootPage: any = ((this.session == null || this.session.first_access != false) ? LoginPage : (this.user_logged == null ? LoginPage : FeedPage));

    rootPage: any = LoginPage;

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

