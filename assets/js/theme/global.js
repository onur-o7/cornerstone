import PageManager from './page-manager'
export default class Global extends PageManager {
    onReady() {
        const context = this.context
        console.log('Context', context)
    }
}
