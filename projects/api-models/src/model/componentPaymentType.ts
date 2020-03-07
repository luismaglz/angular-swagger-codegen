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
import * as Enums from '../enums';

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
    modType?: Enums.<ENUM>'None'|'Mod10'|'Mod11'</ENUM>;
    /**
     * The field usage for expiration date.
     */
    expiration?: Enums.<ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The field usage for CVV.
     */
    cvv?: Enums.<ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The field usage for card holder name.
     */
    name?: Enums.<ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The field usage for issue number.
     */
    issueNumber?: Enums.<ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
}