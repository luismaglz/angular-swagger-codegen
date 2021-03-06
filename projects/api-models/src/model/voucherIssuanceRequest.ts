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
 * The voucher issuance request model.
 */
import * as Enums from '../enums';

export interface VoucherIssuanceRequest { 
    /**
     * The record locator.
     */
    recordLocator?: string;
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
     * The passenger's first name.
     */
    firstName?: string;
    /**
     * The voucher issuance reason code.
     */
    issuanceReasonCode: string;
    /**
     * The amount of currency.
     */
    amount?: number;
    /**
     * The passenger's last name.
     */
    lastName?: string;
    /**
     * The voucher issuance note.
     */
    note?: string;
    /**
     * The person key.
     */
    personKey?: string;
    /**
     * Market details associated with the voucher issuance.
     */
    market?: VoucherMarketInformation;
    /**
     * The number of vouchers to issue.
     */
    quantity?: number;
    /**
     * The customer number.
     */
    customerNumber?: string;
    /**
     * Decides whether to send reference files over ftp for a HighVolumeBatch of vouchers.
     */
    sendFiles?: boolean;
    /**
     * The SSR filter value in this object.
     */
    ssrCode?: string;
}
