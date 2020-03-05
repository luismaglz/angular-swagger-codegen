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
 * The payment settings.
 */

export interface PaymentSettings { 
    /**
     * Hold the default comment that will be applied for a credit shell payment.
     */
    defaultCommentForCreditShell?: string;
    /**
     * Web declined payment hold period.
     */
    webDeclinedPaymentHoldPeriod?: number;
    /**
     * Direct declined payment hold period.
     */
    directDeclinedPaymentHoldPeriod?: number;
    /**
     * GDS declined payment hold period.
     */
    gdsDeclinedPaymentHoldPeriod?: number;
    /**
     * API declined payment hold period.
     */
    apiDeclinedPaymentHoldPeriod?: number;
    /**
     * Auto cancel charge back payment holds.
     */
    autoCancelChargeBackPaymentHolds?: boolean;
    /**
     * Allow zero amount form of payment.
     */
    allowZeroAmountFormOfPayment?: boolean;
    /**
     * Include in first installment fee codes.
     */
    includeInFirstInstallmentFeeCodes?: Array<string>;
    /**
     * Retain hold status until payment authorization.
     */
    retainHoldStatusUntilPaymentAuthorization?: boolean;
}
