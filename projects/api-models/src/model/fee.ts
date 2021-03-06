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
 * Fee Model.
 */
import * as Enums from '../enums';

export interface Fee { 
    /**
     * Returns true if this fee can be manually added.
     */
    readonly canBeManuallyAdded?: boolean;
    /**
     * Returns true if this fee can be queried to check the default price.
     */
    readonly hasDefaultFeePrice?: boolean;
    /**
     * Returns true if the given fee code is charged per segment/leg.
     */
    readonly isFeeChargedPerSegment?: boolean;
    /**
     * <b>Deprecated</b> - Please use api/nsk/v1/settings/general/codes endpoint to verify role based access instead.
     */
    allowed?: boolean;
    /**
     * Gets or sets the charge limit of this fee.
     */
    chargeLimit?: number;
    /**
     * Gets or sets when the charge limit is applied to this fee.
     */
    chargeLimitMode?: Enums.ChargeLimitMode;
    /**
     * Gets or sets the charge limit for the travel component associated with this fee.
     */
    chargeLimitTravelComponent?: Enums.TravelComponent;
    /**
     * Gets or sets the commissionable flag for this fee.
     */
    commissionable?: boolean;
    /**
     * Gets or sets the country code for this fee.
     */
    countryCode?: string;
    /**
     * Gets or sets the description for this fee.
     */
    description?: string;
    /**
     * Gets or sets the display code for this fee.
     */
    displayCode?: string;
    /**
     * Gets or sets how this fee is applied.
     */
    feeApplication?: Enums.FeeApplication;
    /**
     * Gets or sets the code for this fee.
     */
    feeCode?: string;
    /**
     * Gets or sets the fee option mode for this fee.
     */
    feeOptionMode?: Enums.FeeOptionMode;
    /**
     * Gets or sets the fee type for this fee.
     */
    feeType?: Enums.FeeType;
    /**
     * Gets or sets the inactive flag for this fee.
     */
    inActive?: boolean;
    /**
     * Gets or sets the itemizable flag for this fee.
     */
    itemizable?: boolean;
    /**
     * Gets or sets the MinStopover of this fee.
     */
    minStopover?: number;
    /**
     * Gets or sets the International MinStopover of this fee.
     */
    minStopoverInternational?: number;
    /**
     * Gets or sets the name of this fee.
     */
    name?: string;
    /**
     * Gets or sets how the taxes are applied for this fee.
     */
    taxApplication?: Enums.TaxApplication;
    /**
     * Gets or sets the ticketable flag for this fee.
     */
    ticketable?: boolean;
    /**
     * Gets or sets the travel component associated with this fee.
     */
    travelComponent?: Enums.TravelComponent;
}
