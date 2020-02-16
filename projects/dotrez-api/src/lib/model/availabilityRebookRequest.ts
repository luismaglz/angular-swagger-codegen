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
import { AvailabilityByTrip } from './availabilityByTrip';
import { AvailabilityCodeCriteria } from './availabilityCodeCriteria';
import { AvailabilityFareCriteria } from './availabilityFareCriteria';


/**
 * Model representing a availability rebook search.
 */
export interface AvailabilityRebookRequest { 
    /**
     * The list of availability search criteria.
     */
    criteria: Array<AvailabilityByTrip>;
    /**
     * The fare search criteria.
     */
    fareFilters?: AvailabilityFareCriteria;
    /**
     * The taxes and fees rollup mode which affects the pricing information.
     */
    taxesAndFees?: AvailabilityRebookRequest.TaxesAndFeesEnum;
    /**
     * The code criteria.
     */
    codes?: AvailabilityCodeCriteria;
    /**
     * The flag indicating to search low fare mode (only returning the lowest fare).
     */
    lowFareMode?: boolean;
}
export namespace AvailabilityRebookRequest {
    export type TaxesAndFeesEnum = 'None' | 'Taxes' | 'TaxesAndFees';
}
