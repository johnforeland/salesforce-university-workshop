import { LightningElement, track, api, wire } from 'lwc';
import { getRecord, updateRecord, getFieldValue } from 'lightning/uiRecordApi';
import LIKE_FIELD from '@salesforce/schema/Account.Likes__c';

export default class Oppgave1 extends LightningElement {

    @api recordId;

    // hente data
    @wire(getRecord, { recordId: '$recordId', fields: [LIKE_FIELD] })
    account;

    get getCurrentLikes() {
        return getFieldValue(this.account.data, LIKE_FIELD);
    }

    // send inn endring ved trykk på knapp
    handleClick(event) {
        const fields = {};
        fields['Id'] = this.recordId;
        fields['Likes__c'] = getFieldValue(this.account.data, LIKE_FIELD) + 1;
        const recordInput = { fields };
        updateRecord(recordInput);
    }

}