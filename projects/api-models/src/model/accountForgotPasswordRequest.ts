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
 * Defines the account forgot password request.
 */
import * as Enums from '../enums';

export interface AccountForgotPasswordRequest { 
    /**
     * The unique username.
     */
    username?: string;
    /**
     * The domain the user is located in.
     */
    domainCode: string;
    /**
     * The alternate identifier.
     */
    alternateIdentifier?: string;
}