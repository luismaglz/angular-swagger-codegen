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
export interface VoucherMarketRestriction { 
    /**
     * The market restriction type.
     */
    restrictionType?: VoucherMarketRestriction.RestrictionTypeEnum;
    /**
     * The voucher configuration code.
     */
    voucherConfigurationCode?: string;
    /**
     * The directionality of the voucher market restriction.
     */
    directionality?: VoucherMarketRestriction.DirectionalityEnum;
    /**
     * The sequence number of the voucher restriction.
     */
    sequence?: number;
    /**
     * The region type.
     */
    regionType?: VoucherMarketRestriction.RegionTypeEnum;
    /**
     * The region code.
     */
    regionCode?: string;
    /**
     * The travel region type.
     */
    travelRegionType?: VoucherMarketRestriction.TravelRegionTypeEnum;
    /**
     * The travel region code.
     */
    travelRegionCode?: string;
}
export namespace VoucherMarketRestriction {
    export type RestrictionTypeEnum = 'MustBeOne' | 'MustNot';
    export type DirectionalityEnum = 'None' | 'To' | 'From' | 'Between';
    export type RegionTypeEnum = 'Default' | 'Station' | 'City' | 'ProvinceState' | 'Country' | 'FeeZone' | 'SubZone' | 'Area' | 'All' | 'Mac';
    export type TravelRegionTypeEnum = 'Default' | 'Station' | 'City' | 'ProvinceState' | 'Country' | 'FeeZone' | 'SubZone' | 'Area' | 'All' | 'Mac';
}
