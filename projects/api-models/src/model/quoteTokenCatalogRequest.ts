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
import { SelectedPersonalization } from './selectedPersonalization';


/**
 * Defines a quote token catalog request. This request is used for quoting a specific products product variation  catalog item.
 */
import * as Enums from '../enums';

export interface QuoteTokenCatalogRequest { 
    /**
     * The selected unique product variations catalog key.
     */
    catalogKey: string;
    /**
     * The desired quantity.
     */
    quantity: number;
    /**
     * The collection of desired personalizations to be quoted with the product.
     */
    personalizations?: Array<SelectedPersonalization>;
}
