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
 * Represents the base class for a country model.
 */
import * as Enums from '../types/enums';

export interface CountryBase { 
    /**
     * Are we required to check APIS documents.
     */
    apisCheckDocuments?: boolean;
    /**
     * Defines whether or not this Arrival Station requires APIS.
     */
    apisRequiredInbound?: boolean;
    /**
     * Defines whether or not this departure station requires APIS.
     */
    apisRequiredOutbound?: boolean;
    /**
     * Defines whether or not this arrival station requires APPS.
     */
    appsRequiredInbound?: boolean;
    /**
     * Defines whether or not this departure station requires APPS.
     */
    appsRequiredOutbound?: boolean;
    /**
     * Represents the two-digit country code.
     */
    countryCode: string;
    /**
     * Represents the three-digit country code.
     */
    countryCode3C: string;
}
