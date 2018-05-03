import { Util } from './util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/timestamp';
import 'rxjs/add/operator/take';

const source = Observable.timer(
    5000, /* 5 seconds */
    1000 /* 1 second */)
    .timestamp().take(5);

source.subscribe(x => Util.log(x));