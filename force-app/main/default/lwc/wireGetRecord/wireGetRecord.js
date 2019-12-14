import { LightningElement, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireGetRecord extends LightningElement {
    @track received = [];
    recordId;
    fields;
    optionalFields;

    @wire(getRecord, { recordId: '$recordId', fields: '$fields', optionalFields: '$optionalFields' })
    onRecord(value) {
        this.received.push({
            request: {
                recordId: this.recordId,
                fields: this.fields,
                optionalFields: this.optionalFields
            },
            response: value
        })
    }

    setValue(el) {
        let coerced;
        if (el.value !== '') {
            if (el.dataset.type === 'array') {
                coerced = el.value.split(',');
            } else {
                coerced = el.value;
            }
        }
        this[el.dataset.id] = coerced;
    }

    handleRequestClick() {
        this.template.querySelectorAll('lightning-input').forEach(el => this.setValue(el));
    }

    handleClearClick() {
       this.received = [];
    }

    get receivedStr() { 
        return this.received.reduce((acc, current) => {
            return acc + '\n\n' + JSON.stringify(current, null, 2);
        }, '');
    }
}
