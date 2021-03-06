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
 * A model for a request to update the passenger bags.
 */
import * as Enums from '../enums';

export interface PassengerBagRequest { 
    /**
     * The bag count for this request.
     */
    bagCount?: number;
    /**
     * The IATA identifier for this request.
     */
    iataIdentifier?: string;
    /**
     * Flag for marking a bag as a non-standard piece of luggage.
     */
    limitedReleaseTag?: boolean;
    /**
     * Type of weight for the baggage weight.
     */
    weightType?: Enums.WeightType;
    /**
     * The baggage weight.
     */
    weight?: number;
}
