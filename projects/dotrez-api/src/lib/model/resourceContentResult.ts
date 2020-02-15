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
    type?: ResourceContentResult.TypeEnum;
}
export namespace ResourceContentResult {
    export type TypeEnum = 'GeneralReference' | 'News' | 'ConsoleHelp' | 'FareRuleReference' | 'ReviewWithCustomer' | 'Notices' | 'Literature' | 'Links' | 'Image' | 'PromotionReference' | 'SubscriptionReference';
    export const TypeEnum = {
        GeneralReference: 'GeneralReference' as TypeEnum,
        News: 'News' as TypeEnum,
        ConsoleHelp: 'ConsoleHelp' as TypeEnum,
        FareRuleReference: 'FareRuleReference' as TypeEnum,
        ReviewWithCustomer: 'ReviewWithCustomer' as TypeEnum,
        Notices: 'Notices' as TypeEnum,
        Literature: 'Literature' as TypeEnum,
        Links: 'Links' as TypeEnum,
        Image: 'Image' as TypeEnum,
        PromotionReference: 'PromotionReference' as TypeEnum,
        SubscriptionReference: 'SubscriptionReference' as TypeEnum
    };
}
