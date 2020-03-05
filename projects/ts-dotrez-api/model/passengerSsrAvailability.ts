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
 * Model containing the details about the availability and price of the Ssr for a specific passenger.
 */

export interface PassengerSsrAvailability { 
    /**
     * The Ssr key that identifies the ssr, passenger and trip information.
     */
    ssrKey?: string;
    /**
     * The passenger key.
     */
    passengerKey?: string;
    /**
     * Gets the SSR price.
     */
    price?: number;
}
