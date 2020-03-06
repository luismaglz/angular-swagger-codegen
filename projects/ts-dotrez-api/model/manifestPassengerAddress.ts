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
 * The Manifest Passenger Address.
 */

    import { ManifestPassengerAddress<CAP>status</CAP> } from '../models/enums';

export interface ManifestPassengerAddress { 
    /**
     * The CountryName property.
     */
    countryName?: string;
    /**
     * The addresses APIS status.
     */
    status?: ManifestPassengerAddress<CAP>status</CAP>;
    /**
     * Company name associated with this address.
     */
    companyName?: string;
    /**
     * The address line one.
     */
    lineOne?: string;
    /**
     * The unique identifier for a passenger within a booking.
     */
    passengerId?: number;
    /**
     * The unique address identifier.
     */
    passengerAddressKey?: string;
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
