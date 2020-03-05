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
 * Defines information needed for a generic payment requested with ThreeDSecure validation.
 */

export interface ThreeDSecurePaymentMethodRequestv2 { 
    paReq?: string;
    paRes?: string;
    /**
     * Payment method code.
     */
    paymentMethodCode: string;
    /**
     * The amount to apply.
     */
    amount: number;
    paymentTransactionKey?: string;
    paymentFields?: DccRequestBasev2PaymentFields;
    /**
     * The currency code. This will default to the bookings currency code.
     */
    currencyCode?: string;
    /**
     * The requested number of installments. Defaults to 1.
     */
    installments?: number;
}
