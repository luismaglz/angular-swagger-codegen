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
import { SsrRequest } from './ssrRequest';


/**
 * Ssrs by type model allows multiple Ssr requests for a specific type.
 */
import * as Enums from '../types/enums';

export interface SsrsByType { 
    /**
     * Defines the duration type of the Ssr.
     */
    type: Enums.SsrDurationType;
    /**
     * Market for the corresponding type.
     */
    market: MarketInformation;
    /**
     * SSR request items.
     */
    items: Array<SsrRequest>;
}
