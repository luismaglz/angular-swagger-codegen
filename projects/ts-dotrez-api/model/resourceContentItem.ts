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

    import { ResourceContentItem<CAP>type</CAP> } from '../types/enums';
    import { ResourceContentItem<CAP>dataType</CAP> } from '../types/enums';

export interface ResourceContentItem { 
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
     * Culture code of the data.
     */
    cultureCode?: string;
    /**
     * Size in bytes of the data.
     */
    size?: number;
    /**
     * Specific content type.
     */
    type?: <ENUM>'GeneralReference'|'News'|'ConsoleHelp'|'FareRuleReference'|'ReviewWithCustomer'|'Notices'|'Literature'|'Links'|'Image'|'PromotionReference'|'SubscriptionReference'</ENUM>;
    /**
     * Content data type.
     */
    dataType?: <ENUM>'Default'|'Text'|'RichTextFormat'|'ImageJpg'|'ImageGif'|'ImageBmp'|'ImagePng'|'WordDoc'|'Html'|'Pdf'|'Uri'|'WordDocx'|'Unmapped'</ENUM>;
    /**
     * Data bytes.
     */
    data?: string;
}
