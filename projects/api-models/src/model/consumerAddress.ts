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
 * Defines a consumer address.
 */
import * as Enums from '../enums';

export interface ConsumerAddress { 
    /**
     * The address country.
     */
    county?: string;
    /**
     * The address line one.
     */
    lineOne?: string;
    /**
     * The address line two.
     */
    lineTwo?: string;
    /**
     * The address line 3.
     */
    lineThree?: string;
    /**
     * The country code.
     */
    countryCode?: string;
    /**
     * The province state.
     */
    provinceState?: string;
    /**
     * The city.
     */
    city?: string;
    /**
     * The postal code.
     */
    postalCode?: string;
}
