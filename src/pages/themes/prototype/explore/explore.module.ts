import { NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ExplorePage} from './explore';
import {MenuBottomComponent} from "../../../../components/menu-bottom/menu-bottom";

@NgModule({
    declarations: [
        ExplorePage,
        MenuBottomComponent
    ],
    imports: [
        IonicPageModule.forChild(ExplorePage),
    ]

})
export class ExplorePageModule {
}
