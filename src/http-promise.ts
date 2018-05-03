import { Util } from './util';
import * as rp from 'request-promise';

function makeRequest() {
    return rp('http://thfservices.totvs.com.br/customer-api/api/v1/customers?pageSize=20&page=1');
}

makeRequest()
.then((data) => {
    // tslint:disable-next-line:no-console
    Util.log('Clientes lenght: ' + data.length);
});