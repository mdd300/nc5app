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
        IonicModule.forRoot(Qrgo_prototype)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        Qrgo_prototype,
        SlidesPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
