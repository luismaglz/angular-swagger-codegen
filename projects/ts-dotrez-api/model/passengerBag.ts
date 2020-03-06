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
 * Model information about the baggage a passenger has.
 */

    import { PassengerBag<CAP>weightType</CAP> } from '../models/enums';

export interface PassengerBag { 
    /**
     * The unique transportation identifier.
     */
    identifier?: string;
    /**
     * Unique key for the baggage.
     */
    baggageKey?: string;
    /**
     * Flag for marking a bag as a non-standard piece of luggage.
     */
    nonStandard?: boolean;
    /**
     * The type of baggage.
     */
    type?: string;
    /**
     * The OSTag in Bag object.
     */
    osTag?: string;
    /**
     * The bag OS tag date.
     */
    osTagDate?: Date;
    /**
     * The tagged to station in the bag object.  This is the last station where  the bag is going to.  For example, on a trip from SLC to JFK, JFK would  be the tagged to station value.
     */
    taggedToStation?: string;
    /**
     * The bag station code.
     */
    stationCode?: string;
    /**
     * The Weight in Bag object.
     */
    weight?: number;
    /**
     * The bag tagged to carrier code.
     */
    taggedToCarrierCode?: string;
    /**
     * The WeightType in Bag object.
     */
    weightType?: PassengerBag<CAP>weightType</CAP>;
}
