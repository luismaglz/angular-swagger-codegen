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

    import { AvailabilityMoveRequest<CAP>passengerMoveType<CAP> } from '../models/enums';
    import { AvailabilityMoveRequest<CAP>type<CAP> } from '../models/enums';

export interface AvailabilityMoveRequest { 
    /**
     * The passenger move type.
     */
    passengerMoveType?: AvailabilityMoveRequest<CAP>passengerMoveType<CAP>;
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
    type?: AvailabilityMoveRequest<CAP>type<CAP>;
}
