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
import { BundleAvailabilityPricesByJourney } from './bundleAvailabilityPricesByJourney';


/**
 * Model containing the bundle ssr availability information.
 */
import * as Enums from '../enums';

export interface BundleAvailability { 
    /**
     * Indicates if the bundle has a cost associated with it.
     */
    readonly hasPrice?: boolean;
    pricesByJourney?: BundleAvailabilityPricesByJourney;
    /**
     * The bundle code.
     */
    bundleCode?: string;
}
