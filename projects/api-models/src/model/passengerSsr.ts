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


/**
 * The model for a passengers Ssr details.
 */
import * as Enums from '../enums';

export interface PassengerSsr { 
    /**
     * The passenger SSR note.
     */
    note?: string;
    /**
     * The length of the Ssr duration.
     */
    ssrDuration?: Enums.SsrDurationType;
    /**
     * The key that uniquely identifies the Ssr, passenger, and leg or segment.
     */
    ssrKey?: string;
    /**
     * The passenger SSR unit value.
     */
    count?: number;
    /**
     * The passenger SSR code.
     */
    ssrCode?: string;
    /**
     * The SSR fee code.
     */
    feeCode?: string;
    /**
     * Indicates if the SSR is part of a bundle.
     */
    inBundle?: boolean;
    /**
     * The unique passenger key.
     */
    passengerKey?: string;
    /**
     * The passenger SSR detail.
     */
    ssrDetail?: string;
    /**
     * The passenger SSR number.
     */
    ssrNumber?: number;
    /**
     * The market for either the leg or segment depending on the Ssr type.
     */
    market?: MarketInformation;
}
