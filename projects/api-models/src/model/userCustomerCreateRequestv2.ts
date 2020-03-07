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
 * Defines the user customer create request that will be setup with the defiend default customer creation parameters.
 */
import * as Enums from '../enums';

export interface UserCustomerCreateRequestv2 { 
    /**
     * The unique person key to be associated to the customer.
     */
    personKey: string;
    /**
     * The unique username.
     */
    username: string;
    /**
     * The unique password.
     */
    password: string;
    /**
     * Send registration configrmation.
     */
    sendRegistrationConfirmation?: boolean;
}