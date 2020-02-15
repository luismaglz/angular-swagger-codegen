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
import { AvailabilityFlightCriteria } from './availabilityFlightCriteria';
import { AvailabilityMoveFilterCriteria } from './availabilityMoveFilterCriteria';
import { AvailabilityStationCriteria } from './availabilityStationCriteria';


/**
 * Defines the availability move request.
 */
export interface AvailabilityMoveRequest { 
    /**
     * The passenger move type.
     */
    passengerMoveType?: AvailabilityMoveRequest.PassengerMoveTypeEnum;
    /**
     * The filtering criteria.
     */
    filters?: AvailabilityMoveFilterCriteria;
    /**
     * The station criteria.
     */
    stations: AvailabilityStationCriteria;
    /**
     * The journey sell key to move.
     */
    journeyKey: string;
    /**
     * The date criteria.
     */
    dates: AvailabilityDateCriteria;
    /**
     * The flight search criteria.
     */
    flightFilters?: AvailabilityFlightCriteria;
    /**
     * Defines the type of fares to be returned.
     */
    type?: AvailabilityMoveRequest.TypeEnum;
}
export namespace AvailabilityMoveRequest {
    export type PassengerMoveTypeEnum = 'None' | 'Irop' | 'Diversion' | 'FlightClose' | 'FlyAhead' | 'SplitJourney' | 'SelfServiceRebooking';
    export const PassengerMoveTypeEnum = {
        None: 'None' as PassengerMoveTypeEnum,
        Irop: 'Irop' as PassengerMoveTypeEnum,
        Diversion: 'Diversion' as PassengerMoveTypeEnum,
        FlightClose: 'FlightClose' as PassengerMoveTypeEnum,
        FlyAhead: 'FlyAhead' as PassengerMoveTypeEnum,
        SplitJourney: 'SplitJourney' as PassengerMoveTypeEnum,
        SelfServiceRebooking: 'SelfServiceRebooking' as PassengerMoveTypeEnum
    };
    export type TypeEnum = 'Default' | 'Standby' | 'Overbook' | 'NoPricing';
    export const TypeEnum = {
        Default: 'Default' as TypeEnum,
        Standby: 'Standby' as TypeEnum,
        Overbook: 'Overbook' as TypeEnum,
        NoPricing: 'NoPricing' as TypeEnum
    };
}
