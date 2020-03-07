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
 * The bundle configuration model.
 */
import * as Enums from '../enums';

export interface BundleConfiguration { 
    /**
     * The service bundle code.
     */
    bundleCode?: string;
    /**
     * The SSR fee code.
     */
    feeCode?: string;
    /**
     * The booking queue code.
     */
    bookingQueueCode?: string;
    /**
     * The program code.
     */
    programCode?: string;
    /**
     * The program code.
     */
    programLevel?: string;
    /**
     * The bundle name.
     */
    name?: string;
    /**
     * The bundle description.
     */
    description?: string;
    /**
     * Indicates if the bundle type has a cost associated with it.
     */
    hasPrice?: boolean;
    /**
     * The bundle rank.
     */
    rank?: number;
    /**
     * Indicates if the bundle is active.
     */
    inActive?: boolean;
    /**
     * Indicates if all SSR's are required.
     */
    allSsrsRequired?: boolean;
}
