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
import { VoucherMarketInformation } from './voucherMarketInformation';


/**
 * The voucher issuance model.
 */
export interface VoucherIssuance { 
    /**
     * The voucher issuance key.
     */
    voucherIssuanceKey?: string;
    /**
     * The voucher configuration code.
     */
    configurationCode: string;
    /**
     * The voucher expiration date.
     */
    expiration?: Date;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The voucher issuance reason code.
     */
    issuanceReasonCode: string;
    /**
     * The amount of currency.
     */
    amount?: number;
    /**
     * The voucher issuance note.
     */
    note?: string;
    /**
     * Market details associated with the voucher issuance.
     */
    market?: VoucherMarketInformation;
}
