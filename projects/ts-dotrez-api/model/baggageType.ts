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

    import { BaggageTypeBagWeightType } from '../types/enums';

export interface BaggageType { 
    /**
     * Gets or sets the baggage type code.
     */
    baggageTypeCode: string;
    /**
     * Gets or sets the bag weight type.
     */
    bagWeightType?: BaggageTypeBagWeightType;
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
