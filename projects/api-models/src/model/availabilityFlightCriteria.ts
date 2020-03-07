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
 * The specific flight criteria for the availability criteria.
 */
import * as Enums from '../enums';

export interface AvailabilityFlightCriteria { 
    /**
     * The desired carrier code.
     */
    carrierCode?: string;
    /**
     * The desired flight number.
     */
    flightNumber?: string;
    /**
     * The flight type filtering based on connections.
     */
    type?: Enums.<ENUM>'None'|'NonStop'|'Through'|'Direct'|'Connect'|'All'</ENUM>;
    /**
     * The number of max connecting flights.
     */
    maxConnectingFlights?: number;
}