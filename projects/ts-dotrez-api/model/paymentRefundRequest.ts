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
import { DccRequestBasev2PaymentFields } from './dccRequestBasev2PaymentFields';


/**
 * Defines information needed for a generic voucher payment requested to be added to the booking in state.
 */

export interface PaymentRefundRequest { 
    /**
     * The payment identifier used if this refund is being reversed from an existing payment.
     */
    parentPaymentKey: string;
    /**
     * The amount to apply.
     */
    amount: number;
    paymentFields?: DccRequestBasev2PaymentFields;
    /**
     * The currency code. This will default to the bookings currency code.
     */
    currencyCode?: string;
    /**
     * Payment method code.
     */
    paymentMethodCode: string;
    /**
     * The account transaction code associated with the account.
     */
    accountTransactionCode?: string;
    /**
     * The payment refund comment.
     */
    comment?: string;
}
