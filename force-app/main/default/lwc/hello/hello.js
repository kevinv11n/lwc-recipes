import { LightningElement } from 'lwc';
import throwAuraException from '@salesforce/apex/ContactController.getContactList';
import throwAuraHandledException from '@salesforce/apex/ContactController.getContactList';
import throwBuiltInException from '@salesforce/apex/ContactController.getContactList';
import throwMyException from '@salesforce/apex/ContactController.getContactList';

export default class Hello extends LightningElement {
    error;

    getApexFunction(event) {
        if (event.target.label === 'throwAuraHandledException') {
            return throwAuraHandledException;
        } else if (event.target.label === 'throwBuiltInException') {
            return throwBuiltInException;
        } else if (event.target.label === 'throwMyException') {
            return throwMyException;
        }
        return throwAuraException;
    }

    handleLoad(event) {
        const message = this.template.querySelector('lightning-input').value;
        const fn = this.getApexFunction(event);
        fn(message)
            .then(() => {
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
            });
    }

    get lastError() {
        return this.error ? JSON.stringify(this.error, null, 2) : '';
    }
}
