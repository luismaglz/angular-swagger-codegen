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
 * SSR request for a single journey Ssr.
 */
import * as Enums from '../types/enums';

export interface JourneySsrRequest { 
    /**
     * The journey key.
     */
    journeyKey: string;
    /**
     * The Ssr code.
     */
    ssrCode: string;
    /**
     * The number of items to include. Defaults to 1.
     */
    count?: number;
    /**
     * Notes associated with this Ssr.
     */
    note?: string;
}
