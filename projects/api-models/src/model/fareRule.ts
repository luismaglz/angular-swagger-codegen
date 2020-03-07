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
 * Defines a fare rule and its data.
 */
import * as Enums from '../enums';

export interface FareRule { 
    /**
     * The fare sell key that is in reference to the fare rule.
     */
    fareSellKey?: string;
    /**
     * The fare rule content.
     */
    content?: string;
}
