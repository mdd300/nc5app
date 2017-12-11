import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello QrgoHeaderComponent Component');
    this.text = 'Hello World';
  }

}
