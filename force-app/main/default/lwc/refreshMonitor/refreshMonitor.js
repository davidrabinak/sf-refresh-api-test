import { LightningElement } from 'lwc';
import { registerRefreshHandler, unregisterRefreshHandler } from 'lightning/refresh';
 
export default class RefreshMonitor extends LightningElement {
    refreshHandlerID;
    connectedCallback() {
       this.refreshHandlerID = registerRefreshHandler(this, this.refreshHandler);
       console.log('registerRefreshHandler');
    }
    disconnectedCallback() {
        unregisterRefreshHandler(this.refreshHandlerID);
        console.log('unregisterRefreshHandler');
    }
    refreshHandler() {
        console.log('refreshHandler');
    }
 
}
