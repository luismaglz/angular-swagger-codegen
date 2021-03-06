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
 * The Booking flight search settings.
 */
import * as Enums from '../enums';

export interface FlightSearchSettings { 
    /**
     * The maximum number of passengers allowed on a single booking.
     */
    bookingMaxPassengers?: number;
    /**
     * Flag that indicates if open jaw journeys are allowed.
     */
    allowOpenJaw?: boolean;
    /**
     * Flag that indicates whether private fares are allowed.
     */
    allowPrivateFares?: boolean;
    /**
     * The number of days after the fare discontinue date that the agent will be allowed to view the fare.
     */
    showExpiredFareDateRange?: number;
    /**
     * The maximum number of connections on a journey that will be returned from availability.
     */
    maxNumberConnectingFlights?: number;
    /**
     * The primary sort to be used on availability response.
     */
    primarySortKey?: Enums.JourneySortKey;
    /**
     * The secondary sort to be used on the availability response.
     */
    secondarySortKey?: Enums.JourneySortKey;
    /**
     * The maximum number of days between the begin and end date for regular availability.
     */
    maxAvailabilityDateRange?: number;
    /**
     * The maximum number of days between the begin and end date for low fare availability.
     */
    maxLowFareDateRange?: number;
    /**
     * Display setting for low fares (used in change flow).
     */
    displayLowerFares?: Enums.FareDisplayType;
    /**
     * The fare class filtering when returning journeys during availability.
     */
    fareClassControl?: Enums.FareClassControl;
    /**
     * The flag indicating whether to allow anticipated sales taxes and travel fees when processing the availability  request.
     */
    allUpPricing?: boolean;
    /**
     * Fare filtering options.
     */
    fareSorting?: Enums.FareSelection;
    /**
     * The status of the low fare cache.
     */
    lowFareCacheStatus?: Enums.LowFareCacheOption;
}
