import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NotificacaoPage} from './notificacao';
import {SharedModule} from "../../../../../config/share.module";


@NgModule({
    declarations: [
        NotificacaoPage,
    ],
    imports: [
        IonicPageModule.forChild(NotificacaoPage),
        SharedModule

    ],
})
export class NotificacaoPageModule {
}
