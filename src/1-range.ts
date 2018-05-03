import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';

const source = Observable.range(1, 5);

const subscription = source.subscribe(
    next => console.log('onNext: %s', next),
    error => console.log('onError: %s', error),
    () => console.log('onCompleted')
);