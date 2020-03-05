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
import { TripDateMarket } from './tripDateMarket';


/**
 * The trip results represents a wrapper class for the potential collection of multiple selected dates (flex days or  range) selected on the availability request.
 */

export interface TripResult { 
    /**
     * The collection of available trip by date that contain a collection of markets.
     */
    trips?: Array<TripDateMarket>;
}
