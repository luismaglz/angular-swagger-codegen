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

    import { ResourceContentResult<CAP>type</CAP> } from '../types/enums';

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
    type?: <ENUM>'GeneralReference'|'News'|'ConsoleHelp'|'FareRuleReference'|'ReviewWithCustomer'|'Notices'|'Literature'|'Links'|'Image'|'PromotionReference'|'SubscriptionReference'</ENUM>;
}
