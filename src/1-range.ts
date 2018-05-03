import { Util } from './util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';

const source = Observable.range(1, 5);

const subscription = source.subscribe(
    next => Util.log('onNext:' + next),
    error => Util.log('onError: ' + error),
    () => Util.log('onCompleted'),
);