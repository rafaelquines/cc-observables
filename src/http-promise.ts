import { Util } from './util';
import * as rp from 'request-promise';

function makeRequest() {
    return rp('http://thfservices.totvs.com.br/customer-api/api/v1/customers?pageSize=20&page=1');
}

makeRequest();
Util.log('jfjfjf');