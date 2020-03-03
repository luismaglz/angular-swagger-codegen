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
 * The passenger discount model.
 */
export interface PassengerDiscount { 
    /**
     * The passenger discount code.
     */
    passengerDiscountCode?: string;
    /**
     * The Name.
     */
    name?: string;
    /**
     * The passenger discount type.
     */
    passengerDiscountType?: PassengerDiscount.PassengerDiscountTypeEnum;
    /**
     * The in active.
     */
    inActive?: boolean;
    /**
     * The allowed.
     */
    allowed?: boolean;
}
export namespace PassengerDiscount {
    export type PassengerDiscountTypeEnum = 'Default' | 'Regular' | 'Loyalty';
    export const PassengerDiscountTypeEnum = {
        Default: 'Default' as PassengerDiscountTypeEnum,
        Regular: 'Regular' as PassengerDiscountTypeEnum,
        Loyalty: 'Loyalty' as PassengerDiscountTypeEnum
    }
}
