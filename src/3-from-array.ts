import { Util } from './util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

const array = [1, 2, 3, 4, 5];
const source = Observable.from(array);

source.subscribe(
    x => Util.log('onNext: ' + x),
    e => Util.log('onError: ' + e),
    () => Util.log('onCompleted'));