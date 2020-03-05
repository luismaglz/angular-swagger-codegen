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
 * Defines a unique locator for reference.
 */

export interface RecordLocator { 
    /**
     * The unique record locator key.
     */
    recordLocatorKey?: string;
    /**
     * The record code.
     */
    recordCode?: string;
    /**
     * The system domain code.
     */
    systemDomainCode?: string;
    /**
     * The owning system code for the booking.
     */
    owningSystemCode?: string;
    /**
     * The system code of where the booking was created.
     */
    bookingSystemCode?: string;
    /**
     * The interaction purpose.
     */
    interactionPurpose?: string;
    /**
     * The hosted carrier's code.
     */
    hostedCarrierCode?: string;
}
