import { Util } from './util';
import {Observable} from 'rxjs/Observable';

// var arr = ['a', 'b', 'c'];

// function soma(a, b) {
//     return a + b;
// }

// const soma = (a, b) => a + b;

// var that = this;
// Promise.then(function () {
//     that.nome = qq
// }

// class MinhaClasse {
//     private codigo: number;
//     private nome: string;

//     function codigomaisnome() {
//         return this.codigo + ' - ' + this.nome;
//     }

//     codigomaisnomearrow = () => {
//         return this.codigo + ' - ' + this.nome;
//     }

// }

const data = new Observable(observer => {
    setTimeout(() => {
        observer.next(41);
    }, 1000);

    setTimeout(() => {
        observer.next(42);
    }, 2000);

    // setTimeout(() => {
    //     observer.error("Erro simulado");
    // }, 2000)

    setTimeout(() => {
        observer.next(43);
        observer.complete();
    }, 3000);
    Util.log('Observable iniciado');
});

data.subscribe(
    value => {
        Util.log('Recebi: ' + value);
    },
    error => {
        Util.log('ERROR: ' + error);
    },
    () => {
        Util.log('FIM');
    },
);