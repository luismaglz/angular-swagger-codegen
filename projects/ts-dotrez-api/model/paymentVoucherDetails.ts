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
 * Payment voucher details. This describes a voucher applied to a payment.
 */
import * as Enums from '../types/enums';

export interface PaymentVoucherDetails { 
    /**
     * The voucher ID.
     */
    id?: number;
    /**
     * The vouchers transactions ID.
     */
    transactionId?: number;
    /**
     * Flag indicating if the voucher restrictions were overridden.
     */
    overrideRestrictions?: boolean;
    /**
     * The amount applied of the voucher.
     */
    overrideAmount?: boolean;
    /**
     * The record locator attached to the voucher.
     */
    recordLocator?: string;
}
