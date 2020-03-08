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
 * Defines a direct currency conversion.
 */
import * as Enums from '../enums';

export interface DirectCurrencyConversion { 
    /**
     * The rate ID.
     */
    rateId?: string;
    /**
     * The currency code converted to.
     */
    currencyCode?: string;
    /**
     * The conversion rate value.
     */
    rateValue?: number;
    /**
     * The conversion rate amount.
     */
    amount?: number;
    /**
     * The put in state value.
     */
    putInState?: string;
    /**
     * The conversion status.
     */
    status?: Enums.DirectCurrencyConversionStatus;
    /**
     * Flag indicating if DCC is applicable.
     */
    applicable?: boolean;
}
