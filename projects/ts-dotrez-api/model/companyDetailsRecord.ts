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
import { PhoneNumber } from './phoneNumber';


/**
 * The organization company details record results.
 */

export interface CompanyDetailsRecord { 
    /**
     * The organization name.
     */
    name: string;
    /**
     * The address of the organization.
     */
    address?: Address;
    /**
     * The website url of the organization.
     */
    url?: string;
    /**
     * The email address.
     */
    emailAddress?: string;
    /**
     * The available phone numbers.
     */
    phoneNumbers?: Array<PhoneNumber>;
}
