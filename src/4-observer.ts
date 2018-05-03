import { Util } from './util';
import {Observable} from 'rxjs/Observable';

// var arr = ['a', 'b', 'c'];

const data = new Observable(observer => {
    setTimeout(() => {
        observer.next(42);
    }, 1000);

    setTimeout(() => {
        observer.next(43);
    }, 1000);

    // setTimeout(() => {
    //     observer.error("Erro simulado");
    // }, 2000)

    setTimeout(() => {
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