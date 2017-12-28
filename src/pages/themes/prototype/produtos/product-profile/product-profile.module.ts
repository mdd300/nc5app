import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductProfilePage } from './product-profile';

@NgModule({
  declarations: [
    ProductProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductProfilePage),
  ],
})
export class ProductProfilePageModule {}
