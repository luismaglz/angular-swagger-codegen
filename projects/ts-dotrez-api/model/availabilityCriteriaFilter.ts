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
 * Defines all the different ways the availability response can be filtered.
 */

    import { AvailabilityCriteriaFilterFareInclusionType } from '../types/enums';
    import { AvailabilityCriteriaFilterCompressionType } from '../types/enums';
    import { AvailabilityCriteriaFilterLoyalty } from '../types/enums';
    import { AvailabilityCriteriaFilterExclusionType } from '../types/enums';
    import { AvailabilityCriteriaFilterSortOptions } from '../types/enums';
    import { AvailabilityCriteriaFilterType } from '../types/enums';
    import { AvailabilityCriteriaFilterConnectionType } from '../types/enums';

export interface AvailabilityCriteriaFilter { 
    /**
     * Defines the type of fares to be included in the response.
     */
    fareInclusionType?: AvailabilityCriteriaFilterFareInclusionType;
    /**
     * The class compression type.
     */
    compressionType?: AvailabilityCriteriaFilterCompressionType;
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
    loyalty?: AvailabilityCriteriaFilterLoyalty;
    /**
     * Flag indicating to include allotted fare classes of service.
     */
    includeAllotments?: boolean;
    /**
     * Filters the type of journeys to return.
     */
    exclusionType?: AvailabilityCriteriaFilterExclusionType;
    /**
     * The list of inventory journey sort options, used for filtering journeys on the response.
     */
    sortOptions?: AvailabilityCriteriaFilterSortOptions;
    /**
     * The list of product class codes to filter with.
     */
    productClasses?: Array<string>;
    /**
     * The list of travel class codes to filter with.
     */
    travelClasses?: Array<string>;
    /**
     * The list of fare types.
     */
    fareTypes?: Array<string>;
    /**
     * The list of classes of service.
     */
    classesOfService?: Array<string>;
    /**
     * The desired carrier code.
     */
    carrierCode?: string;
    /**
     * The desired identifier number.
     */
    identifier?: string;
    /**
     * The type filtering based on connections.
     */
    type?: AvailabilityCriteriaFilterType;
    /**
     * Specifies the type of sold as connection when segment connects with passive segment.
     */
    connectionType?: AvailabilityCriteriaFilterConnectionType;
    /**
     * The number of max connections.
     */
    maxConnections?: number;
}
