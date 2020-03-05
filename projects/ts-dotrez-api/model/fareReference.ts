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
import { FareAvailabilityv2 } from './fareAvailabilityv2';
import { FareReferenceTotals } from './fareReferenceTotals';


/**
 * The fare reference represents a master reference of the full fare details.
 */
export interface FareReference { 
    /**
     * The summed up totals for the collection of fares.
     */
    readonly totals?: FareReferenceTotals;
    /**
     * Flag indicating if the fare reference is a sum of sector.
     */
    readonly isSumOfSector?: boolean;
    /**
     * The unique fare availability key.
     */
    fareAvailabilityKey?: string;
    /**
     * The collection of fares for this reference.
     */
    fares?: Array<FareAvailabilityv2>;
}
