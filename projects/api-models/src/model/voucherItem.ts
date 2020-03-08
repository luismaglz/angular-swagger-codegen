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
 * The voucher item model.
 */
import * as Enums from '../enums';

export interface VoucherItem { 
    /**
     * The created date for the voucher item.
     */
    createdDate?: Date;
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
     * The reference number for the voucher.
     */
    reference?: string;
    /**
     * The amount of currency.
     */
    amount?: number;
    /**
     * The voucher configuration code.
     */
    configurationCode?: string;
    /**
     * The voucher status.
     */
    status?: Enums.<ENUM>'Available'|'Void'|'Redeemed'|'Expired'</ENUM>;
    /**
     * The availability count of the voucher.
     */
    available?: number;
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
