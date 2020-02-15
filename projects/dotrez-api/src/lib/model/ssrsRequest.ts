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
import { SsrsByType } from './ssrsByType';


/**
 * Request to add multiple leg, segment, or journey Ssr's.
 */
export interface SsrsRequest { 
    /**
     * Ssr requests by type of request (Journey, Leg, Segment).
     */
    requests: Array<SsrsByType>;
    /**
     * Force wave on sell. Default value is false.
     */
    forceWaveOnSell?: boolean;
    /**
     * Set the currency code if different than the booking currency code.
     */
    currencyCode?: string;
}
