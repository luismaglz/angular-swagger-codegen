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
import { TransportationIdentifier } from './transportationIdentifier';


/**
 * Defines a single passengers checkin status for a specific segment.
 */
import * as Enums from '../enums';

export interface CheckinPassengerLiftStatus { 
    /**
     * The lift status of the passenger for a specific segment.
     */
    status?: Enums.LiftStatus;
    /**
     * The transportation identifier.
     */
    identifier?: TransportationIdentifier;
}
