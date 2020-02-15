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
import { ServiceCharge } from './serviceCharge';


/**
 * Model representing passenger fee information.
 */
export interface PassengerFee { 
    /**
     * The fee type.
     */
    type?: PassengerFee.TypeEnum;
    /**
     * The SSR code.
     */
    ssrCode?: string;
    /**
     * The fee SSR number.
     */
    ssrNumber?: number;
    /**
     * The fee payment number.
     */
    paymentNumber?: number;
    /**
     * The fee code.
     */
    code: string;
    /**
     * The fee detail.
     */
    detail?: string;
    /**
     * The passenger fee key.
     */
    passengerFeeKey?: string;
    /**
     * The fee override.
     */
    override?: boolean;
    /**
     * The flight reference which signifies a link to a segment and or leg.
     */
    flightReference?: string;
    /**
     * The fee notes.
     */
    note?: string;
    /**
     * The created date for the fee.
     */
    createdDate?: Date;
    /**
     * Indicates if the fee is protected.
     */
    isProtected?: boolean;
    /**
     * The list of service charges for the fee.
     */
    serviceCharges?: Array<ServiceCharge>;
}
export namespace PassengerFee {
    export type TypeEnum = 'All' | 'Tax' | 'TravelFee' | 'ServiceFee' | 'PaymentFee' | 'PenaltyFee' | 'SsrFee' | 'NonFlightServiceFee' | 'UpgradeFee' | 'SeatFee' | 'BaseFare' | 'SpoilageFee' | 'NameChangeFee' | 'ConvenienceFee' | 'BaggageFee' | 'FareSurcharge' | 'PromotionDiscount' | 'ServiceBundle' | 'ExtraBagFee' | 'ATPCOBagFee';
    export const TypeEnum = {
        All: 'All' as TypeEnum,
        Tax: 'Tax' as TypeEnum,
        TravelFee: 'TravelFee' as TypeEnum,
        ServiceFee: 'ServiceFee' as TypeEnum,
        PaymentFee: 'PaymentFee' as TypeEnum,
        PenaltyFee: 'PenaltyFee' as TypeEnum,
        SsrFee: 'SsrFee' as TypeEnum,
        NonFlightServiceFee: 'NonFlightServiceFee' as TypeEnum,
        UpgradeFee: 'UpgradeFee' as TypeEnum,
        SeatFee: 'SeatFee' as TypeEnum,
        BaseFare: 'BaseFare' as TypeEnum,
        SpoilageFee: 'SpoilageFee' as TypeEnum,
        NameChangeFee: 'NameChangeFee' as TypeEnum,
        ConvenienceFee: 'ConvenienceFee' as TypeEnum,
        BaggageFee: 'BaggageFee' as TypeEnum,
        FareSurcharge: 'FareSurcharge' as TypeEnum,
        PromotionDiscount: 'PromotionDiscount' as TypeEnum,
        ServiceBundle: 'ServiceBundle' as TypeEnum,
        ExtraBagFee: 'ExtraBagFee' as TypeEnum,
        ATPCOBagFee: 'ATPCOBagFee' as TypeEnum
    };
}
