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
 * Defines the availability criteria stations.
 */
export interface AvailabilityStationCriteria { 
    /**
     * The Arrival Station Codes.
     */
    destinationStationCodes: Array<string>;
    /**
     * The Departure Station Codes.
     */
    originStationCodes: Array<string>;
    /**
     * Flag indicating to search destination mac stations.
     */
    searchDestinationMacs?: boolean;
    /**
     * Flag indicating to search origin mac stations.
     */
    searchOriginMacs?: boolean;
}
