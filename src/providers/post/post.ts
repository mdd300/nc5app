import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Constants} from "../../config/Constants";
import {Storage} from '@ionic/storage';
import * as $ from "jquery";
/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

    public constants: any = Constants;

    constructor(public http: Http,
                public storage: Storage) {
    }

    getPosts(access) {
        return this.http.post(this.constants.api_path + 'post', $.param(access));
    }
}
