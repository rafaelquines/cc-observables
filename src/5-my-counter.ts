import { Util } from './util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromEventPattern';
import 'rxjs/add/observable/fromPromise';

class MyCounter {
    oddObserve: Observable<any>;
    evenObserve: Observable<any>;
    primeObserve: Observable<any>;
    oddEmitter: any;
    evenEmitter: any;
    primeEmitter: any;
    counter: number = 0;
    interval: any;
    constructor(private limit: number) {
        this.oddObserve = Observable.create((observer: any) => {
            Util.log('construiu odd');
            this.oddEmitter = observer;
        });
        this.evenObserve = Observable.create((observer: any) => {
            Util.log('construiu even');
            this.evenEmitter = observer;
        });
        this.primeObserve = Observable.create((observer: any) => {
            Util.log('construiu orime');
            this.primeEmitter = observer;
        });
    }

    start() {
        this.interval = setInterval(() => {
            this.counter++;
            if (this.counter % 2 === 0) {
                this.evenEmitter.next(this.counter);
            }

            if (this.counter % 2 !== 0) {
                this.oddEmitter.next(this.counter);
            }

            if (this.isPrime(this.counter)) {
                this.primeEmitter.next(this.counter);
            }

            if (this.counter >= this.limit) {
                this.oddEmitter.complete();
                this.evenEmitter.complete();
                this.primeEmitter.complete();
                clearInterval(this.interval);
            }

        }, 1000);
    }

    onOdd() {
        return this.oddObserve;
    }

    onEven() {
        return this.evenObserve;
    }

    onPrime() {
        return this.primeObserve;
    }

    isPrime(n: number) {
        if (n < 2) return false;
        const q = Math.floor(Math.sqrt(n));
        for (let i = 2; i <= q; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

const myCounter = new MyCounter(10);

myCounter.onEven().subscribe(
    (v) => Util.log('Par: ' + v),
    (err) => Util.log('Erro: ' + err),
    () => Util.log('Terminou par'),
);

myCounter.onOdd().subscribe(
    (v) => Util.log('Ímpar: ' + v),
    (err) => Util.log('Erro: ' + err),
    () => Util.log('Terminou ímpar'),
);

myCounter.onPrime().subscribe(
    (v) => Util.log('Primo: ' + v),
    (err) => Util.log('Erro: ' + err),
    () => Util.log('Terminou primo'),
);

myCounter.start();