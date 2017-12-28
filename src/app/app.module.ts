import { BrowserModule} from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen} from '@ionic-native/splash-screen';
import { StatusBar} from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { Qrgo_prototype} from './app.component';
import { SlidesPage} from "../pages/themes/prototype/slides/slides";
import { SlidesPageModule} from "../pages/themes/prototype/slides/slides.module";
import { LoginPageModule} from "../pages/themes/prototype/login/login.module";
import { Step1PageModule} from "../pages/themes/prototype/cadastro/step1/step1.module";
import { Step2PageModule} from "../pages/themes/prototype/cadastro/step2/step2.module";
import { Step3PageModule} from "../pages/themes/prototype/cadastro/step3/step3.module";
import { ConfirmCadPageModule} from "../pages/themes/prototype/cadastro/confirm-cad/confirm-cad.module";
import { ExplorePageModule} from "../pages/themes/prototype/explore/explore.module";
import { GostosPageModule} from "../pages/themes/prototype/modais/gostos/gostos.module";
import { LocalizacaoPageModule} from "../pages/themes/prototype/modais/localizacao/localizacao.module";
import { FeedPageModule} from "../pages/themes/prototype/feed/feed.module";
import { PostPageModule} from "../pages/themes/prototype/modais/post/post.module";
import { NotificacaoPageModule} from "../pages/themes/prototype/notificações/notificacao/notificacao.module"
import { ConexoesPageModule} from "../pages/themes/prototype/notificações/conexoes/conexoes.module"
import { LoginPage} from "../pages/themes/prototype/login/login";
import { SystemTabsPageModule} from "../pages/themes/prototype/system-tabs/system-tabs.module";
import { SystemTabsPage} from "../pages/themes/prototype/system-tabs/system-tabs";
import { HttpModule} from '@angular/http';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { SocialSharing} from "@ionic-native/social-sharing";
import { ForgotPass_1PageModule} from "../pages/themes/prototype/forgot-pass/forgot-pass-1/forgot-pass-1.module";
import { ForgotPass_2PageModule} from "../pages/themes/prototype/forgot-pass/forgot-pass-2/forgot-pass-2.module";
import { ForgotPass_3PageModule} from "../pages/themes/prototype/forgot-pass/forgot-pass-3/forgot-pass-3.module";
import { IonicStorageModule} from '@ionic/storage';
import { FileChooser } from '@ionic-native/file-chooser';
import { ExploreEstilosPageModule} from "../pages/themes/prototype/explore-estilos/explore-estilos.module";
import { ProfilePageModule} from "../pages/themes/prototype/profile/profile.module";
import { PostProvider } from '../providers/post/post';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import {File as File2} from "@ionic-native/file";
import {ProfileConfigPageModule} from "../pages/themes/prototype/profile-config/profile-config.module";
import {CallNumber} from "@ionic-native/call-number";
import {ProfileProvider} from "../providers/profile/ProfileProvider";
import {ProductProfilePageModule} from "../pages/themes/prototype/produtos/product-profile/product-profile.module";

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
        NotificacaoPageModule,
        ConexoesPageModule,

        ExplorePageModule,
        ExploreEstilosPageModule,

        GostosPageModule,
        FeedPageModule,
        /* Páginas relacionadas ao Perfil */
        ProfilePageModule,
        ProfileConfigPageModule,
        /* Paginas relacionadas ao sistema */
        PostPageModule,
        SystemTabsPageModule,
        LocalizacaoPageModule,
        /* Paginas relacionadas ao processo de recuperação de senha */
        ForgotPass_1PageModule,
        ForgotPass_2PageModule,
        ForgotPass_3PageModule,
        /* Paginas relacionadas aos produtos */
        ProductProfilePageModule,
        
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
        SlidesPage,
        LoginPage,
        SystemTabsPage
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
        File2
    ],


})
export class AppModule {


}

