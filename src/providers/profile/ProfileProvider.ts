import { Injectable } from '@angular/core';

Injectable()
export class ProfileProvider{

    private _values:any = {
        'ownProfile': true,
        'seenProfile': false
    };

    public get = ((value:string):any  => {

        switch( value ){
            case 'ownProfile':
                return this._values.ownProfile;
            case 'seenProfile':
                return this._values.seenProfile;
            default:
                break;
        }

    });

    /**
     * Função utilizada para definir um valor padrõa aos valores internos do provider */
    public set = (( field:string , value:any ):void => {
        /* Inicia um bloco de condicionais para verificar qual o valor que deve ser alterado */
        /* Cada case é um indice da variável "_values" */
        switch( field ){
            case 'ownProfile':
                this._values.ownProfile = value;
                break;
            case 'seenProfile':
                this._values.seenProfile = value;
                break;
            default:
                break;
        }/* Fim do bloco de condicionais  */

    }); /* Fim da função utilizada para definir um valor padrão para os valores internos do provider */




}