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
 * The Title.
 */
import * as Enums from '../enums';

export interface Title { 
    /**
     * The Title key.
     */
    titleKey?: string;
    /**
     * The description.
     */
    description?: string;
    /**
     * The gender.
     */
    gender?: Enums.<ENUM>'XX'|'Male'|'Female'</ENUM>;
    /**
     * The weight category.
     */
    weightCategory?: Enums.<ENUM>'Male'|'Female'|'Child'</ENUM>;
    /**
     * The InActive.
     */
    inActive?: boolean;
}
