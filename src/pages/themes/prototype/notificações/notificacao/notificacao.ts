import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Constants} from "../../../../../config/Constants";
import { ConexoesPage} from "../conexoes/conexoes"


/**
 * Generated class for the NotificacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-notificacao',
    templateUrl: 'notificacao.html',
})
export class NotificacaoPage {

    public constants = Constants;
    public notification = [
        {
            "Nome": "Victor",
            "Desc": " Kun sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            //Time é a data e horario em string que serão convertidos para Date
            "Time": "2017-12-28T12:55",
            //DateNot é a data atual em string como será exibido se o post é de mais de 24 horas atrás
            "DateNot": "28/12/2017 12:40",
            "Anterior": 0
        },
        {
            "Nome": "Luis",
            "Desc": " Kun sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            "Time": "2017-12-28T12:20",
            "DateNot": "28/12/2017 12:20",
            "Anterior": 0
        },
        {
            "Nome": "Danillo",
            "Desc": " Kun sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            "Time": "2017-12-27T12:00",
            "DateNot": "27/12/2017 12:00",
            "Anterior": 0
        },
        {
            "Nome": "Andre",
            "Desc": " Kun sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            "Time": "2017-12-25T14:40",
            "DateNot": "25/12/2017 14:40",
            "Anterior": 0

        },
    ];
    public date = new Date();
    public con :any = ConexoesPage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        //Inicio do for para calcular quanto a quanto tempo foi feita a notificação
        for (var j = 0; j < this.notification.length; j++) {
            let Not = new Date(this.notification[j].Time);
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
                                this.notification[j].Time = "Agora mesmo"
                            } else {
                                //se foi feito a alguns minutos atras
                                Minute = this.date.getMinutes() - Not.getMinutes();
                                if(Minute == 1){
                                    this.notification[j].Time = 'Há ' + Minute.toString() + " Minuto atrás";
                                }else {
                                    this.notification[j].Time = 'Há ' + Minute.toString() + " Minutos atrás";
                                }
                            }
                        } else {
                            var Hour = this.date.getHours() - Not.getHours();
                            if (Hour == 1) {
                                //se foi feito a menos de uma hr atrás mas for marcado em horas diferentes, fazendo contagem de quantos minutos atrás
                                var MinCalc = 60 - Not.getMinutes();
                                Minute = MinCalc + this.date.getMinutes();
                                if(Minute => 60){
                                    this.notification[j].Time ='Há ' + Hour.toString() + " Hora Atrás";
                                }else {
                                    this.notification[j].Time = 'Há ' + Minute.toString() + " Minutos atrás";
                                }
                            } else {
                                //se foi a algumas hrs atras
                                this.notification[j].Time ='Há ' + Hour.toString() + " Horas Atrás";
                            }
                        }
                    }
                    else{
                        this.notification[j].Anterior = 1;
                        this.notification[j].Time = this.notification[j].DateNot;
                    }

                }
                else{
                    this.notification[j].Anterior = 1;
                    this.notification[j].Time = this.notification[j].DateNot;
                }
            }else{
                this.notification[j].Anterior = 1;
                this.notification[j].Time = this.notification[j].DateNot;
            }
        };
        //Fim do for para calcular quanto a quanto tempo foi feita a notificação
    }

    public conexoes = (() => {

        this.navCtrl.push(ConexoesPage,{},{animate:false});
    })
}
