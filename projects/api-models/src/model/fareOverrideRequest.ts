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
 * Defines a fare override.
 */
import * as Enums from '../enums';

export interface FareOverrideRequest { 
    /**
     * The new fare amount.
     */
    amount: number;
    /**
     * Whether the price being overridden is a published price or a discounted price
     */
    overridePublishedPrice?: boolean;
}
