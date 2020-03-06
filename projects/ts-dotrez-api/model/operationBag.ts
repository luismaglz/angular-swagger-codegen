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
 * Operation Bag.
 */

    import { OperationBagBaggageStatus } from '../types/enums';
    import { OperationBagWeightType } from '../types/enums';

export interface OperationBag { 
    /**
     * The baggage key
     */
    operationBagKey?: string;
    /**
     * The unique transportation identifier.
     */
    identifier?: string;
    /**
     * The BaggageStatus in Bag object.
     */
    baggageStatus?: OperationBagBaggageStatus;
    /**
     * Flag for marking a bag as a non-standard piece of luggage.
     */
    nonStandard?: boolean;
    /**
     * The CheckInDate in Bag object.
     */
    checkInDate?: Date;
    /**
     * The OSTag in Bag object.
     */
    osTag?: string;
    /**
     * The CompartmentID in Bag object.
     */
    compartment?: number;
    /**
     * The tagged to station in the bag object.  This is the last station where  the bag is going to.  For example, on a trip from SLC to JFK, JFK would  be the tagged to station value.
     */
    taggedToStation?: string;
    /**
     * The tagged to station city in the bag object.  This is the last city where  the bag is going to.  For example, on a trip from SLC to JFK, New York would  be the tagged to station city value.
     */
    taggedToStationCity?: string;
    /**
     * The Weight in Bag object.
     */
    weight?: number;
    /**
     * The WeightType in Bag object.
     */
    weightType?: OperationBagWeightType;
}
