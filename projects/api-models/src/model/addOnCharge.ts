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
 * Defines a booking add ons charge.
 */
import * as Enums from '../enums';

export interface AddOnCharge { 
    /**
     * The charge type.
     */
    type?: 'FarePrice'|'Discount'|'IncludedTravelFee'|'IncludedTax'|'TravelFee'|'Tax'|'ServiceCharge'|'PromotionDiscount'|'ConnectionAdjustmentAmount'|'AddOnsPrice'|'FarePoints'|'DiscountPoints'|'IncludedAddOnsFee'|'AddOnsFee'|'AddOnsMarkup'|'FareSurcharge'|'Loyalty'|'AddOnsCancelFee'|'Calculated'|'Note'|'Points'|'DynamicFareAdjustment';
    /**
     * The charge code.
     */
    code?: string;
    /**
     * The charge ticket code.
     */
    ticketCode?: string;
    /**
     * The charge collection type.
     */
    collection?: Enums.CollectType;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The charged amount.
     */
    amount?: number;
    /**
     * The charge details.
     */
    details?: string;
}
