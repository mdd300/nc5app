import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constants} from "../../../../config/Constants";
import { Keyboard } from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

    public constants = Constants;
    public text = false;
    @ViewChild('textInput') textInput;

    constructor(public navCtrl: NavController, public navParams: NavParams, public keyboard: Keyboard) {
  }

    public onBlur = ( ()=>{

        this.text = false;

    });

    public onFocus = ( ()=>{

        this.text = true;

    });

    public eventHandler = ( (num, target)=>{

        if(num == 13) {
            this.text = false;
            let activeElement = <HTMLElement>document.activeElement;
            activeElement && activeElement.blur && activeElement.blur();
            this.keyboard.close();
        }
    });


}
