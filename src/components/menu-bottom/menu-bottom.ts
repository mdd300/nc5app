import { Component, Input } from '@angular/core';
import {Constants} from "../../config/Constants";

/**
 * Generated class for the MenuBottomComponent component.
 *
 * Componente utilizado para manter o template do menu bottom padronizado
 * Criação do menu fixo inferior
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'fixed-menu',
  templateUrl: 'menu-bottom.html'
})
export class MenuBottomComponent {

  @Input() page: string;

  public constants = Constants;

  constructor() {}


}
