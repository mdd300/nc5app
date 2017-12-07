import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Constants} from "../../../../config/Constants";

/**
 * Generated class for the GostosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gostos',
  templateUrl: 'gostos.html',
})
export class GostosPage {

    public constants = Constants;
    public actived = [];
    public actived1 = [];
    public actived2 = [];
    public actived3 = [];
    public actived4 = [];
    public activetype: string;
    public intActived: number = 0;
    public show8 = false;


    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController
  ) {}

  public closeMeModal = (()=>{
      this.viewCtrl.dismiss();
  });

    public defineActived = ((data) => {
        /* Define o ID do perfil selecionado */
        if(this.actived.indexOf(data) === -1) {

            this.actived.push(data);
            this.intActived += 1;


            if (this.intActived == 5) {
                this.intActived = 1;
            }
            if(this.intActived == 1){
                this.actived1.push(data)
            }else if(this.intActived == 2){
                this.actived2.push(data)
            }else if(this.intActived == 3){
                this.actived3.push(data)
            }else if(this.intActived == 4){
                this.actived4.push(data)
            }




        }else{

            this.actived.splice(this.actived.indexOf(data), 1);

        }
    });/* Fim da função de definição do perfil selecionado */

}
