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
import { DirectCurrencyConversion } from './directCurrencyConversion';
import { PaymentAmounts } from './paymentAmounts';
import { PaymentAttachment } from './paymentAttachment';
import { PaymentDetails } from './paymentDetails';
import { PaymentVoucherDetails } from './paymentVoucherDetails';
import { PointOfSale } from './pointOfSale';
import { ThreeDSecure } from './threeDSecure';


/**
 * Defines an applied payment on the booking.
 */

    import { PaymentAuthorizationStatus } from '../types/enums';
    import { PaymentType } from '../types/enums';
    import { PaymentStatus } from '../types/enums';
    import { PaymentChannelType } from '../types/enums';

export interface Payment { 
    /**
     * The payment key that uniquely identifies the payment.
     */
    paymentKey?: string;
    /**
     * The payment method code.
     */
    code?: string;
    /**
     * Date when the card/payment is approved in the database.
     */
    approvalDate?: Date;
    /**
     * The payment detail information.
     */
    details?: PaymentDetails;
    /**
     * The payment amounts and currency codes.
     */
    amounts?: PaymentAmounts;
    /**
     * The banks auth code when funds are released.
     */
    authorizationCode?: string;
    /**
     * The real payment status that should never be exposed to the end user unless a agent.
     */
    authorizationStatus?: PaymentAuthorizationStatus;
    /**
     * The date restriction for a payment (when funds will be there).
     */
    fundedDate?: Date;
    /**
     * Used for credit shell payments and how to compute the expiration of the credit.
     */
    transactionCode?: string;
    /**
     * DCC payment details.
     */
    dcc?: DirectCurrencyConversion;
    /**
     * 3DS payment details.
     */
    threeDSecure?: ThreeDSecure;
    /**
     * The list of payment attachments.
     */
    attachments?: Array<PaymentAttachment>;
    /**
     * The date the payment was created on.
     */
    createdDate?: Date;
    /**
     * The date the payment was modified.
     */
    modifiedDate?: Date;
    /**
     * The payment method type.
     */
    type?: PaymentType;
    /**
     * The status of the booking (this is the safe status).
     */
    status?: PaymentStatus;
    /**
     * Flag that indicates if the payment is a result of a divide.
     */
    transferred?: boolean;
    /**
     * The channel type that the payment was made through.
     */
    channelType?: PaymentChannelType;
    /**
     * The payments point of sale information.
     */
    pointOfSale?: PointOfSale;
    /**
     * The payments source point of sale information.
     */
    sourcePointOfSale?: PointOfSale;
    /**
     * Flag indicating if the payment is a deposit.
     */
    deposit?: boolean;
    /**
     * Used to identify a credit shell, credit file and agency payments.
     */
    accountId?: number;
    /**
     * The applied voucher details.
     */
    voucher?: PaymentVoucherDetails;
    /**
     * Flag indicating if the payment has been added to state or not.
     */
    addedToState?: boolean;
    /**
     * The created agents ID.
     */
    createdAgentId?: number;
    /**
     * The modified agents ID.
     */
    modifiedAgentId?: number;
    /**
     * The reference to the payment.
     */
    reference?: number;
}
