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
 * Model related to the point of sale.  This is for readonly operations.
 */

export interface PointOfSale { 
    /**
     * The point of sale agent code.
     */
    agentCode?: string;
    /**
     * The point of sale domain code.
     */
    domainCode?: string;
    /**
     * The point of sale location code.
     */
    locationCode?: string;
    /**
     * The point of sale organization code.
     */
    organizationCode?: string;
}