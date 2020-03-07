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
 * The voucher issuance request model.
 */

export interface VoucherMarketInformation { 
    /**
     * Gets or sets the leg arrival station.
     */
    destination: string;
    /**
     * Gets or sets the leg departure station.
     */
    origin: string;
    /**
     * The departure date.
     */
    departureDate: Date;
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