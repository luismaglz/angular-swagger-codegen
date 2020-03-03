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
export interface LowFarePassenger { 
    /**
     * Passenger Discount Code.
     */
    discountCode?: string;
    /**
     * Fare Amount for Passenger Type.
     */
    fareAmount?: number;
    /**
     * Passenger Type.
     */
    type?: string;
    /**
     * Fare Point Amount.
     */
    farePointAmount?: number;
    /**
     * Taxes and Fees Amount.
     */
    taxesAndFeesAmount?: number;
}
