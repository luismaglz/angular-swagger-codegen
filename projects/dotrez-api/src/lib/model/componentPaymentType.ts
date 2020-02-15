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
 * Defines a component allowed payment type.
 */
export interface ComponentPaymentType { 
    /**
     * The payment method type code.
     */
    type?: string;
    /**
     * The payment description.
     */
    description?: string;
    /**
     * The modulus check to perform.
     */
    modType?: ComponentPaymentType.ModTypeEnum;
    /**
     * The field usage for expiration date.
     */
    expiration?: ComponentPaymentType.ExpirationEnum;
    /**
     * The field usage for CVV.
     */
    cvv?: ComponentPaymentType.CvvEnum;
    /**
     * The field usage for card holder name.
     */
    name?: ComponentPaymentType.NameEnum;
    /**
     * The field usage for issue number.
     */
    issueNumber?: ComponentPaymentType.IssueNumberEnum;
}
export namespace ComponentPaymentType {
    export type ModTypeEnum = 'None' | 'Mod10' | 'Mod11';
    export const ModTypeEnum = {
        None: 'None' as ModTypeEnum,
        Mod10: 'Mod10' as ModTypeEnum,
        Mod11: 'Mod11' as ModTypeEnum
    };
    export type ExpirationEnum = 'Prompt' | 'DoNotPrompt' | 'Required';
    export const ExpirationEnum = {
        Prompt: 'Prompt' as ExpirationEnum,
        DoNotPrompt: 'DoNotPrompt' as ExpirationEnum,
        Required: 'Required' as ExpirationEnum
    };
    export type CvvEnum = 'Prompt' | 'DoNotPrompt' | 'Required';
    export const CvvEnum = {
        Prompt: 'Prompt' as CvvEnum,
        DoNotPrompt: 'DoNotPrompt' as CvvEnum,
        Required: 'Required' as CvvEnum
    };
    export type NameEnum = 'Prompt' | 'DoNotPrompt' | 'Required';
    export const NameEnum = {
        Prompt: 'Prompt' as NameEnum,
        DoNotPrompt: 'DoNotPrompt' as NameEnum,
        Required: 'Required' as NameEnum
    };
    export type IssueNumberEnum = 'Prompt' | 'DoNotPrompt' | 'Required';
    export const IssueNumberEnum = {
        Prompt: 'Prompt' as IssueNumberEnum,
        DoNotPrompt: 'DoNotPrompt' as IssueNumberEnum,
        Required: 'Required' as IssueNumberEnum
    };
}
