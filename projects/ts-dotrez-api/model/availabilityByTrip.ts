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
    ssrCollectionsMode?: AvailabilityByTrip.SsrCollectionsModeEnum;
    /**
     * The flight search criteria.
     */
    flightFilters?: AvailabilityFlightCriteria;
    /**
     * Defines the type of fares to be returned.
     */
    type?: AvailabilityByTrip.TypeEnum;
}
export namespace AvailabilityByTrip {
    export type SsrCollectionsModeEnum = 'None' | 'Leg';
    export const SsrCollectionsModeEnum = {
        None: 'None' as SsrCollectionsModeEnum,
        Leg: 'Leg' as SsrCollectionsModeEnum
    }
    export type TypeEnum = 'Default' | 'Standby' | 'Overbook' | 'NoPricing';
    export const TypeEnum = {
        Default: 'Default' as TypeEnum,
        Standby: 'Standby' as TypeEnum,
        Overbook: 'Overbook' as TypeEnum,
        NoPricing: 'NoPricing' as TypeEnum
    }
}
