import { NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ExplorePage} from './explore';
import {SharedModule} from "../../../../config/share.module";

@NgModule({
    declarations: [
        ExplorePage
    ],
    imports: [
        IonicPageModule.forChild(ExplorePage),
        SharedModule
    ]

})
export class ExplorePageModule {
}
