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
 * SSR request for a single Ssr.
 */

export interface SsrRequest { 
    /**
     * The passenger key.
     */
    passengerKey: string;
    /**
     * The Ssr code.
     */
    ssrCode: string;
    /**
     * Indicates if the SSR is part of a bundle.
     */
    inBundle?: boolean;
    /**
     * The number of items to include. Defaults to 1.
     */
    count?: number;
    /**
     * Notes associated with this Ssr.
     */
    note?: string;
}
