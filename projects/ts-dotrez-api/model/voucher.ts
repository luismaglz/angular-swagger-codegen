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
 * The voucher model.
 */

    import { Voucher<CAP>type<CAP> } from '../models/enums';
    import { Voucher<CAP>status<CAP> } from '../models/enums';

export interface Voucher { 
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
     * The voucher type.
     */
    type?: Voucher<CAP>type<CAP>;
    /**
     * The voucher configuration code.
     */
    configurationCode?: string;
    /**
     * The password for the voucher.
     */
    password?: string;
    /**
     * The voucher status.
     */
    status?: Voucher<CAP>status<CAP>;
    /**
     * The record locator associated with the voucher.
     */
    recordLocator?: string;
    /**
     * The availability count of the voucher.
     */
    available?: number;
    /**
     * The voucher transactions.
     */
    transactions?: Array<VoucherTransaction>;
    /**
     * The first name associated with the voucher.
     */
    firstName?: string;
    /**
     * The last name associated with the voucher.
     */
    lastName?: string;
    /**
     * The person key associated with the voucher.
     */
    personKey?: string;
    /**
     * The voucher issuance key.
     */
    voucherIssuanceKey?: string;
}
