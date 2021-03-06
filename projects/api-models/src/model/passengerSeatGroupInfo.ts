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
import { PassengerSeatGroupInfoGroups } from './passengerSeatGroupInfoGroups';


/**
 * Defines the equipment seat group details for a specific passenger.
 */
import * as Enums from '../enums';

export interface PassengerSeatGroupInfo { 
    /**
     * The associated passenger key.
     */
    passengerKey?: string;
    groups?: PassengerSeatGroupInfoGroups;
}
