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
 * Defines the boarding pass request that is responsible for filtering what passengers to retrieve passes for.
 */
import * as Enums from '../types/enums';

export interface BoardingPassPassengerFilterRequest { 
    /**
     * The selected passenger keys to be returned. If null all passengers will be returned that have been checked in.
     */
    passengerKeys?: Array<string>;
    /**
     * Name of the application requesting for boarding pass print.
     */
    source?: string;
    /**
     * Whether to add event to history log.
     */
    skipLogToHistory?: boolean;
}
