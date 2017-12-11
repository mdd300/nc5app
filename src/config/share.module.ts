import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MenuBottomComponent} from "../components/menu-bottom/menu-bottom";
import {QrgoHeaderComponent} from "../components/qrgo-header/qrgo-header";

@NgModule({
    imports: [
        IonicPageModule.forChild(MenuBottomComponent),
        IonicPageModule.forChild(QrgoHeaderComponent)
    ],
    declarations: [
        MenuBottomComponent,
        QrgoHeaderComponent
    ],
    exports: [
        MenuBottomComponent,
        QrgoHeaderComponent
    ]
}) export class SharedModule {}