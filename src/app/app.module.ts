import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {Qrgo_prototype} from './app.component';
import {SlidesPage} from "../pages/themes/prototype/slides/slides";
import {SlidesPageModule} from "../pages/themes/prototype/slides/slides.module";
import {LoginPageModule} from "../pages/themes/prototype/login/login.module";
import {Step1PageModule} from "../pages/themes/prototype/cadastro/step1/step1.module";
import {Step2PageModule} from "../pages/themes/prototype/cadastro/step2/step2.module";
import {Step3PageModule} from "../pages/themes/prototype/cadastro/step3/step3.module";
import {ConfirmCadPageModule} from "../pages/themes/prototype/cadastro/confirm-cad/confirm-cad.module";
import {ExplorePageModule} from "../pages/themes/prototype/explore/explore.module";
import {GostosPageModule} from "../pages/themes/prototype/gostos/gostos.module";
import {FeedPageModule} from "../pages/themes/prototype/feed/feed.module";
import {PostPageModule} from "../pages/themes/prototype/post/post.module";
import {LoginPage} from "../pages/themes/prototype/login/login";
import {SystemTabsPageModule} from "../pages/themes/prototype/system-tabs/system-tabs.module";
import {SystemTabsPage} from "../pages/themes/prototype/system-tabs/system-tabs";


@NgModule({
    declarations: [
        Qrgo_prototype
    ],
    imports: [
        BrowserModule,
        SlidesPageModule,
        LoginPageModule,
        Step1PageModule,
        Step2PageModule,
        Step3PageModule,
        ConfirmCadPageModule,
        ExplorePageModule,
        GostosPageModule,
        FeedPageModule,
        PostPageModule,
        SystemTabsPageModule,
        IonicModule.forRoot(Qrgo_prototype)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        Qrgo_prototype,
        SlidesPage,
        LoginPage,
        SystemTabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]

})
export class AppModule {
}
