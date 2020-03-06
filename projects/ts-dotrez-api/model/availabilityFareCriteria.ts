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
 * Defines a availability fare search criteria.
 */

    import { AvailabilityFareCriteria<CAP>classControl</CAP> } from '../models/enums';
    import { AvailabilityFareCriteria<CAP>loyalty</CAP> } from '../models/enums';

export interface AvailabilityFareCriteria { 
    /**
     * The fare class control.
     */
    classControl?: AvailabilityFareCriteria<CAP>classControl</CAP>;
    /**
     * The max fare price.
     */
    maxPrice?: number;
    /**
     * The min fare price.
     */
    minPrice?: number;
    /**
     * Filters fares based on loyalty.
     */
    loyalty?: AvailabilityFareCriteria<CAP>loyalty</CAP>;
    /**
     * The list of fare types.
     */
    types?: Array<string>;
    /**
     * The list of fare classes.
     */
    classes?: Array<string>;
}
