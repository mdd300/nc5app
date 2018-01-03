import { BrowserModule} from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen} from '@ionic-native/splash-screen';
import { StatusBar} from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { Qrgo_prototype} from './app.component';
import {FeedPageModule} from "../pages/themes/prototype/feed/feed.module";
import {FeedPage} from "../pages/themes/prototype/feed/feed";
import { LoginPageModule} from "../pages/themes/prototype/login/login.module";
import { LoginPage} from "../pages/themes/prototype/login/login";
import { HttpModule} from '@angular/http';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { SocialSharing} from "@ionic-native/social-sharing";
import { ForgotPass_1PageModule} from "../pages/themes/prototype/forgot-pass/forgot-pass-1/forgot-pass-1.module";
import { ForgotPass_2PageModule} from "../pages/themes/prototype/forgot-pass/forgot-pass-2/forgot-pass-2.module";
import { ForgotPass_3PageModule} from "../pages/themes/prototype/forgot-pass/forgot-pass-3/forgot-pass-3.module";
import { IonicStorageModule} from '@ionic/storage';
import { FileChooser } from '@ionic-native/file-chooser';
import { PostProvider } from '../providers/post/post';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import {File as File2} from "@ionic-native/file";
import {CallNumber} from "@ionic-native/call-number";
import {ProfileProvider} from "../providers/profile/ProfileProvider";
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@NgModule({


    declarations: [
        Qrgo_prototype
    ],


    imports: [
        BrowserModule,
        LoginPageModule,
        FeedPageModule,

        /* Páginas relacionadas ao Perfil */
        /* Paginas relacionadas ao sistema */
        /* Paginas relacionadas ao processo de recuperação de senha */
        ForgotPass_1PageModule,
        ForgotPass_2PageModule,
        ForgotPass_3PageModule,

        /* Paginas relacionadas aos produtos */

        HttpModule,
        IonicStorageModule.forRoot({
            name: 'fashon',
            driverOrder: ['sqlite', 'websql', 'indexeddb']
        }),
        IonicModule.forRoot(Qrgo_prototype, {
            scrollPadding: false,
            scrollAssist: true,
            autoFocusAssist: false } ),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        Qrgo_prototype,
        LoginPage,
        FeedPage
    ],
    providers: [
        ProfileProvider,
        StatusBar,
        SplashScreen,
        SocialSharing,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CategoriaProvider,
        Keyboard,
        CallNumber,
        FileChooser,
        PostProvider,
        Camera,
        ImagePicker,
        File2,
        File,
        FileTransfer

    ],


})
export class AppModule {


}

