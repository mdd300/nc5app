import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Constants} from "../../config/Constants";

/*
  Generated class for the CategoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriaProvider {
  public constants: any = Constants;

  constructor(public http: Http) {}

  getCategorias()
  {
    return this.http.get(this.constants.api_path + 'categorias/estilos/');
  }

  setCategorias(body)
  {
    return this.http.post(this.constants.api_path + 'categorias/estilos/create', {body});
  }

  getCategoriasSelecionadas()
  {
    return this.http.get(this.constants.api_path + 'categorias/estilos/categories_selected');
  }

}
