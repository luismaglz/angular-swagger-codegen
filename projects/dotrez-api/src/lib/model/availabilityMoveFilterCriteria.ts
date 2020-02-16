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
 * Filter criteria filters the move availability responses results.
 */
export interface AvailabilityMoveFilterCriteria {
  /**
   * Filters the type of journeys to return.
   */
  filter?: AvailabilityMoveFilterCriteria.FilterEnum;
  /**
   * The list of inventory journey sort keys. Used for filtering journeys on the response.
   */
  sortKeys?: Array<AvailabilityMoveFilterCriteria.SortKeysEnum>;
}
export namespace AvailabilityMoveFilterCriteria {
  export type FilterEnum =
    | "Default"
    | "ExcludeDeparted"
    | "ExcludeImminent"
    | "ExcludeUnavailable";
  export type SortKeysEnum =
    | "ServiceType"
    | "ShortestTravelTime"
    | "LowestFare"
    | "HighestFare"
    | "EarliestDeparture"
    | "LatestDeparture"
    | "EarliestArrival"
    | "LatestArrival"
    | "NoSort"
    | "BiasOnlineCommercialDuplicates"
    | "JourneyNumber";
}
