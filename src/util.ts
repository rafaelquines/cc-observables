export class Util {
    static log(msg) {
        // tslint:disable-next-line:no-console
        console.log('[' + new Date().toISOString() + ']: ', msg);
    }
}