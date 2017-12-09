import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
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
    public intActived: number = 0;
    public show8 = false;
    public a = 0;
    public estilos = [
        {
            id: '1',
            nome: "VERÃO",
        },
        {
            id: '2',
            nome: "INVERNO",
        },
        {
            id: '3',
            nome: "JEANS",
        },
        {
            id: '4',
            nome: "SPORT",
        },
        {
            id: '5',
            nome: "CASAMENTO",
        },
        {
            id: '6',
            nome: "FEMININO",
        },
        {
            id: '7',
            nome: "GRUNGE",
        },
        {
            id: '8',
            nome: "MASCULINO",
        }, {
            id: '9',
            nome: "ROUPAS EM PROMOÇÃO",
        },
        {
            id: '10',
            nome: "CASUAL",
        }
    ];
    public subEstilo = [
        {1:[{
            id: '11',
            nome: "CALÇA",
            idEstilo: '1'
        },
        {
            id: '12',
            nome: "CAMISA",
            idEstilo: '1'
        },
        {
            id: '13',
            nome: "BLUSA",
            idEstilo: '1'

        }],
        8:[{
            id: '14',
            nome: "CALÇA",
            idEstilo: '8'
        },
        {
            id: '15',
            nome: "CAMISA",
            idEstilo: '8'
        },
        {
            id: '16',
            nome: "BLUSA",
            idEstilo: '8'
        }]}
    ];
    public rowNum = 0; //counter to iterate over the rows in the grid
    public grid = [];
    public colNum = [];


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,) {
        this.teste();
    }

    public teste() {
        var i = 0;
        while (i < this.estilos.length) {
            this.grid[this.a] = [];
            for (var j = 0; j < 3; j++) {

                if (!this.estilos[i]) {
                    j = 3;
                } else {
                    if (this.estilos[i].nome.length > 11) {
                        if(j == 2) {
                            this.a++;
                            j++;
                        }else if(j == 0) {
                            this.grid[this.a][j] = [];

                            this.grid[this.a][j].push(this.estilos[i]);
                            j++;
                            i++;

                        } else{
                            this.grid[this.a][j] = [];

                            this.grid[this.a][j].push(this.estilos[i]);
                            this.a++;
                            j++;
                            i++;
                        }
                    } else {
                        this.grid[this.a][j] = [];

                        this.grid[this.a][j].push(this.estilos[i]);
                        this.rowNum++;
                        i++;
                        if (j == 2) {
                            this.a++
                        }
                    }
                }
            }
            // }
        }
        for (var b = 0; b <= this.a; b++) {
            this.colNum.push(b);
        }
    };

    public closeMeModal = (() => {
        if (this.actived.length > 0)
            this.viewCtrl.dismiss();
    });

    public defineActived = ((data) => {
        /* Define o ID do perfil selecionado */
        if (this.actived.indexOf(data) === -1) {

            this.actived.push(data);
            this.intActived += 1;


            if (this.intActived == 5) {
                this.intActived = 1;
            }
            if (this.intActived == 1) {
                this.actived1.push(data)
            } else if (this.intActived == 2) {
                this.actived2.push(data)
            } else if (this.intActived == 3) {
                this.actived3.push(data)
            } else if (this.intActived == 4) {
                this.actived4.push(data)
            }

        } else {

            this.actived.splice(this.actived.indexOf(data), 1);
            if (this.actived1.indexOf(data) > -1) {
                this.actived1.splice(this.actived1.indexOf(data), 1);
            } else if (this.actived2.indexOf(data) > -1) {
                this.actived2.splice(this.actived2.indexOf(data), 1);
            } else if (this.actived3.indexOf(data) > -1) {
                this.actived3.splice(this.actived3.indexOf(data), 1);
            } else if (this.actived4.indexOf(data) > -1) {
                this.actived4.splice(this.actived4.indexOf(data), 1);
            }

        }
    });
    /* Fim da função de definição do perfil selecionado */

}
