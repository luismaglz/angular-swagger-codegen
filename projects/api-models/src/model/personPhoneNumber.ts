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
 * Defines a unique person phone number.
 */
import * as Enums from '../enums';

export interface PersonPhoneNumber { 
    /**
     * The unique key for the phone number.
     */
    personPhoneNumberKey?: string;
    /**
     * Flag indicating if this phone number is the default.
     */
    _default?: boolean;
    /**
     * The phone number type.
     */
    type: Enums.<ENUM>'Other'|'Home'|'Work'|'Mobile'|'Fax'</ENUM>;
    /**
     * The phone number without any formatting characters.
     */
    number: string;
}
