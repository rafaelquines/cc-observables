import { Util } from './util';
import 'zone.js';
import 'reflect-metadata';
import { HttpClient, createHttpClient, HttpErrorResponse } from 'node-angular-http-client';

const httpClient: HttpClient = createHttpClient();

const makeRequest = () => {
    return httpClient.get('http://thfservices.totvs.com.br/customer-api/api/v1/custojjmers?pageSize=20&page=1');
};

makeRequest().subscribe((res) => {
    console.log(res.body);
},
(err: HttpErrorResponse) => {
    Util.log('deu erro');
    console.log(err);
});