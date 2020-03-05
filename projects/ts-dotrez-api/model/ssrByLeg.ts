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
import { MarketInformation } from './marketInformation';
import { SsrDetail } from './ssrDetail';


/**
 * Model information for a sell service request (SSR) tied to a specific leg.
 */

export interface SsrByLeg { 
    /**
     * The unique identifier of the leg of a segment.
     */
    legKey?: string;
    /**
     * Leg market information.
     */
    legDetails?: MarketInformation;
    /**
     * The associated Ssrs.
     */
    ssrs?: Array<SsrDetail>;
}
