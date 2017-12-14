import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the CategoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriaProvider {
  private baseApiPath = 'http://localhost/fashon/qrgo/categorias/estilos';

  constructor(public http: Http) {}

  getCategorias()
  {
    return this.http.get(this.baseApiPath);
  }
}
