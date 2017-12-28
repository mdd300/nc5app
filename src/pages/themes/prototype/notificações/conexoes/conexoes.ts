import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NotificacaoPage} from "../notificacao/notificacao";
import {Constants} from "../../../../../config/Constants";


/**
 * Generated class for the ConexoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-conexoes',
    templateUrl: 'conexoes.html',
})
export class ConexoesPage {

    public constants = Constants;
    public conexao = [
        {
            "Nome": "Victor",
            "Time": "2017-12-28T13:00",
            "DateNot": "28/12/2017 13:00"
        },
        {
            "Nome": "Luis",
            "Time": "2017-12-27T12:20",
            "DateNot": "27/12/2017 12:20"

        },
        {
            "Nome": "Danillo",
            "Time": "2017-12-27T12:00",
            "DateNot": "27/12/2017 12:00"
        },
        {
            "Nome": "Andre",
            "Time": "2017-12-25T14:40",
            "DateNot": "25/12/2017 14:40"
        },
    ];
    public date = new Date();

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        //Inicio do for para calcular quanto a quanto tempo foi feita a notificação
        for (var j = 0; j < this.conexao.length; j++) {
            let Not = new Date(this.conexao[j].Time);
            var Minute
            //verificando ano
            if (this.date.getFullYear() == Not.getFullYear()) {
                //verificando mês
                if (this.date.getMonth() == Not.getMonth()) {
                    //verificando dia
                    if (this.date.getDate() == Not.getDate()) {
                        //verificando hora
                        if (this.date.getHours() == Not.getHours()) {
                            //verificando minutos
                            if (this.date.getMinutes() == Not.getMinutes()) {
                                //se foi feito agr
                                this.conexao[j].Time = "Agora mesmo"
                            } else {
                                //se foi feito a alguns minutos atras
                                Minute = this.date.getMinutes() - Not.getMinutes();
                                if(Minute == 1){
                                    this.conexao[j].Time = 'Há ' + Minute.toString() + " Minuto atrás";
                                }else {
                                    this.conexao[j].Time = 'Há ' + Minute.toString() + " Minutos atrás";
                                }
                            }
                        } else {
                            var Hour = this.date.getHours() - Not.getHours();
                            if (Hour == 1) {
                                //se foi feito a menos de uma hr atrás mas for marcado em horas diferentes, fazendo contagem de quantos minutos atrás
                                var MinCalc = 60 - Not.getMinutes();
                                Minute = MinCalc + this.date.getMinutes();
                                if(Minute => 60){
                                    this.conexao[j].Time ='Há ' + Hour.toString() + " Hora Atrás";
                                }else {
                                    this.conexao[j].Time = 'Há ' + Minute.toString() + " Minutos atrás";
                                }
                            } else {
                                //se foi a algumas hrs atras
                                this.conexao[j].Time ='Há ' + Hour.toString() + " Horas Atrás";
                            }
                        }
                    }
                    else{
                        this.conexao[j].Time = this.conexao[j].DateNot;
                    }

                }
                else{
                    this.conexao[j].Time = this.conexao[j].DateNot;
                }
            }else{
                this.conexao[j].Time = this.conexao[j].DateNot;
            }
        };
        //Fim do for para calcular quanto a quanto tempo foi feita a notificação
    }

    public atividades = (() => {

        this.navCtrl.push(NotificacaoPage,{},{animate:false});
    })

}
