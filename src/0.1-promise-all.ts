import { Util } from './util';
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        Util.log('timeout 1');
        resolve(1);
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        Util.log('timeout 2');
        resolve(2);
    }, 5000);
});
Util.log('AQUI');
Promise.all([promise1, promise2])
    .then((data) => {
        console.log(data);
        Util.log('Terminou');
    });