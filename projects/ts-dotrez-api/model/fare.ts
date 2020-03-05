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
import { PassengerFare } from './passengerFare';


/**
 * Model describing a fare.
 */
export interface Fare { 
    /**
     * Flag that indicates if the fare is the governing fare.
     */
    readonly isGoverning?: boolean;
    /**
     * Flag indicating if a downgrade is available.
     */
    readonly downgradeAvailable?: boolean;
    /**
     * The fares carrier code.
     */
    carrierCode?: string;
    /**
     * Unique key for this type of fare.
     */
    fareKey?: string;
    /**
     * The class of service.
     */
    classOfService?: string;
    /**
     * The fares type of the class.
     */
    classType?: string;
    /**
     * The type of the fare application.
     */
    fareApplicationType?: Fare.FareApplicationTypeEnum;
    /**
     * The fare class of service.
     */
    fareClassOfService?: string;
    /**
     * The fare basis code.
     */
    fareBasisCode?: string;
    /**
     * The fare sequence.
     */
    fareSequence?: number;
    /**
     * The inbound and outbound.
     */
    inboundOutBound?: Fare.InboundOutBoundEnum;
    /**
     * The fare status.
     */
    fareStatus?: Fare.FareStatusEnum;
    /**
     * Gets or sets a value indicating whether this fare is an allotment marker.
     */
    isAllotmentMarketFare?: boolean;
    /**
     * The original class of service.
     */
    originalClassOfService?: string;
    /**
     * The rule number.
     */
    ruleNumber?: string;
    /**
     * The product class.
     */
    productClass?: string;
    /**
     * The rule tariff.
     */
    ruleTariff?: string;
    /**
     * The travel class code.
     */
    travelClassCode?: string;
    /**
     * The cross reference class of service.
     */
    crossReferenceClassOfService?: string;
    /**
     * The collection of passenger fares.
     */
    passengerFares?: Array<PassengerFare>;
    /**
     * The fare link.
     */
    fareLink?: number;
}
export namespace Fare {
    export type FareApplicationTypeEnum = 'Route' | 'Sector' | 'Governing';
    export const FareApplicationTypeEnum = {
        Route: 'Route' as FareApplicationTypeEnum,
        Sector: 'Sector' as FareApplicationTypeEnum,
        Governing: 'Governing' as FareApplicationTypeEnum
    }
    export type InboundOutBoundEnum = 'None' | 'Inbound' | 'Outbound' | 'Both' | 'RoundFrom' | 'RoundTo';
    export const InboundOutBoundEnum = {
        None: 'None' as InboundOutBoundEnum,
        Inbound: 'Inbound' as InboundOutBoundEnum,
        Outbound: 'Outbound' as InboundOutBoundEnum,
        Both: 'Both' as InboundOutBoundEnum,
        RoundFrom: 'RoundFrom' as InboundOutBoundEnum,
        RoundTo: 'RoundTo' as InboundOutBoundEnum
    }
    export type FareStatusEnum = 'Default' | 'SameDayStandBy' | 'FareOverrideConfirming' | 'FareOverrideConfirmed' | 'PublishedFareOverrideConfirming' | 'PublishedFareOverrideConfirmed';
    export const FareStatusEnum = {
        Default: 'Default' as FareStatusEnum,
        SameDayStandBy: 'SameDayStandBy' as FareStatusEnum,
        FareOverrideConfirming: 'FareOverrideConfirming' as FareStatusEnum,
        FareOverrideConfirmed: 'FareOverrideConfirmed' as FareStatusEnum,
        PublishedFareOverrideConfirming: 'PublishedFareOverrideConfirming' as FareStatusEnum,
        PublishedFareOverrideConfirmed: 'PublishedFareOverrideConfirmed' as FareStatusEnum
    }
}
