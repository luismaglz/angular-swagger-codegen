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
 * The voucher transaction model.
 */
import * as Enums from '../enums';

export interface VoucherTransaction { 
    /**
     * The voucher transaction key.
     */
    voucherTransactionKey?: string;
    /**
     * The foreign currency code.
     */
    foreignCurrencyCode?: string;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The voucher transaction type.
     */
    type?: Enums.<ENUM>'Debit'|'Credit'|'Void'|'Reinstate'|'Adjustment'</ENUM>;
    /**
     * The amount of foreign currency.
     */
    foreignAmount?: number;
    /**
     * The amount of currency.
     */
    amount?: number;
    /**
     * The record locator associated with the voucher transaction.
     */
    recordLocator?: string;
}
