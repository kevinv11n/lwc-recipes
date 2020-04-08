import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import BILLING_ADDRESS from '@salesforce/schema/Account.BillingAddress';
import BILLING_CITY_FIELD from '@salesforce/schema/Account.BillingCity';
import BILLING_COUNTRY_FIELD from '@salesforce/schema/Account.BillingCountry';
import BILLING_GEOCODE_ACCURACY_FIELD from '@salesforce/schema/Account.BillingGeocodeAccuracy';
import BILLING_LATITUDE_FIELD from '@salesforce/schema/Account.BillingLatitude';
import BILLING_LONGITUDE_FIELD from '@salesforce/schema/Account.BillingLongitude';
import BILLING_POSTAL_CODE_FIELD from '@salesforce/schema/Account.BillingPostalCode';
import BILLING_STATE_FIELD from '@salesforce/schema/Account.BillingState';
import BILLING_STREET_FIELD from '@salesforce/schema/Account.BillingStreet';

export default class Hello extends LightningElement {
    greeting = 'World';
    recordId = '001R000001W8zSqIAJ';

    // @wire(getRecord, {
    //     recordId: '$recordId',
    //     fields: [BILLING_ADDRESS]
    // })
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [
            BILLING_CITY_FIELD,
            BILLING_COUNTRY_FIELD,
            BILLING_GEOCODE_ACCURACY_FIELD,
            BILLING_LATITUDE_FIELD,
            BILLING_LONGITUDE_FIELD,
            BILLING_POSTAL_CODE_FIELD,
            BILLING_STATE_FIELD,
            BILLING_STREET_FIELD
        ]
    })
    wiredRecord(value) {
        console.log('wiredRecord', value.data, value.error);
        debugger;
    }
}
