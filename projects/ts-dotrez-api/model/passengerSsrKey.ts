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
 * The model for the data needed to identify a passenger ssr key.
 */
export interface PassengerSsrKey { 
    /**
     * The length of the Ssr duration.
     */
    ssrDuration?: PassengerSsrKey.SsrDurationEnum;
    /**
     * The passenger SSR code.
     */
    ssrCode?: string;
    /**
     * The unique passenger key.
     */
    passengerKey?: string;
    /**
     * The passenger SSR number.
     */
    ssrNumber?: number;
    /**
     * The market for either the leg or segment depending on the Ssr type.
     */
    market?: MarketInformation;
}
export namespace PassengerSsrKey {
    export type SsrDurationEnum = 'Segment' | 'Journey' | 'Leg';
    export const SsrDurationEnum = {
        Segment: 'Segment' as SsrDurationEnum,
        Journey: 'Journey' as SsrDurationEnum,
        Leg: 'Leg' as SsrDurationEnum
    }
}
