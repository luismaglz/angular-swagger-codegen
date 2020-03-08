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
import { Address } from './address';
import { Name } from './name';
import { PhoneNumber } from './phoneNumber';


/**
 * Defines a contact create request.
 */
import * as Enums from '../enums';

export interface ContactRequest { 
    /**
     * The collection of phone numbers.  Supported types: Home, Work, Fax, Other.  This collections can only contain one number for each supported type.
     */
    phoneNumbers?: Array<PhoneNumber>;
    /**
     * The culture code.
     */
    cultureCode?: string;
    /**
     * The contact address.
     */
    address?: Address;
    /**
     * The email address of the contact.
     */
    emailAddress?: string;
    /**
     * The customer number.
     */
    customerNumber?: string;
    /**
     * Source organization.
     */
    sourceOrganization?: string;
    /**
     * The contact distribution option.
     */
    distributionOption?: Enums.DistributionOption;
    /**
     * The notification preference of the contact.
     */
    notificationPreference?: Enums.NotificationPreference;
    /**
     * The company name.
     */
    companyName?: string;
    /**
     * The contact's name.
     */
    name?: Name;
}
