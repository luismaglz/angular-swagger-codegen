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
 * Defines a person's customer program.
 */

export interface PersonCustomerProgram { 
    /**
     * The unique person customer program key.
     */
    personCustomerProgramKey?: string;
    /**
     * The current point balance.
     */
    pointBalance?: number;
    /**
     * The program code.
     */
    programCode: string;
    /**
     * The unique program number for the person.
     */
    programNumber: string;
    /**
     * The current years qualifying points.
     */
    currentYearQualifyingPoints?: number;
    /**
     * The effective date.
     */
    effectiveDate?: Date;
    /**
     * The current years redeemable points.
     */
    currentYearRedeemablePoints?: number;
    /**
     * The expiration date.
     */
    expirationDate?: Date;
    /**
     * The lifetime accumulated qualifying points.
     */
    lifetimeAccumulatedQualifyingPoints?: number;
    /**
     * True if this is set as the default program.
     */
    _default?: boolean;
    /**
     * The lifetime accumulated redeemable points.
     */
    lifetimeAccumulatedRedeemablePoints?: number;
    /**
     * The program level.
     */
    programLevelCode?: string;
    /**
     * The qualifying points.
     */
    qualifyingPoints?: number;
    /**
     * The qualifying segments.
     */
    qualifyingSegments?: number;
    /**
     * The created date.
     */
    createdDate?: Date;
    /**
     * The modified date.
     */
    modifiedDate?: Date;
}
