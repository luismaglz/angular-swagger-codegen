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
import { AvailabilityCodeCriteriav2 } from './availabilityCodeCriteriav2';
import { AvailabilityCriteriaFilter } from './availabilityCriteriaFilter';
import { PassengerTypeCriteria } from './passengerTypeCriteria';


/**
 * Model representing an availability simple request v2.
 */
export interface AvailabilitySimpleRequestv2 { 
    /**
     * The origin station code.
     */
    origin: string;
    /**
     * The destination station code.
     */
    destination: string;
    /**
     * Flag indicating to search destination mac stations.
     */
    searchDestinationMacs?: boolean;
    /**
     * Flag indicating to search origin mac stations.
     */
    searchOriginMacs?: boolean;
    /**
     * The departure date.
     */
    beginDate: Date;
    /**
     * The return date. This date represents the return trip's selected day.
     */
    endDate?: Date;
    /**
     * The list of passengers.
     */
    passengers: PassengerTypeCriteria;
    /**
     * The different code criteria that can be set that can influence availability response.
     */
    codes?: AvailabilityCodeCriteriav2;
    /**
     * Filters applied to the response for a single direction.
     */
    filters?: AvailabilityCriteriaFilter;
    /**
     * The taxes and fees rollup mode which affects the pricing information.
     */
    taxesAndFees?: AvailabilitySimpleRequestv2.TaxesAndFeesEnum;
    /**
     * Used to validate that the low fare prices retrieved from the low fare endpoint is valid.
     */
    lowFarePrice?: number;
    /**
     * Determines if SSR nest information will be returned on the legs for each available journey segments.
     */
    ssrCollectionsMode?: AvailabilitySimpleRequestv2.SsrCollectionsModeEnum;
    /**
     * The number of fares per journey to be returned. If not set it will use the default optimized values
     */
    numberOfFaresPerJourney?: number;
}
export namespace AvailabilitySimpleRequestv2 {
    export type TaxesAndFeesEnum = 'None' | 'Taxes' | 'TaxesAndFees';
    export const TaxesAndFeesEnum = {
        None: 'None' as TaxesAndFeesEnum,
        Taxes: 'Taxes' as TaxesAndFeesEnum,
        TaxesAndFees: 'TaxesAndFees' as TaxesAndFeesEnum
    };
    export type SsrCollectionsModeEnum = 'None' | 'Leg';
    export const SsrCollectionsModeEnum = {
        None: 'None' as SsrCollectionsModeEnum,
        Leg: 'Leg' as SsrCollectionsModeEnum
    };
}
