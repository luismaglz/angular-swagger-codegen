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
 * Market detail contains the abstracted market data describing the earliest and  latest STD.
 */
import * as Enums from '../enums';

export interface ScheduleDetail { 
    /**
     * Date this market detail corresponds to.
     */
    departureDate?: Date;
    /**
     * Earliest std on this departure date.
     */
    earliest?: Date;
    /**
     * Latest std on this deparure date.
     */
    latest?: Date;
    /**
     * Number of flights on the given departure date.
     */
    flights?: number;
}
