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
 * Low fare leg information.
 */
import * as Enums from '../enums';

export interface LowFareLeg { 
    /**
     * The arrival date and time.
     */
    arrivalTime?: Date;
    /**
     * The departure date and time.
     */
    departureTime?: Date;
    /**
     * The destination station code.
     */
    destination?: string;
    /**
     * The origin station code.
     */
    origin?: string;
    /**
     * Gets or sets the flight number.
     */
    flightNumber?: string;
    /**
     * Gets or sets the carrier code.
     */
    carrierCode?: string;
    /**
     * The leg type of the equipment.
     */
    equipmentType?: string;
    /**
     * The operating carrier code.
     */
    operatingCarrier?: string;
}
