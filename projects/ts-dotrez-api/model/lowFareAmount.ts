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
 * Low fare passengers contains the passenger type specific data.
 */
import * as Enums from '../types/enums';

export interface LowFareAmount { 
    /**
     * Fare Amount for Passenger Type.
     */
    fareAmount?: number;
    /**
     * Fare Point Amount.
     */
    farePointAmount?: number;
    /**
     * Taxes and Fees Amount.
     */
    taxesAndFeesAmount?: number;
}
