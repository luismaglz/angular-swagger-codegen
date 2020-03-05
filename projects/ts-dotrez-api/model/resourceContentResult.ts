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
 * Model representing a resource content item.
 */

    import { ResourceContentResult<CAP>type<CAP> } from '../models/enums';

export interface ResourceContentResult { 
    /**
     * The content id.
     */
    contentId: number;
    /**
     * Name of the content
     */
    name?: string;
    /**
     * Description of the content.
     */
    description?: string;
    /**
     * Specific content type.
     */
    type?: ResourceContentResult<CAP>type<CAP>;
}
