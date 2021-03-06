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
 * Describes the availability criteria code criteria.
 */
import * as Enums from '../enums';

export interface AvailabilityCodeCriteria { 
    /**
     * The currency code for the fares.
     */
    currency?: string;
    /**
     * The fare discount code.
     */
    fareDiscountCode?: string;
    /**
     * The promotion code to be applied.
     */
    promotionCode?: string;
    /**
     * The organization to use when evaluating availability of private fares. If specified, this organization code will  also be used for evaluation of any organization rules on sales taxes and travel fees (if included in the response).  If blank or not specified, the logged-in user's organization will be used.
     */
    sourceOrganization?: string;
    /**
     * The current source point of sale organization on the PNR. May be blank or unspecified if the source point of sale  organization has not yet been set on the PNR. If blank or unspecified, the logged-in user's organization will be  used.
     */
    currentSourceOrganization?: string;
}
