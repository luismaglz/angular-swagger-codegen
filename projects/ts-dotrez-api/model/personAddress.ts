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
 * Defines a unique person address.
 */

export interface PersonAddress { 
    /**
     * The unique person address key.
     */
    personAddressKey?: string;
    /**
     * The type of address.
     */
    addressTypeCode: string;
    /**
     * Flag indicating if the address is the persons default.
     */
    _default?: boolean;
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
