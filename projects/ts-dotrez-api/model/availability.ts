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
import { AvailabilityFaresAvailable } from './availabilityFaresAvailable';
import { Trip } from './trip';


/**
 * Availability contains all information returned when requesting flight availability.
 */

export interface Availability { 
    /**
     * The collection of trips.
     */
    trips?: Array<Trip>;
    faresAvailable?: AvailabilityFaresAvailable;
    /**
     * The currency code used on all trips.
     */
    currencyCode?: string;
    /**
     * Flag indicating if the trip includes taxes and fees.
     */
    includeTaxesAndFees?: boolean;
}