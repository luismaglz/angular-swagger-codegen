/**
 * API - Current Routes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: trunk
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PersonAddress } from './personAddress';
import { PersonAlias } from './personAlias';
import { PersonBasicInformation } from './personBasicInformation';
import { PersonComment } from './personComment';
import { PersonCustomerProgram } from './personCustomerProgram';
import { PersonEmail } from './personEmail';
import { PersonName } from './personName';
import { PersonPhoneNumber } from './personPhoneNumber';
import { PersonPreference } from './personPreference';
import { PersonStoredPayment } from './personStoredPayment';
import { PersonTravelDocument } from './personTravelDocument';


/**
 * Defines a person.
 */
export interface Person { 
    /**
     * The unique person key.
     */
    personKey?: string;
    /**
     * The persons true name.
     */
    name: PersonName;
    /**
     * The unique person customer number.
     */
    customerNumber?: string;
    /**
     * The type of person.
     */
    type?: Person.TypeEnum;
    /**
     * The collection of registered email address.
     */
    emailAddresses?: Array<PersonEmail>;
    /**
     * The status of the person.
     */
    status?: Person.StatusEnum;
    /**
     * The collection of registered phone numbers.
     */
    phoneNumbers?: Array<PersonPhoneNumber>;
    /**
     * The person's basic information.
     */
    details?: PersonBasicInformation;
    /**
     * The collection of known addresses.
     */
    addresses?: Array<PersonAddress>;
    /**
     * The person's notification preference.
     */
    notificationPreference?: Person.NotificationPreferenceEnum;
    /**
     * The collection of registered stored payments.
     */
    storedPayments?: Array<PersonStoredPayment>;
    /**
     * The collection of registered travel documents.
     */
    travelDocuments?: Array<PersonTravelDocument>;
    /**
     * The collection of enrolled customer programs.
     */
    programs?: Array<PersonCustomerProgram>;
    /**
     * The collection of comments.
     */
    comments?: Array<PersonComment>;
    /**
     * The collection of preferences.
     */
    preferences?: Array<PersonPreference>;
    /**
     * The collection of alternate names for the person.
     */
    aliases?: Array<PersonAlias>;
}
export namespace Person {
    export type TypeEnum = 'None' | 'Customer' | 'Agent';
    export const TypeEnum = {
        None: 'None' as TypeEnum,
        Customer: 'Customer' as TypeEnum,
        Agent: 'Agent' as TypeEnum
    };
    export type StatusEnum = 'Active' | 'Terminated' | 'Suspended';
    export const StatusEnum = {
        Active: 'Active' as StatusEnum,
        Terminated: 'Terminated' as StatusEnum,
        Suspended: 'Suspended' as StatusEnum
    };
    export type NotificationPreferenceEnum = 'None' | 'Promotional';
    export const NotificationPreferenceEnum = {
        None: 'None' as NotificationPreferenceEnum,
        Promotional: 'Promotional' as NotificationPreferenceEnum
    };
}
