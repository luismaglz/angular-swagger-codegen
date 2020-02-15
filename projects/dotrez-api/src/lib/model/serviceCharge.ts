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
 * Model that represents the fare service charge information.
 */
export interface ServiceCharge { 
    /**
     * The service charge amount.
     */
    amount?: number;
    /**
     * The service charge code.
     */
    code?: string;
    /**
     * The service charge detail.
     */
    detail?: string;
    /**
     * The service charge type.
     */
    type?: ServiceCharge.TypeEnum;
    /**
     * The service charge collect type.
     */
    collectType?: ServiceCharge.CollectTypeEnum;
    /**
     * The service charge currency code.
     */
    currencyCode?: string;
    /**
     * The service charge foreign currency code.
     */
    foreignCurrencyCode?: string;
    /**
     * The service charge foreign amount.
     */
    foreignAmount?: number;
    /**
     * The service charge ticket code.
     */
    ticketCode?: string;
}
export namespace ServiceCharge {
    export type TypeEnum = 'FarePrice' | 'Discount' | 'IncludedTravelFee' | 'IncludedTax' | 'TravelFee' | 'Tax' | 'ServiceCharge' | 'PromotionDiscount' | 'ConnectionAdjustmentAmount' | 'AddOnsPrice' | 'FarePoints' | 'DiscountPoints' | 'IncludedAddOnsFee' | 'AddOnsFee' | 'AddOnsMarkup' | 'FareSurcharge' | 'Loyalty' | 'AddOnsCancelFee' | 'Calculated' | 'Note' | 'Points' | 'DynamicFareAdjustment';
    export const TypeEnum = {
        FarePrice: 'FarePrice' as TypeEnum,
        Discount: 'Discount' as TypeEnum,
        IncludedTravelFee: 'IncludedTravelFee' as TypeEnum,
        IncludedTax: 'IncludedTax' as TypeEnum,
        TravelFee: 'TravelFee' as TypeEnum,
        Tax: 'Tax' as TypeEnum,
        ServiceCharge: 'ServiceCharge' as TypeEnum,
        PromotionDiscount: 'PromotionDiscount' as TypeEnum,
        ConnectionAdjustmentAmount: 'ConnectionAdjustmentAmount' as TypeEnum,
        AddOnsPrice: 'AddOnsPrice' as TypeEnum,
        FarePoints: 'FarePoints' as TypeEnum,
        DiscountPoints: 'DiscountPoints' as TypeEnum,
        IncludedAddOnsFee: 'IncludedAddOnsFee' as TypeEnum,
        AddOnsFee: 'AddOnsFee' as TypeEnum,
        AddOnsMarkup: 'AddOnsMarkup' as TypeEnum,
        FareSurcharge: 'FareSurcharge' as TypeEnum,
        Loyalty: 'Loyalty' as TypeEnum,
        AddOnsCancelFee: 'AddOnsCancelFee' as TypeEnum,
        Calculated: 'Calculated' as TypeEnum,
        Note: 'Note' as TypeEnum,
        Points: 'Points' as TypeEnum,
        DynamicFareAdjustment: 'DynamicFareAdjustment' as TypeEnum
    };
    export type CollectTypeEnum = 'SellerChargeable' | 'ExternalChargeable' | 'SellerNonChargeable' | 'ExternalNonChargeable' | 'ExternalChargeableImmediate';
    export const CollectTypeEnum = {
        SellerChargeable: 'SellerChargeable' as CollectTypeEnum,
        ExternalChargeable: 'ExternalChargeable' as CollectTypeEnum,
        SellerNonChargeable: 'SellerNonChargeable' as CollectTypeEnum,
        ExternalNonChargeable: 'ExternalNonChargeable' as CollectTypeEnum,
        ExternalChargeableImmediate: 'ExternalChargeableImmediate' as CollectTypeEnum
    };
}
