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
import { TransportationDesignator } from './transportationDesignator';


/**
 * Defines the a segments collection of missing SSR's.
 */

export interface CheckinMissingSegmentRequiredSsr { 
    /**
     * The collection of SSR's missing.
     */
    codes?: Array<string>;
    /**
     * The transportation designator that the SSR codes are missing from.
     */
    designator?: TransportationDesignator;
}
