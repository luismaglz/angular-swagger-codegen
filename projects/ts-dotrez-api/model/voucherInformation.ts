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
import { VoucherTransaction } from './voucherTransaction';


/**
 * Voucher information. This model describes a voucher information after being queried by the voucher code.
 */

    import { VoucherInformation<CAP>type</CAP> } from '../models/enums';
    import { VoucherInformation<CAP>status</CAP> } from '../models/enums';
    import { VoucherInformation<CAP>nameRestriction</CAP> } from '../models/enums';

export interface VoucherInformation { 
    /**
     * The total amount of the booking that is payable by the voucher.
     */
    calculatedAmount?: number;
    /**
     * The foreign currency code.
     */
    foreignCurrencyCode?: string;
    /**
     * The voucher key.
     */
    voucherKey?: string;
    /**
     * The voucher expiration date.
     */
    expiration?: Date;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The customer number associated to the voucher.
     */
    customerNumber?: string;
    /**
     * The amount of foreign currency.
     */
    foreignAmount?: number;
    /**
     * The reference number for the voucher.
     */
    reference?: string;
    /**
     * The amount of currency.
     */
    amount?: number;
    /**
     * The total amount of the booking that is payable by the voucher,  converted to a foreign currency specified by the ForeignCalculatededCurrencyCode.  Used if the booking and voucher are in different currencies.
     */
    foreignCalculatedAmount?: number;
    /**
     * The voucher type.
     */
    type?: VoucherInformation<CAP>type</CAP>;
    /**
     * The voucher configuration code.
     */
    configurationCode?: string;
    /**
     * The currency code for used with the ForeignCalculatedAmount field.  Used if the booking and voucher are in different currencies, this would be the currency code being converted to.
     */
    foreignCalculatededCurrencyCode?: string;
    /**
     * The password for the voucher.
     */
    password?: string;
    /**
     * The voucher status.
     */
    status?: VoucherInformation<CAP>status</CAP>;
    /**
     * Returns the original available amount of the voucher, converted to a foreign currency.  Used if the booking and voucher are in different currencies.
     */
    foreignReversableAmount?: number;
    /**
     * The record locator associated with the voucher.
     */
    recordLocator?: string;
    /**
     * The availability count of the voucher.
     */
    available?: number;
    /**
     * The name restriction for the voucher.
     */
    nameRestriction?: VoucherInformation<CAP>nameRestriction</CAP>;
    /**
     * The voucher transactions.
     */
    transactions?: Array<VoucherTransaction>;
    /**
     * The first name associated with the voucher.
     */
    firstName?: string;
    /**
     * The total amount of the booking that the voucher can pay for up to the full amount of the voucher.
     */
    redeemableAmount?: number;
    /**
     * The last name associated with the voucher.
     */
    lastName?: string;
    /**
     * Returns the original available amount of the voucher.
     */
    reversableAmount?: number;
    /**
     * The person key associated with the voucher.
     */
    personKey?: string;
    /**
     * The currency code for used with the ForeignAvailableAmount field.  Used if the booking and voucher are in different currencies, this   would be the currency code being converted to.
     */
    foreignAvailableCurrencyCode?: string;
    /**
     * The voucher issuance key.
     */
    voucherIssuanceKey?: string;
}
