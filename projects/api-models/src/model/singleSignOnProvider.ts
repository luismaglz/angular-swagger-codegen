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
 * Defines the single sign on credentials.
 */
import * as Enums from '../enums';

export interface SingleSignOnProvider { 
    /**
     * The single sign on provider name.
     */
    name?: string;
    /**
     * The single sign on provider authorization endpoint.
     */
    authorizationEndpoint?: string;
    /**
     * The single sign on provider token endpoint.
     */
    tokenEndpoint?: string;
    /**
     * The single sign on provider client identifier.
     */
    clientIdentifier?: string;
    /**
     * The single sign on type.
     */
    singleSignOnType?: string;
    /**
     * Indicates if the single sign on provider is active.
     */
    inActive?: boolean;
    /**
     * A unique identifier for the single sign on provider.
     */
    providerKey?: string;
}