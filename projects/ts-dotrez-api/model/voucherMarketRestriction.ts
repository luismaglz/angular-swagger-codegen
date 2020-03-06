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
 * The voucher market restriction model.
 */

    import { VoucherMarketRestrictionRestrictionType } from '../types/enums';
    import { VoucherMarketRestrictionDirectionality } from '../types/enums';
    import { VoucherMarketRestrictionRegionType } from '../types/enums';
    import { VoucherMarketRestrictionTravelRegionType } from '../types/enums';

export interface VoucherMarketRestriction { 
    /**
     * The market restriction type.
     */
    restrictionType?: VoucherMarketRestrictionRestrictionType;
    /**
     * The voucher configuration code.
     */
    voucherConfigurationCode?: string;
    /**
     * The directionality of the voucher market restriction.
     */
    directionality?: VoucherMarketRestrictionDirectionality;
    /**
     * The sequence number of the voucher restriction.
     */
    sequence?: number;
    /**
     * The region type.
     */
    regionType?: VoucherMarketRestrictionRegionType;
    /**
     * The region code.
     */
    regionCode?: string;
    /**
     * The travel region type.
     */
    travelRegionType?: VoucherMarketRestrictionTravelRegionType;
    /**
     * The travel region code.
     */
    travelRegionCode?: string;
}
