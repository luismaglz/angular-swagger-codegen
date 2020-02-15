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
 * The baggage type model.
 */
export interface BaggageType { 
    /**
     * Gets or sets the baggage type code.
     */
    baggageTypeCode: string;
    /**
     * Gets or sets the bag weight type.
     */
    bagWeightType?: BaggageType.BagWeightTypeEnum;
    /**
     * Gets or sets the free bag flag.
     */
    freeBag?: boolean;
    /**
     * Gets or sets the inactive flag.
     */
    inActive?: boolean;
    /**
     * Gets or sets the name of the baggage type.
     */
    name?: string;
    /**
     * Gets or sets the weight reduced by value.
     */
    weightReducedBy?: number;
}
export namespace BaggageType {
    export type BagWeightTypeEnum = 'Default' | 'Pounds' | 'Kilograms';
    export const BagWeightTypeEnum = {
        Default: 'Default' as BagWeightTypeEnum,
        Pounds: 'Pounds' as BagWeightTypeEnum,
        Kilograms: 'Kilograms' as BagWeightTypeEnum
    };
}
