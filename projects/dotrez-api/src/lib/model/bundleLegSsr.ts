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
 * Model information for a bundle sell service request (SSR) tied to a specific leg.
 */
export interface BundleLegSsr { 
    /**
     * The unique identifier for the leg.
     */
    legKey?: string;
    /**
     * Gets the SSR code.
     */
    ssrCode?: string;
    /**
     * The leg's market information.
     */
    legDetails?: MarketInformation;
    passengersAvailability?: BundleLegSsrPassengersAvailability;
    /**
     * Gets the SSR type.
     */
    ssrType?: BundleLegSsr.SsrTypeEnum;
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
    seatRestriction?: BundleLegSsr.SeatRestrictionEnum;
}
export namespace BundleLegSsr {
    export type SsrTypeEnum = 'Standard' | 'Infant' | 'Meal' | 'BaggageAllowance' | 'TravelLineMeal';
    export const SsrTypeEnum = {
        Standard: 'Standard' as SsrTypeEnum,
        Infant: 'Infant' as SsrTypeEnum,
        Meal: 'Meal' as SsrTypeEnum,
        BaggageAllowance: 'BaggageAllowance' as SsrTypeEnum,
        TravelLineMeal: 'TravelLineMeal' as SsrTypeEnum
    };
    export type SeatRestrictionEnum = 'Undefined' | 'AlwaysAllowed' | 'DefaultAllowed' | 'DefaultRestricted';
    export const SeatRestrictionEnum = {
        Undefined: 'Undefined' as SeatRestrictionEnum,
        AlwaysAllowed: 'AlwaysAllowed' as SeatRestrictionEnum,
        DefaultAllowed: 'DefaultAllowed' as SeatRestrictionEnum,
        DefaultRestricted: 'DefaultRestricted' as SeatRestrictionEnum
    };
}
