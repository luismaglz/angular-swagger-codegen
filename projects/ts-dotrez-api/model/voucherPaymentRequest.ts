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
 * Model to request a voucher payment.
 */
import * as Enums from '../types/enums';

export interface VoucherPaymentRequest { 
    /**
     * The voucher reference code.
     */
    referenceCode: string;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The payment method to apply the voucher to. This will default to primary voucher code.
     */
    paymentMethodCode: string;
    /**
     * The amount of currency.
     */
    amount?: number;
}
