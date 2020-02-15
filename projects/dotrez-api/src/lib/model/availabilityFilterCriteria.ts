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
export interface AvailabilityFilterCriteria { 
    /**
     * Flag indicating to include allotted fare classes of service.
     */
    includeAllotments?: boolean;
    /**
     * Filters the type of journeys to return.
     */
    filter?: AvailabilityFilterCriteria.FilterEnum;
    /**
     * The list of inventory journey sort keys. Used for filtering journeys on the response.
     */
    sortKeys?: Array<AvailabilityFilterCriteria.SortKeysEnum>;
    /**
     * The list of product class codes to filter with.
     */
    productClasses?: Array<string>;
    /**
     * The list of travel class codes to filter with.
     */
    travelClasses?: Array<string>;
}
export namespace AvailabilityFilterCriteria {
    export type FilterEnum = 'Default' | 'ExcludeDeparted' | 'ExcludeImminent' | 'ExcludeUnavailable';
    export const FilterEnum = {
        Default: 'Default' as FilterEnum,
        ExcludeDeparted: 'ExcludeDeparted' as FilterEnum,
        ExcludeImminent: 'ExcludeImminent' as FilterEnum,
        ExcludeUnavailable: 'ExcludeUnavailable' as FilterEnum
    };
    export type SortKeysEnum = 'ServiceType' | 'ShortestTravelTime' | 'LowestFare' | 'HighestFare' | 'EarliestDeparture' | 'LatestDeparture' | 'EarliestArrival' | 'LatestArrival' | 'NoSort' | 'BiasOnlineCommercialDuplicates' | 'JourneyNumber';
    export const SortKeysEnum = {
        ServiceType: 'ServiceType' as SortKeysEnum,
        ShortestTravelTime: 'ShortestTravelTime' as SortKeysEnum,
        LowestFare: 'LowestFare' as SortKeysEnum,
        HighestFare: 'HighestFare' as SortKeysEnum,
        EarliestDeparture: 'EarliestDeparture' as SortKeysEnum,
        LatestDeparture: 'LatestDeparture' as SortKeysEnum,
        EarliestArrival: 'EarliestArrival' as SortKeysEnum,
        LatestArrival: 'LatestArrival' as SortKeysEnum,
        NoSort: 'NoSort' as SortKeysEnum,
        BiasOnlineCommercialDuplicates: 'BiasOnlineCommercialDuplicates' as SortKeysEnum,
        JourneyNumber: 'JourneyNumber' as SortKeysEnum
    };
}
