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
import { BundleLegSsrPassengersAvailability } from './bundleLegSsrPassengersAvailability';
import { MarketInformation } from './marketInformation';


/**
 * Model information for a bundle sell service request (SSR) tied to a specific segment.
 */

    import { BundleSegmentSsr<CAP>ssrType<CAP> } from '../models/enums';
    import { BundleSegmentSsr<CAP>seatRestriction<CAP> } from '../models/enums';

export interface BundleSegmentSsr { 
    /**
     * The unique identifier for the segment.
     */
    segmentKey?: string;
    /**
     * Gets the SSR code.
     */
    ssrCode?: string;
    /**
     * The segment market information.
     */
    segmentDetails?: MarketInformation;
    passengersAvailability?: BundleLegSsrPassengersAvailability;
    /**
     * Gets the SSR type.
     */
    ssrType?: BundleSegmentSsr<CAP>ssrType<CAP>;
    /**
     * Gets the SSR name.
     */
    name?: string;
    /**
     * Gets the limit per passenger.
     */
    limitPerPassenger?: number;
    /**
     * Gets the amount available.
     */
    available?: number;
    /**
     * Gets the SSR availability types of inventory controlled.
     */
    inventoryControlled?: boolean;
    /**
     * Gets the SSR availability type of seat dependent.
     */
    seatDependent?: boolean;
    /**
     * Gets the fee code.
     */
    feeCode?: string;
    /**
     * Gets the SSR nest.
     */
    nest?: string;
    /**
     * Gets the seat restriction.
     */
    seatRestriction?: BundleSegmentSsr<CAP>seatRestriction<CAP>;
}
