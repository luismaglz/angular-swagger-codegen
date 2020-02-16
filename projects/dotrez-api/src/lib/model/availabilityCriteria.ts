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
import { AvailabilityCriteriaFilter } from "./availabilityCriteriaFilter";
import { AvailabilityDateCriteria } from "./availabilityDateCriteria";
import { AvailabilityStationCriteria } from "./availabilityStationCriteria";

/**
 * Defines a single direction search criteria far an availability call.
 */
export interface AvailabilityCriteria {
  /**
   * The station criteria.
   */
  stations: AvailabilityStationCriteria;
  /**
   * The date criteria.
   */
  dates: AvailabilityDateCriteria;
  /**
   * Filters applied to the response for a single direction.
   */
  filters?: AvailabilityCriteriaFilter;
  /**
   * Used to validate that the low fare prices retrieved from the low fare endpoint is valid.
   */
  lowFarePrice?: number;
  /**
   * Determines if SSR nest information will be returned on the legs for each available journey segments.
   */
  ssrCollectionsMode?: AvailabilityCriteria.SsrCollectionsModeEnum;
}
export namespace AvailabilityCriteria {
  export type SsrCollectionsModeEnum = "None" | "Leg";
}
