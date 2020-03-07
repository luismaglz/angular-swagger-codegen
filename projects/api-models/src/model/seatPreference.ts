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
 * Represents a single seat preference.
 */
import * as Enums from '../enums';

export interface SeatPreference { 
    /**
     * The seat map code (ex. 'SMOKING').
     */
    seatMapCode: string;
    /**
     * The seat map value (ex. 'TRUE').
     */
    value: string;
}
