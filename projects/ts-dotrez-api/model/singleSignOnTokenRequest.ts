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
 * Defines the single sign on token request.
 */
import * as Enums from '../types/enums';

export interface SingleSignOnTokenRequest { 
    /**
     * The single sign on token.
     */
    singleSignOn: string;
    /**
     * The single sign on token expiration date.
     */
    expirationDate?: Date;
}
