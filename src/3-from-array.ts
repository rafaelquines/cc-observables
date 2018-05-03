import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

const array = [1, 2, 3, 4, 5];
const source = Observable.from(array);

source.subscribe(
    x => console.log('onNext: %s', x),
    e => console.log('onError: %s', e),
    () => console.log('onCompleted'));