import { NgModule } from '@angular/core';
import { MenuBottomComponent } from './menu-bottom/menu-bottom';
import { QrgoHeaderComponent } from './qrgo-header/qrgo-header';
@NgModule({
	declarations: [
		MenuBottomComponent,
    QrgoHeaderComponent
	],
	imports: [],
	exports: [
		MenuBottomComponent,
    QrgoHeaderComponent
	]
})
export class ComponentsModule {}
