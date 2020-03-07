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
import { QuoteTokenCatalogRequest } from './quoteTokenCatalogRequest';


/**
 * Defines a product quote token request.
 */
import * as Enums from '../enums';

export interface QuoteTokenRequest { 
    /**
     * The selected unique product variations catalog keys and quantities.
     */
    items?: Array<QuoteTokenCatalogRequest>;
    /**
     * The selected unique product key.
     */
    productKey: string;
    /**
     * The culture code.
     */
    cultureCode?: string;
}