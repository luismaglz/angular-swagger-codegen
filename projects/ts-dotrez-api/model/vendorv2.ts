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

    import { Vendorv2PaymentAction } from '../types/enums';

export interface Vendorv2 { 
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
     * Minimum advance purchase days.
     */
    minimumAdvancePurchaseDays?: number;
    /**
     * The payment action.
     */
    paymentAction?: Vendorv2PaymentAction;
    /**
     * Supplier information.
     */
    supplier?: Supplier;
}
