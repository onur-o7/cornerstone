import PageManager from './page-manager';

export default class Global extends PageManager {
    onReady() {
        console.log('super-light is ready');
    }
}
