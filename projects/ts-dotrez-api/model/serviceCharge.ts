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
 * Model that represents the fare service charge information.
 */

    import { ServiceChargeType } from '../types/enums';
    import { ServiceChargeCollectType } from '../types/enums';

export interface ServiceCharge { 
    /**
     * The service charge amount.
     */
    amount?: number;
    /**
     * The service charge code.
     */
    code?: string;
    /**
     * The service charge detail.
     */
    detail?: string;
    /**
     * The service charge type.
     */
    type?: ServiceChargeType;
    /**
     * The service charge collect type.
     */
    collectType?: ServiceChargeCollectType;
    /**
     * The service charge currency code.
     */
    currencyCode?: string;
    /**
     * The service charge foreign currency code.
     */
    foreignCurrencyCode?: string;
    /**
     * The service charge foreign amount.
     */
    foreignAmount?: number;
    /**
     * The service charge ticket code.
     */
    ticketCode?: string;
}
