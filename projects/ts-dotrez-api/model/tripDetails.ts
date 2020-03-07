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
import { CabinDetails } from './cabinDetails';
import { LegCrossReference } from './legCrossReference';


/**
 * Represents the trip status details version two model.
 */

export interface TripDetails { 
    /**
     * Represents the leg cross references.
     */
    legCrossReferences?: Array<LegCrossReference>;
    /**
     * Represents the list of cabin details.
     */
    cabinDetails?: Array<CabinDetails>;
    /**
     * Represents the total number of passengers allowed to checkin.
     */
    checkinLid?: number;
}