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
 * The resell Ssr request.
 */
import * as Enums from '../enums';

export interface ResellSsrRequest { 
    /**
     * Journey to resell the previously cancelled SSRs on.
     */
    journeyKey?: string;
    /**
     * Indicates whether to resell \"standard\" (non seat-restricted) SSRs.
     */
    resellSsrs?: boolean;
    /**
     * Indicates whether to resell the unit SSRs, i.e autoassign a new Unit that supports  the same SSRs.
     */
    resellUnitSsrs?: boolean;
    /**
     * Indicates whether to waive a seat fee for the new seat assigned in order to resell unit SSRs.
     */
    waiveSeatFee?: boolean;
}
