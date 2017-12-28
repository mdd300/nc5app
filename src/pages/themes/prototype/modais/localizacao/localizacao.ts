import {Component} from '@angular/core';
import {IonicPage, Keyboard, NavController, NavParams, ViewController} from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";
import { Http } from '@angular/http';

/**
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-localizacao',
    templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

    public constants = Constants;
    public searchGoogle = [];
    //busca ativa
    public search = false;
    public text = false;
    //array de localização da pagina principal
    public end = this.navParams.get('location');

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public keyboard: Keyboard,
        public viewCtrl: ViewController,
        public http: Http
    ) {}

    //quando o usuario clica no local desejado
    public selectLocation = ((id) => {

        if(id != false){
        //salva o local selecionado na pagina principal
            this.navParams.get('location').push(id);
        }
        //fecha o modal
        this.viewCtrl.dismiss();
    });
    //fecha o modal
    public returnPage = (()=>{
        this.viewCtrl.dismiss();
    });
   
    public deleteSelected = ((id) => {

        for(var i = 0; i <= this.end.length-1; i++){
            //console.log(this.end);
            if (this.end[i].id === id) this.end.splice(i, 1);
        }
    });

    //resultados da localização
    onSearchChange(searchValue: string) {
        //ativa visualização da busca quando houver parametro
        if (searchValue.length > 0) {
            this.search = true;
            //realiza o ajax para api do google
            this.http.get(this.constants.api_autocomplete+'input='+searchValue).subscribe(data => {
                const response = (data as any);
                const objeto_retorno = JSON.parse(response._body);
                //zera o array
                this.searchGoogle = [];
                //calcula quantos itens são retornados
                for(var i =0;i<objeto_retorno.predictions.length;i++){
                    //formata os indices 
                    var objeto_result =
                        {
                            end: objeto_retorno.predictions[i].structured_formatting.main_text,
                            desc: objeto_retorno.predictions[i].description,
                            id: objeto_retorno.predictions[i].id
                        };
                    //adiciona os itens formatados no array
                    this.searchGoogle.push(objeto_result);
                }
               //trata erro no ajax
            }, error => {
                
            });
        }else{
            //desativa o resultado das buscas
            this.search = false;
        }
    }
}
