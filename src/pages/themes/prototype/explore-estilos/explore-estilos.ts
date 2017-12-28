import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ExploreEstilosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-explore-estilos',
    templateUrl: 'explore-estilos.html',
})
export class ExploreEstilosPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController
    ) {}

    public estilos = [
        {estilo: 'Feminino', 'class': 'pink'},
        {estilo: 'Masculino', 'class': 'brown'},
        {estilo: 'Infantil', 'class': 'purple'},
        {estilo: 'Casual', 'class': 'purple'},
        {estilo: 'Social', 'class': 'purple'},
        {estilo: 'Festa', 'class': 'blue'},
        {estilo: 'Camisas', 'class': 'blue'},
        {estilo: 'Casacos e Jaquetas', 'class': 'green'},
        {estilo: 'Calçãs', 'class': 'green'},
        {estilo: 'Jaquetas', 'class': 'wine'},
        {estilo: 'Coletes', 'class': 'grey'},
        {estilo: 'Blazer', 'class': 'purple'},
        {estilo: 'Trench Coat', 'class': 'blue'},
        {estilo: 'Jeans', 'class': 'blue'},
        {estilo: 'Moda Praia', 'class': 'brown'},
        {estilo: 'Saias', 'class': 'brown'},
        {estilo: 'Esportivo', 'class': 'purple'},
        {estilo: 'Coleções', 'class': 'blue'},
        {estilo: 'Modelagem', 'class': 'brown'},
        {estilo: 'Macacão e Jardineira', 'class': 'brown'},
        {estilo: 'Alfaiataria', 'class': 'brown'},
        {estilo: 'Feminino', 'class': 'pink'},
        {estilo: 'Masculino', 'class': 'pink'},
        {estilo: 'Social', 'class': 'pink'}

    ];
    /* End of Estilos */

    /**
     * Variável "selecteds" comentada... mater assim no momento.
     * Ela será utilizada para dar .push nos ID's dos itens selecionados */
    //private selecteds = [];

    /**
     * Função utilizada para verificar se o elemento de estilo está selecionado ou não
     * @type {($event: any) => void} */
    public selectStyle = (($event: any): void => {

        let $element = $event.toElement;
        let _classes = $element.className;
        let classes = _classes.split(" ");
        let hasClass = classes.indexOf('selected');

        /* Verifica se o Elemento possui ou não a classe de selecionado */
        if (hasClass == -1) {
            /* Caso o elemento não tenha a classe de selecionado */
            /* Adiciona a classe de selecionado */
            $element.className += " selected";

        } else {
            /* Caso o elemento já possua a classe de Selecionado */
            /* Remove a classe de selecionado */
            let newClass = _classes.replace("selected", "");
            $element.className = newClass;

        }
        /* Fim da verificação de classe de selecionada no elemento */

    });
    /* Fim da função de clique no elemento de estilo */

    /**
     * Função utilizada para confirmar as seleções do modal, e fecha-lo
     * @type {() => any} */
    public confirmModal = (() => {
        this.viewCtrl.dismiss();
    }); /** Fim da função utilizada para salvar as seleções do modal */

    /**
     * Função utilizada para fechar o modal */
    public closeModal = (()=>{
        this.viewCtrl.dismiss();
    });/* Fim da função utilizada para fechar o modal */

}
