import { Component } from '@angular/core';
import {Constants} from "../../config/Constants";

/**
 * Generated class for the QrgoHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qr-header',
  templateUrl: 'qrgo-header.html'
})
export class QrgoHeaderComponent {


  public constants = Constants;

  constructor() {}

}
