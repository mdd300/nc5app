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
import {HttpModule} from '@angular/http';
import { CategoriaProvider } from '../providers/categoria/categoria';
import {SocialSharing} from "@ionic-native/social-sharing";
import {ForgotPass_1PageModule} from "../pages/themes/prototype/forgot-pass/forgot-pass-1/forgot-pass-1.module";
import {ForgotPass_2PageModule} from "../pages/themes/prototype/forgot-pass/forgot-pass-2/forgot-pass-2.module";
import {ForgotPass_3PageModule} from "../pages/themes/prototype/forgot-pass/forgot-pass-3/forgot-pass-3.module";
import {IonicStorageModule} from '@ionic/storage';

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
        LocalizacaoPageModule,

        ForgotPass_1PageModule,
        ForgotPass_2PageModule,
        ForgotPass_3PageModule,

        HttpModule,
        IonicStorageModule.forRoot({
            name: 'fashon',
            driverOrder: ['sqlite', 'websql', 'indexeddb']
        }),
        IonicModule.forRoot(Qrgo_prototype, { scrollAssist: false, autoFocusAssist: false } ),
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
        SocialSharing,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CategoriaProvider
    ],


})
export class AppModule {


}

