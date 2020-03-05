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
 * The time zone variation model.
 */

export interface TimeZoneVariation { 
    /**
     * Gets or sets the End UTC time variation.
     */
    endUtc?: Date;
    /**
     * Gets or sets the Start UTC time variation.
     */
    startUtc?: Date;
    /**
     * Gets or sets the variation.
     */
    variation?: number;
}
