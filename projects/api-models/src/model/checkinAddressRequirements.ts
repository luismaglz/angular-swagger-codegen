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


/**
 * Defines a passenger checkin address requirements.
 */
import * as Enums from '../enums';

export interface CheckinAddressRequirements { 
    /**
     * Flag indicating if the checkin address requirements are meet and ready/valid for checkin.
     */
    readonly isValid?: boolean;
    /**
     * The collection of addresses that are tagged to a station code that already exist on the passenger.
     */
    addressesOnFile?: Array<string>;
    /**
     * The collection of unhandled tagged to station addresses required.
     */
    unhandledAddresses?: Array<string>;
}
