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
import { SellTokenCatalogRequestParameters } from './sellTokenCatalogRequestParameters';


/**
 * Defines a product quote item request used for a singular catalog item.
 */
export interface SellCarRequest { 
    parameters?: SellTokenCatalogRequestParameters;
    /**
     * The selected unique product variations catalog key.
     */
    catalogKey: string;
    /**
     * The selected unique product key.
     */
    productKey: string;
    /**
     * The collection of desired personalizations to be quoted with the product.
     */
    personalizations?: Array<SelectedPersonalization>;
    /**
     * The culture code.
     */
    cultureCode?: string;
}
