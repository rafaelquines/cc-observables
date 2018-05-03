import { Util } from './util';

function createPromise(timeout) {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            Util.log('dentro do setTimeout');
            resolve(654);
        }, timeout);
        // tslint:disable-next-line:no-console
        Util.log('Passou do setTimeout');
    });
    return myPromise;
}

// function callNormalPromise() {
//     // tslint:disable-next-line:no-console
//     return createPromise(3000).then((n) => Util.log('THEN: n'));
// }

// async function callPromise() {
//     return await createPromise(3000);
// }

createPromise(3000)
.then((n) => {
    Util.log("Estou no then: " + n);
});

Util.log("Estou no main");

// const e = callNormalPromise();
// // tslint:disable-next-line:no-console
// Util.log(e);