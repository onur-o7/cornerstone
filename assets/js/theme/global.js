import 'focus-within-polyfill';
import PageManager from './page-manager';

import svgInjector from './global/svg-injector';

export default class Global extends PageManager {
    onReady() {
        const {
            channelId, cartId, secureBaseUrl,
        } = this.context;
        console.log(`${channelId}, ${cartId}, ${secureBaseUrl}`);
        svgInjector();
    }
}
