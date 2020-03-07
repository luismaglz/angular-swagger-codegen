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
 * Defines the product results criteria returned.
 */
import * as Enums from '../enums';

export interface AddOnCriteria { 
    /**
     * The department code.
     */
    departmentCode?: string;
    /**
     * The company code.
     */
    companyCode?: string;
    /**
     * The rating code.
     */
    ratingCode?: string;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The category code to search with.
     */
    categoryCode?: string;
}
