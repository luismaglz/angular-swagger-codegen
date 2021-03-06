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
import { BaggageUsageDetails } from './baggageUsageDetails';


/**
 * Defines a baggage allowance.
 */
import * as Enums from '../enums';

export interface BaggageAllowance { 
    /**
     * The unique identifier for the baggage allowance.
     */
    baggageAllowanceKey?: string;
    /**
     * The journey key.
     */
    journeyKey?: string;
    /**
     * The list of flight segment keys.
     */
    segmentKeys?: Array<string>;
    /**
     * The passenger key.
     */
    passengerKey?: string;
    /**
     * The allowance behavior.
     */
    behavior?: Enums.BaggageAllowanceBehavior;
    /**
     * The list of baggage type codes.
     */
    typeCodes?: Array<string>;
    /**
     * The maximum number of pieces.
     */
    maximumPieces?: number;
    /**
     * The maximum weight allowed per piece.
     */
    maximumWeightPerPiece?: number;
    /**
     * The total weight for all pieces.
     */
    totalWeight?: number;
    /**
     * The weight type for MaximumWeightPerPiece and TotalWeight.
     */
    weightType?: Enums.WeightType;
    /**
     * The associated baggage usage details.
     */
    baggageUsage?: BaggageUsageDetails;
}
