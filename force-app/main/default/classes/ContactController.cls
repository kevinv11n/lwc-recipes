public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [
            SELECT Id, Name, Title, Phone, Email, Picture__c
            FROM Contact
            WHERE Picture__c != null
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Title, Phone, Email, Picture__c
            FROM Contact
            WHERE Name LIKE :key AND Picture__c != null
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }

    @AuraEnabled(cacheable=true)
    public static Contact getSingleContact() {
        return [
            SELECT Id, Name, Title, Phone, Email, Picture__c
            FROM Contact
            WITH SECURITY_ENFORCED
            LIMIT 1
        ];
    }

    @AuraEnabled
    public static Contact throwForMe(String message) {
        throw new AuraException('Custom message: ' + message);
    }

    public class MyException extends Exception {
    }

    @AuraEnabled
    public static Contact throwAuraException(String message) {
        throw new AuraException('Custom message: ' + message);
    }

    @AuraEnabled
    public static Contact throwAuraHandledException(String message) {
        throw new AuraHandledException('Custom message: ' + message);
    }

    @AuraEnabled
    public static Contact throwBuiltInException(String message) {
        throw new DmlException('Custom message: ' + message);
    }

    @AuraEnabled
    public static Contact throwMyException(String message) {
        throw new MyException('Custom message: ' + message);
    }
}
