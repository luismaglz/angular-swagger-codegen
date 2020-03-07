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
 * The carrier model.
 */
import * as Enums from '../types/enums';

export interface Carrier { 
    /**
     * The carrier code for this carrier.
     */
    carrierCode: string;
    /**
     * The carrier info for this carrier.
     */
    carrierInfo: string;
    /**
     * The carrier name for this carrier.
     */
    carrierName: string;
    /**
     * The carrier short name for this carrier.
     */
    carrierShortName: string;
    /**
     * The carrier type for this carrier.
     */
    carrierType?: string;
    /**
     * The e ticket indicator for this carrier.
     */
    eTicketIndicator?: boolean;
    /**
     * The inventory indicator for this carrier
     */
    inventoryIndicator?: boolean;
    /**
     * The phone number for this carrier.
     */
    phone: string;
    /**
     * The Url for this carrier.
     */
    url: string;
    /**
     * The baggage indicator for this carrier.
     */
    baggageIndicator?: string;
}
