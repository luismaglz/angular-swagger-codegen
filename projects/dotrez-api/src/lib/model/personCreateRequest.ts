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
import { Name } from './name';
import { PersonAddressCreateRequest } from './personAddressCreateRequest';
import { PersonAliasRequest } from './personAliasRequest';
import { PersonBasicInformation } from './personBasicInformation';
import { PersonCommentRequest } from './personCommentRequest';
import { PersonCustomerProgramCreateRequest } from './personCustomerProgramCreateRequest';
import { PersonEmailCreateRequest } from './personEmailCreateRequest';
import { PersonPhoneNumberRequest } from './personPhoneNumberRequest';
import { PersonPreferenceCreateRequest } from './personPreferenceCreateRequest';
import { PersonStoredPaymentRequest } from './personStoredPaymentRequest';
import { PersonTravelDocumentRequest } from './personTravelDocumentRequest';


/**
 * Defines the person create request.
 */
export interface PersonCreateRequest { 
    /**
     * The persons true name.
     */
    name: Name;
    /**
     * The unique person customer number.
     */
    customerNumber?: string;
    /**
     * The type of person.
     */
    type?: PersonCreateRequest.TypeEnum;
    /**
     * The collection of registered email address.
     */
    emailAddresses?: Array<PersonEmailCreateRequest>;
    /**
     * The status of the person.
     */
    status?: PersonCreateRequest.StatusEnum;
    /**
     * The collection of registered phone numbers.
     */
    phoneNumbers?: Array<PersonPhoneNumberRequest>;
    /**
     * The person's basic information.
     */
    details?: PersonBasicInformation;
    /**
     * The collection of known addresses.
     */
    addresses?: Array<PersonAddressCreateRequest>;
    /**
     * The person's notification preference.
     */
    notificationPreference?: PersonCreateRequest.NotificationPreferenceEnum;
    /**
     * The collection of registered stored payments.
     */
    storedPayments?: Array<PersonStoredPaymentRequest>;
    /**
     * The collection of registered travel documents.
     */
    travelDocuments?: Array<PersonTravelDocumentRequest>;
    /**
     * The collection of enrolled customer programs.
     */
    programs?: Array<PersonCustomerProgramCreateRequest>;
    /**
     * The collection of comments.
     */
    comments?: Array<PersonCommentRequest>;
    /**
     * The collection of preferences.
     */
    preferences?: Array<PersonPreferenceCreateRequest>;
    /**
     * The collection of alternate names for the person.
     */
    aliases?: Array<PersonAliasRequest>;
}
export namespace PersonCreateRequest {
    export type TypeEnum = 'None' | 'Customer' | 'Agent';
    export type StatusEnum = 'Active' | 'Terminated' | 'Suspended';
    export type NotificationPreferenceEnum = 'None' | 'Promotional';
}
