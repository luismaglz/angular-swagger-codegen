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
import { PromotionSetting } from './promotionSetting';


/**
 * Defines a promotion model.
 */

export interface Promotion { 
    /**
     * The list of organizations that have access to the promotion.
     */
    allowedOrganizations?: Array<string>;
    /**
     * The promotion code.
     */
    code?: string;
    /**
     * The list of applicable promotion settings.
     */
    settings?: Array<PromotionSetting>;
    /**
     * The promotion discount is applied at the passenger level.
     */
    isPassengerPromotion?: boolean;
    /**
     * The promotion discount is applied to the entire booking.
     */
    isBookingPromotion?: boolean;
    /**
     * The description of the promotion.
     */
    description?: string;
    /**
     * The date that the promotion becomes active.
     */
    activeDate?: Date;
    /**
     * The date that the promotion is discontinued.
     */
    discontinueDate?: Date;
    /**
     * The discount fee code representing the calculated discount   for the promotion.
     */
    discontinueFeeCode?: string;
    /**
     * The list of fare types associated with the promotion.
     */
    fareTypes?: Array<string>;
    /**
     * The passenger discount code.
     */
    passengerDiscountCode?: string;
    /**
     * The passenger discount limit.
     */
    passengerDiscountLimit?: number;
    /**
     * The passenger discount set.
     */
    passengerDiscountSet?: number;
}
