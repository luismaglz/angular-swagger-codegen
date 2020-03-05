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
 * Defines a availability fare search criteria.
 */
export interface AvailabilityFareCriteria { 
    /**
     * The fare class control.
     */
    classControl?: AvailabilityFareCriteria.ClassControlEnum;
    /**
     * The max fare price.
     */
    maxPrice?: number;
    /**
     * The min fare price.
     */
    minPrice?: number;
    /**
     * Filters fares based on loyalty.
     */
    loyalty?: AvailabilityFareCriteria.LoyaltyEnum;
    /**
     * The list of fare types.
     */
    types?: Array<string>;
    /**
     * The list of fare classes.
     */
    classes?: Array<string>;
}
export namespace AvailabilityFareCriteria {
    export type ClassControlEnum = 'LowestFareClass' | 'CompressByProductClass' | 'Default';
    export const ClassControlEnum = {
        LowestFareClass: 'LowestFareClass' as ClassControlEnum,
        CompressByProductClass: 'CompressByProductClass' as ClassControlEnum,
        Default: 'Default' as ClassControlEnum
    }
    export type LoyaltyEnum = 'MonetaryOnly' | 'PointsOnly' | 'PointsAndMonetary' | 'PreserveCurrent';
    export const LoyaltyEnum = {
        MonetaryOnly: 'MonetaryOnly' as LoyaltyEnum,
        PointsOnly: 'PointsOnly' as LoyaltyEnum,
        PointsAndMonetary: 'PointsAndMonetary' as LoyaltyEnum,
        PreserveCurrent: 'PreserveCurrent' as LoyaltyEnum
    }
}
