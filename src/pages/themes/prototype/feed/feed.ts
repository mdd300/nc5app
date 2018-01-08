import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import {Http, Headers, RequestOptions} from "@angular/http";
import * as $ from "jquery";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public constants = Constants;
  public id ;
  public files = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,private transfer: FileTransfer,private file: File) {

      this.id = navParams.get("id");



      let headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
      });
      let options = new RequestOptions({
          headers: headers
      });

      this.http.post(this.constants.api_path + 'manager/comercial/map/getFiles', $.param({'id': this.id, 'like': ''}),options).subscribe(response => {

          var res = (response as any)
          let file  = JSON.parse(res._body);
          this.files = (file.files as any);


      });

  }
    public fileTransfer: FileTransferObject = this.transfer.create();


public download(fileD,fileName) {
    this.fileTransfer.download(fileD, this.file.dataDirectory + fileName).then((entry) => {
        console.log('download complete: ' + entry.toURL());
    }, (error) => {
        // handle error
    });
}
}
