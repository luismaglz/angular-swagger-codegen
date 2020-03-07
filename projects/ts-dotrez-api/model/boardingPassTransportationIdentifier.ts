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
 * Defines a boarding pass transportation identifier.
 */

export interface BoardingPassTransportationIdentifier { 
    /**
     * The carriers name.
     */
    carrierName?: string;
    /**
     * The unique transportation identifier.
     */
    identifier: string;
    /**
     * The carrier code.
     */
    carrierCode: string;
    /**
     * The op suffix.
     */
    opSuffix?: string;
}