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
 * Defines a booking add on base details.
 */
import * as Enums from '../enums';

export interface AddOnDetails { 
    /**
     * The created agent code.
     */
    agentCode?: string;
    /**
     * The created organization code.
     */
    organizationCode?: string;
    /**
     * The created domain code.
     */
    domainCode?: string;
    /**
     * The created location code.
     */
    locationCode?: string;
}
