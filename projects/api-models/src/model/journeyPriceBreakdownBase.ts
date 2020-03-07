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
 * Defines the journey price breakdown base.
 */
import * as Enums from '../enums';

export interface JourneyPriceBreakdownBase { 
    /**
     * The journey price total.
     */
    totalAmount?: number;
    /**
     * The journey points total.
     */
    totalPoints?: number;
    /**
     * The journey taxes total.
     */
    totalTax?: number;
    /**
     * The journey discount total.
     */
    totalDiscount?: number;
}
