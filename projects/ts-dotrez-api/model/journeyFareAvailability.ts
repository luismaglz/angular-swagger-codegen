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
 * Model describing the basic fare information that is displayed per availability segment.
 */

export interface JourneyFareAvailability { 
    /**
     * Unique key for this type of fare.
     */
    fareAvailabilityKey?: string;
    /**
     * The fare basis code.
     */
    fareCode?: string;
    /**
     * The number of available fares.
     */
    availableCount?: number;
    /**
     * The value indicating if the fare is sum of sector.
     */
    isSumOfSector?: boolean;
    /**
     * The class of service.
     */
    classOfService?: string;
}