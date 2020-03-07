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
 * Filter criteria filters the availability responses results.
 */
import * as Enums from '../types/enums';

export interface AvailabilityFilterCriteria { 
    /**
     * Flag indicating to include allotted fare classes of service.
     */
    includeAllotments?: boolean;
    /**
     * Filters the type of journeys to return.
     */
    filter?: Enums.AvailabilityFilter;
    /**
     * The list of inventory journey sort keys. Used for filtering journeys on the response.
     */
    sortKeys?: Enums.JourneySortKey;
    /**
     * The list of product class codes to filter with.
     */
    productClasses?: Array<string>;
    /**
     * The list of travel class codes to filter with.
     */
    travelClasses?: Array<string>;
}
