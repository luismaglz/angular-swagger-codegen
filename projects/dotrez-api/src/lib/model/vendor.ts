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
import { Supplier } from './supplier';


/**
 * Defines a travel commerce vendor.
 */
export interface Vendor { 
    /**
     * The unique code for this vendor.
     */
    code: string;
    /**
     * Description of the vendor.
     */
    description?: string;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The culture code.
     */
    cultureCode?: string;
    /**
     * The recommended display sequence.
     */
    displaySequence?: number;
    /**
     * Active status.
     */
    active?: boolean;
    /**
     * The external vendor code.
     */
    externalVendorCode?: string;
    /**
     * Minimum advance purchase days.
     */
    minimumAdvancePurchaseDays?: number;
    /**
     * The payment action.
     */
    paymentAction?: Vendor.PaymentActionEnum;
    /**
     * Supplier information.
     */
    supplier?: Supplier;
}
export namespace Vendor {
    export type PaymentActionEnum = 'SellingSystemCollects' | 'PassThroughHold' | 'NoPaymentRequired' | 'ReferToSupplierMessage' | 'PassThroughCharge';
}
