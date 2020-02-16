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
 * Defines a specific person's stored payment.
 */
export interface PersonStoredPayment { 
    /**
     * The unique stored payment key.
     */
    storedPaymentKey?: string;
    /**
     * The account number.
     */
    accountNumber: string;
    /**
     * The type of payment being added.
     */
    paymentMethodType: PersonStoredPayment.PaymentMethodTypeEnum;
    /**
     * The name of the account.
     */
    accountName?: string;
    /**
     * The expiration.
     */
    expiration?: Date;
    /**
     * The payment method code.
     */
    paymentMethodCode: string;
    /**
     * Indicates if the stored payment is the default.
     */
    _default?: boolean;
}
export namespace PersonStoredPayment {
    export type PaymentMethodTypeEnum = 'ExternalAccount' | 'PrePaid' | 'AgencyAccount' | 'CustomerAccount' | 'Voucher' | 'Loyalty';
}
