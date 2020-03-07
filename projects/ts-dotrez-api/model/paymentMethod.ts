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
import { PaymentMethodPaymentMethodFields } from './paymentMethodPaymentMethodFields';


/**
 * The payment method model.
 */

    import { PaymentMethod<CAP>dccType</CAP> } from '../types/enums';
    import { PaymentMethod<CAP>paymentMethodType</CAP> } from '../types/enums';
    import { PaymentMethod<CAP>paymentRefundType</CAP> } from '../types/enums';
    import { PaymentMethod<CAP>refundCurrencyControl</CAP> } from '../types/enums';

export interface PaymentMethod { 
    /**
     * The payment method code for this payment method.
     */
    paymentMethodCode: string;
    /**
     * The allow deposit flag for this payment method.
     */
    allowDeposit?: boolean;
    /**
     * <b>Deprecated</b> - Please use api/nsk/v1/settings/general/codes endpoint to verify role based access instead.
     */
    allowed?: boolean;
    /**
     * The allow zero amount flag for this payment method.
     */
    allowZeroAmount?: boolean;
    /**
     * The commissionable flag for this payment method.
     */
    commissionable?: boolean;
    /**
     * The DCC type for this payment method.
     */
    dccType?: <ENUM>'None'|'ZeroRate'|'FullAmount'</ENUM>;
    /**
     * The disallow partial refund flag for this payment method.
     */
    disallowPartialRefund?: boolean;
    /**
     * The fee code for this payment method.
     */
    feeCode?: string;
    /**
     * The inactive flag for this payment method.
     */
    inActive?: boolean;
    /**
     * The max installments for this payment method.
     */
    maxInstallments?: number;
    /**
     * The name for this payment method.
     */
    name: string;
    paymentMethodFields?: PaymentMethodPaymentMethodFields;
    /**
     * The payment method type for this payment method.
     */
    paymentMethodType?: <ENUM>'ExternalAccount'|'PrePaid'|'AgencyAccount'|'CustomerAccount'|'Voucher'|'Loyalty'</ENUM>;
    /**
     * The payment refund type for this payment method.
     */
    paymentRefundType?: <ENUM>'NotAllowed'|'LineItemLevel'|'AccountLevel'|'BookingLevel'</ENUM>;
    /**
     * The proportional refund flag for this payment method.
     */
    proportionalRefund?: boolean;
    /**
     * The refundable by agent flag for this payment method.
     */
    refundableByAgent?: boolean;
    /**
     * The refund currency control for this payment method.
     */
    refundCurrencyControl?: <ENUM>'UseCollectedCurrency'|'UseQuotedCurrency'</ENUM>;
    /**
     * The hours of restriction for this payment method.
     */
    restrictionHours?: number;
    /**
     * The system controlled flag for this payment method.
     */
    systemControlled?: boolean;
    /**
     * The trace queue code for this payment method.
     */
    traceQueueCode?: string;
    /**
     * The validation required flag for this payment method.
     */
    validationRequired?: boolean;
}
