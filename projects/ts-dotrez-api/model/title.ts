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

    import { Title<CAP>gender<CAP> } from '../models/enums';
    import { Title<CAP>weightCategory<CAP> } from '../models/enums';

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
    gender?: Title<CAP>gender<CAP>;
    /**
     * The weight category.
     */
    weightCategory?: Title<CAP>weightCategory<CAP>;
    /**
     * The InActive.
     */
    inActive?: boolean;
}
