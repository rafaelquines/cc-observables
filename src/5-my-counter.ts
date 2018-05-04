import { Util } from './util';
import { Observable } from 'rxjs/Observable';
import {filter} from 'rxjs/operators';
import "rxjs/add/operator/publish";

class MyCounter {
    oddObserve: Observable<any>;
    evenObserve: Observable<any>;
    primeObserve: Observable<any>;
    observe: Observable<any>;
    emitter: any;
    counter: number = 0;
    interval: any;
    constructor(private limit: number) {
        this.observe = Observable.create((observer: any) => {
            this.emitter = observer;
        }).publish().refCount();
        this.oddObserve = this.observe.pipe(filter(num => num % 2 !== 0));
        this.evenObserve = this.observe.pipe(filter(num => num % 2 === 0));
        this.primeObserve = this.observe.pipe(filter(this.isPrime));
    }

    start() {
        this.interval = setInterval(() => {
            this.counter++;
            this.emitter.next(this.counter);
            if (this.counter >= this.limit){
                this.emitter.complete();
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