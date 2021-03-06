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
 * The booking fee settings.
 */
import * as Enums from '../enums';

export interface FeeSettings { 
    /**
     * Gets or sets the flag allowing negative fees.
     */
    allowNegativeFees?: boolean;
    /**
     * Gets or sets the flag allowing other currency fees.
     */
    allowOtherCurrencies?: boolean;
    /**
     * Gets or sets the timeframe for the cancel grace period.
     */
    cancelGracePeriod?: string;
    /**
     * Gets or sets the flag that allows displaying taxes for fees on the breakdown.
     */
    displayTaxesForFeesOnBreakdown?: boolean;
    /**
     * Gets or sets the restriction for fee description fields.
     */
    feeDescription?: Enums.FieldControlType;
}
