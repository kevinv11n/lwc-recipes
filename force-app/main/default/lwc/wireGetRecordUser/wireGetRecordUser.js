import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';

// User.Place_of_birth__c is a custom field of type Geolocation
// It's not yet possible to import it from @salesforce/schema.
// As a stop-gap one may access it using this string syntax below.
const PLACE_OF_BIRTH_LAT_FIELD = 'User.Place_of_birth__Latitude__s';
const PLACE_OF_BIRTH_LON_FIELD = 'User.Place_of_birth__Longitude__s';

const fields = [
    NAME_FIELD,
    EMAIL_FIELD,
    PLACE_OF_BIRTH_LAT_FIELD,
    PLACE_OF_BIRTH_LON_FIELD
];

export default class WireGetRecordUser extends LightningElement {
    userId = Id;

    @wire(getRecord, { recordId: '$userId', fields })
    user;

    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }

    get email() {
        return getFieldValue(this.user.data, EMAIL_FIELD);
    }

    get placeOfBirth() {
        const lat = getFieldValue(this.user.data, PLACE_OF_BIRTH_LAT_FIELD);
        const lon = getFieldValue(this.user.data, PLACE_OF_BIRTH_LON_FIELD);
        return `${lat}, ${lon}`;
    }
}
