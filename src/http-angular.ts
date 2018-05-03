import { Util } from './util';
import 'zone.js';
import 'reflect-metadata';
import { HttpClient, createHttpClient } from 'node-angular-http-client';

const httpClient: HttpClient = createHttpClient();

const makeRequest = () => {
    return httpClient.get('http://thfservices.totvs.com.br/customer-api/api/v1/customers?pageSize=20&page=1',
        { observe: 'response' });
};

makeRequest().subscribe((res) => {
    Util.log(res);
    Util.log('Status: ' + res.status + ' ' + res.statusText);
});