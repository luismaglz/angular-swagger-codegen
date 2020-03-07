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
 * Model with the information needed to calculate from one currency to another.
 */
import * as Enums from '../types/enums';

export interface CurrencyConversion { 
    /**
     * The converted amount. This will be in the ToCurrencyCode currency.
     */
    convertedAmount: number;
    /**
     * The currency code that the amount is currently in.
     */
    fromCurrencyCode: string;
    /**
     * Gets or sets the exchange rate for this external rate.
     */
    exchangeRate: number;
    /**
     * The currency code we want the amount converted to.
     */
    toCurrencyCode: string;
    /**
     * The default rounding factor of the currency conversion.
     */
    roundingFactor?: number;
    /**
     * The amount to be converted. This will be in the FromCurrencyCode currency.
     */
    amount: number;
    /**
     * The marketing rounding factor of the currency conversion.
     */
    marketingRoundingFactor?: number;
}
