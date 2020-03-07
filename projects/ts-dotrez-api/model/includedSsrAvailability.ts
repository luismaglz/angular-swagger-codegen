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
import { BundleJourneySsr } from './bundleJourneySsr';
import { BundleLegSsr } from './bundleLegSsr';
import { BundleSegmentSsr } from './bundleSegmentSsr';


/**
 * The included ssr availability model.
 */
import * as Enums from '../types/enums';

export interface IncludedSsrAvailability { 
    /**
     * The ssr code for the in-bundle ssr availability.
     */
    ssrCode?: string;
    /**
     * The total price of the applied fee.
     */
    bundleSsrPrice?: number;
    /**
     * The available bundle leg ssrs.
     */
    legSsrs?: Array<BundleLegSsr>;
    /**
     * The applied sales tax.
     */
    taxTotal?: number;
    /**
     * The available bundle segment ssrs.
     */
    segmentSsrs?: Array<BundleSegmentSsr>;
    /**
     * The available bundle journey ssr.
     */
    journeySsr?: BundleJourneySsr;
}
