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
import { SeatInfo } from './seatInfo';


/**
 * Model for a passenger seat for a segment.
 */
import * as Enums from '../enums';

export interface PassengerSeat { 
    /**
     * The passenger seat compartment designator.
     */
    compartmentDesignator?: string;
    /**
     * The passenger seat penalty.
     */
    penalty?: number;
    /**
     * The passenger seat unit designator.
     */
    unitDesignator?: string;
    /**
     * The passenger seat seat information.
     */
    seatInformation?: SeatInfo;
    /**
     * The leg arrival station.
     */
    arrivalStation?: string;
    /**
     * The leg departure station.
     */
    departureStation?: string;
    /**
     * The passenger key associated with the seat.
     */
    passengerKey?: string;
    /**
     * The seat's unique unit key.
     */
    unitKey?: string;
}
