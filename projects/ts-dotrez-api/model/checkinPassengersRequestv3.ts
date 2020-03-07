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
import { CheckinPassengerRequestv2 } from './checkinPassengerRequestv2';


/**
 * Defines the checkin passengers request v3 model.
 */
import * as Enums from '../types/enums';

export interface CheckinPassengersRequestv3 { 
    /**
     * The collection of passengers to checkin.
     */
    passengers: Array<CheckinPassengerRequestv2>;
    /**
     * The flag indicating whether a seat is required for checkin.
     */
    seatsRequired?: boolean;
    /**
     * The flag indicating whether checkin requirement validation will be skipped.
     */
    skipSecurityChecks?: boolean;
}
