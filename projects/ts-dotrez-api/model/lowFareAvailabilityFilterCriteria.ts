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
 * Describes the low fare availability filtering criteria.
 */

    import { LowFareAvailabilityFilterCriteria<CAP>flightFilter<CAP> } from '../models/enums';
    import { LowFareAvailabilityFilterCriteria<CAP>loyalty<CAP> } from '../models/enums';

export interface LowFareAvailabilityFilterCriteria { 
    /**
     * Flag indicating to return only one low fare per date when multiple markets are requested.
     */
    groupByDate?: boolean;
    /**
     * Controls the flights that are included in a low fare availability response.
     */
    flightFilter?: LowFareAvailabilityFilterCriteria<CAP>flightFilter<CAP>;
    /**
     * Filters fares based on loyalty.
     */
    loyalty?: LowFareAvailabilityFilterCriteria<CAP>loyalty<CAP>;
    /**
     * The list of booking classes to filter the results by.
     */
    bookingClasses?: Array<string>;
    /**
     * The list of product classes to filter the results by.
     */
    productClasses?: Array<string>;
    /**
     * The list of fare types to filter the results by.
     */
    fareTypes?: Array<string>;
}
