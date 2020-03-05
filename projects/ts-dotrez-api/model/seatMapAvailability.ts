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
import { SeatMap } from './seatMap';
import { SeatMapAvailabilityFees } from './seatMapAvailabilityFees';
import { SeatMapAvailabilitySsrLookup } from './seatMapAvailabilitySsrLookup';


/**
 * Defines the equipment availability.
 */

export interface SeatMapAvailability { 
    /**
     * The seat map.
     */
    seatMap?: SeatMap;
    fees?: SeatMapAvailabilityFees;
    ssrLookup?: SeatMapAvailabilitySsrLookup;
}
