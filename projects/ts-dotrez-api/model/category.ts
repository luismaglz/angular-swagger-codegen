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
 * Defines the product category.
 */
import * as Enums from '../types/enums';

export interface Category { 
    /**
     * The category code.
     */
    code?: string;
    /**
     * The culture code.
     */
    cultureCode?: string;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The description.
     */
    description?: string;
    /**
     * The display sequence.
     */
    displaySequence?: number;
    /**
     * The minimum price.
     */
    minimumPrice?: number;
    /**
     * The maximum price.
     */
    maximumPrice?: number;
}
