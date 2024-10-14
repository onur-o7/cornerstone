export default class PageManager {
    constructor(context) {
        this.context = context
    }

    type() {
        return this.constructor.name
    }

    onReady() {}

    static load(context) {
        const page = new this(context)
        // alternative to DOMContentLoaded
        document.onreadystatechange = function () {
            if (document.readyState == 'interactive') {
                // Initialize your application or run some code.
                page.onReady.bind(page)()
            }
        }
    }
}
