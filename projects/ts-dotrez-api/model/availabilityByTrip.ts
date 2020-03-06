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
import { AvailabilityDateCriteria } from './availabilityDateCriteria';
import { AvailabilityFilterCriteria } from './availabilityFilterCriteria';
import { AvailabilityFlightCriteria } from './availabilityFlightCriteria';
import { AvailabilityStationCriteria } from './availabilityStationCriteria';


/**
 * Defines a availability rebook criteria search which includes all the previous passengers on the booking.
 */

    import { AvailabilityByTrip<CAP>ssrCollectionsMode</CAP> } from '../models/enums';
    import { AvailabilityByTrip<CAP>type</CAP> } from '../models/enums';

export interface AvailabilityByTrip { 
    /**
     * The filtering criteria.
     */
    filters?: AvailabilityFilterCriteria;
    /**
     * The station criteria.
     */
    stations: AvailabilityStationCriteria;
    /**
     * Used to validate that the low fare prices retrieved earlier to match the results now shown in the availability call.
     */
    lowFarePrice?: number;
    /**
     * The date criteria.
     */
    dates: AvailabilityDateCriteria;
    /**
     * Determines how and when to return the Ssr nest information.
     */
    ssrCollectionsMode?: AvailabilityByTrip<CAP>ssrCollectionsMode</CAP>;
    /**
     * The flight search criteria.
     */
    flightFilters?: AvailabilityFlightCriteria;
    /**
     * Defines the type of fares to be returned.
     */
    type?: AvailabilityByTrip<CAP>type</CAP>;
}
