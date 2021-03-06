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
 * Defines an amount base price and total price.
 */
import * as Enums from '../enums';

export interface Amount { 
    /**
     * The base amount value.
     */
    value?: number;
    /**
     * The total amount.
     */
    total?: number;
}
