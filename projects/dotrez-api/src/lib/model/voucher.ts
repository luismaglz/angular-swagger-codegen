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
    type?: Voucher.TypeEnum;
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
    status?: Voucher.StatusEnum;
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
export namespace Voucher {
    export type TypeEnum = 'Credit' | 'SingleUseCredit' | 'Service' | 'SingleUse' | 'MultiUse' | 'SingleUseNegativeAdjustment';
    export const TypeEnum = {
        Credit: 'Credit' as TypeEnum,
        SingleUseCredit: 'SingleUseCredit' as TypeEnum,
        Service: 'Service' as TypeEnum,
        SingleUse: 'SingleUse' as TypeEnum,
        MultiUse: 'MultiUse' as TypeEnum,
        SingleUseNegativeAdjustment: 'SingleUseNegativeAdjustment' as TypeEnum
    };
    export type StatusEnum = 'Available' | 'Void' | 'Redeemed' | 'Expired';
    export const StatusEnum = {
        Available: 'Available' as StatusEnum,
        Void: 'Void' as StatusEnum,
        Redeemed: 'Redeemed' as StatusEnum,
        Expired: 'Expired' as StatusEnum
    };
}
