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
import { PersonalizationParameter } from './personalizationParameter';


/**
 * Defines an available personalization for an add-on.
 */
export interface Personalization { 
    /**
     * The unique personalization key.
     */
    personalizationKey?: string;
    /**
     * The amount if valid. If the price is not valid the price will be null.
     */
    amount?: number;
    /**
     * The available limit allowed.
     */
    limit?: number;
    /**
     * The personalization description to show.
     */
    description?: string;
    /**
     * The display data type.
     */
    dataType?: Personalization.DataTypeEnum;
    /**
     * Flag indicating that user input is required.
     */
    inputRequired?: boolean;
    /**
     * The collection of personalization parameter options.
     */
    options?: Array<PersonalizationParameter>;
}
export namespace Personalization {
    export type DataTypeEnum = 'Unknown' | 'Bool' | 'List' | 'Text' | 'Date';
    export const DataTypeEnum = {
        Unknown: 'Unknown' as DataTypeEnum,
        Bool: 'Bool' as DataTypeEnum,
        List: 'List' as DataTypeEnum,
        Text: 'Text' as DataTypeEnum,
        Date: 'Date' as DataTypeEnum
    };
}
