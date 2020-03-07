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
import { Zone } from './zone';


/**
 * The area model.
 */
import * as Enums from '../types/enums';

export interface Area { 
    /**
     * Gets or sets the code for this area.
     */
    areaCode?: string;
    /**
     * Gets or sets the description of this area.
     */
    description?: string;
    /**
     * Gets or sets the name of this area.
     */
    name?: string;
    /**
     * Gets or sets the list of zones associated with this area.
     */
    zones?: Array<Zone>;
}
