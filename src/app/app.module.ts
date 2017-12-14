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
import {GostosPageModule} from "../pages/themes/prototype/modais/gostos/gostos.module";
import {LocalizacaoPageModule} from "../pages/themes/prototype/modais/localizacao/localizacao.module";
import {FeedPageModule} from "../pages/themes/prototype/feed/feed.module";
import {PostPageModule} from "../pages/themes/prototype/modais/post/post.module";
import {LoginPage} from "../pages/themes/prototype/login/login";
import {SystemTabsPageModule} from "../pages/themes/prototype/system-tabs/system-tabs.module";
import {SystemTabsPage} from "../pages/themes/prototype/system-tabs/system-tabs";
import {ActionsFeedPageModule} from "../pages/themes/prototype/popovers/actions-feed/actions-feed.module";

import {HttpModule} from '@angular/http';
import { CategoriaProvider } from '../providers/categoria/categoria';

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
        ActionsFeedPageModule,
<<<<<<< HEAD
        LocalizacaoPageModule,
        IonicModule.forRoot(Qrgo_prototype)
=======
        IonicModule.forRoot(Qrgo_prototype),
        HttpModule,
>>>>>>> b150d07ea5cd9a4f94f49150b609ac19bbe634d1
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
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CategoriaProvider
    ]

})
export class AppModule {
}
