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
import { City } from './city';
import { ProvinceState } from './provinceState';


/**
 * Represents the country model, version two.
 */
import * as Enums from '../enums';

export interface Countryv2 { 
    /**
     * Represents the two-digit country code.
     */
    countryCode: string;
    /**
     * Represents the three-digit country code.
     */
    countryCode3C: string;
    /**
     * Gets or sets the list of cities in this country.
     */
    cities?: Array<City>;
    /**
     * Gets or sets the default currency code of this country.
     */
    defaultCurrencyCode?: string;
    /**
     * Gets or sets whether this country has province states.
     */
    hasProvinceStates?: boolean;
    /**
     * Gets or sets whether this country is active.
     */
    inActive?: boolean;
    /**
     * Gets or sets the name of this country.
     */
    name?: string;
    /**
     * Gets or sets the province states for this country.
     */
    provinceStates?: Array<ProvinceState>;
}
