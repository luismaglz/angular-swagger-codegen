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
import { LowFareAvailabilityCodeCriteria } from './lowFareAvailabilityCodeCriteria';
import { LowFareAvailabilityCriteria } from './lowFareAvailabilityCriteria';
import { LowFareAvailabilityFilterCriteria } from './lowFareAvailabilityFilterCriteria';
import { PassengerTypeCriteria } from './passengerTypeCriteria';


/**
 * Defines the low are availability request.
 */
export interface LowFareAvailabilityRequest { 
    /**
     * Flag indicating to bypass the low fare cache and use real time results instead of cached results.
     */
    bypassCache?: boolean;
    /**
     * Flag indicating to return all data used for low fare caching, this is used for external caching providers.
     */
    getAllDetails?: boolean;
    /**
     * Flag indicating to include taxes and fees on the response.
     */
    includeTaxesAndFees?: boolean;
    /**
     * The passenger type criteria.  If caching is on this field will not be honored, and will use the previously cached PassengerTypes.
     */
    passengers: PassengerTypeCriteria;
    /**
     * The low fare code criteria.
     */
    codes?: LowFareAvailabilityCodeCriteria;
    /**
     * The low fare filtering criteria.
     */
    filters?: LowFareAvailabilityFilterCriteria;
    /**
     * The list of low fare availability search criteria.
     */
    criteria: Array<LowFareAvailabilityCriteria>;
}
