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
 * Defines three D secure.
 */

export interface ThreeDSecure { 
    /**
     * The browser agent being used.
     */
    browserUserAgent?: string;
    /**
     * The browser agent accept.
     */
    browserAccept?: string;
    /**
     * The remote IP address.
     */
    remoteIpAddress?: string;
    /**
     * The return URL from the bank.
     */
    termUrl?: string;
    /**
     * The payload that will be sent to the bank site.
     */
    paReq?: string;
    /**
     * The URL to redirect to for TDS (aka the bank).
     */
    acsUrl?: string;
    /**
     * The response that comes back from the bank.
     */
    paRes?: string;
    /**
     * The result of 3DS.
     */
    authResult?: string;
    /**
     * The encrypted string of prof that 3DS was processed.
     */
    cavv?: string;
    /**
     * The algorithm that created the Cavv.
     */
    cavvAlgorithm?: string;
    /**
     * The electronic commerce indicator (the level of 3DS).
     */
    eci?: string;
    /**
     * The transaction ID specific to the 3DS 3rd party processing.
     */
    xid?: string;
    /**
     * Flag that indicates if more validation is needed.
     */
    applicable?: boolean;
    /**
     * Flag indicating if 3DS was successful.
     */
    successful?: boolean;
}