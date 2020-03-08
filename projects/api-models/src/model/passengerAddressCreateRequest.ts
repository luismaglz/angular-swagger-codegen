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
 * Defines a passenger address create request.
 */
import * as Enums from '../enums';

export interface PassengerAddressCreateRequest { 
    /**
     * The addresses APIS status.
     */
    status?: Enums.ApisAddressStatus;
    /**
     * Company name associated with this address.
     */
    companyName?: string;
    /**
     * The address line one.
     */
    lineOne?: string;
    /**
     * Phone number associated with this address.
     */
    phone?: string;
    /**
     * The address line two.
     */
    lineTwo?: string;
    /**
     * Station code associated with this address.
     */
    stationCode?: string;
    /**
     * The address line 3.
     */
    lineThree?: string;
    /**
     * The email address associated with the address.
     */
    emailAddress?: string;
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
