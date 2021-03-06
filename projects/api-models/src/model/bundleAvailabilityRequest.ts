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
 * Represents a bundle availability request.
 */
import * as Enums from '../enums';

export interface BundleAvailabilityRequest { 
    /**
     * The optional bundle code to look for.
     */
    bundleCode?: string;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The optional journey key to get bundle availability for.
     */
    journeyKey?: string;
    /**
     * The country of residence for the passengers.
     */
    residentCountry?: string;
    /**
     * The organization to use when evaluating availability of private fares (ATPCO faring  category 15).
     */
    sourceOrganization?: string;
    /**
     * The passenger keys for the bundle availability requests.
     */
    passengerKeys?: Array<string>;
    /**
     * A flag to indicate if the results should be filtered such that only  bundles with ssr availability will be returned.
     */
    filterBundles?: boolean;
}
