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
 * Defines the person preferences.
 */
import * as Enums from '../enums';

export interface PersonPreference { 
    /**
     * The unique preference key.
     */
    personPreferenceKey?: string;
    /**
     * The preference code.
     */
    code?: string;
    /**
     * The value of the preference.
     */
    value?: string;
}