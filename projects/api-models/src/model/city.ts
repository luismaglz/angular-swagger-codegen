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
 * The city model.
 */
import * as Enums from '../enums';

export interface City { 
    /**
     * Gets or sets the code for this city.
     */
    cityCode?: string;
    /**
     * Gets or sets the country code for this city
     */
    countryCode?: string;
    /**
     * Gets or sets the inactive flag for this city.
     */
    inActive?: boolean;
    /**
     * Gets or sets the name for this city
     */
    name?: string;
    /**
     * Gets or sets the province/state code for this city.
     */
    provinceStateCode?: string;
    /**
     * Gets or sets the short name for this city.
     */
    shortName?: string;
}
