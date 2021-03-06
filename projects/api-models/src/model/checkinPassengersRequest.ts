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
import { CheckinPassengerRequest } from './checkinPassengerRequest';


/**
 * Defines the checkin passengers request.
 */
import * as Enums from '../enums';

export interface CheckinPassengersRequest { 
    /**
     * The collection of passengers to checkin.
     */
    passengers: Array<CheckinPassengerRequest>;
    /**
     * The flag indicating whether a seat is required for checkin.
     */
    seatsRequired?: boolean;
    /**
     * The flag indicating whether checkin requirement validation will be skipped.
     */
    skipSecurityChecks?: boolean;
    /**
     * The flag indicating whether the collection of passengers are for sandby checkin.
     */
    isStandby?: boolean;
}
