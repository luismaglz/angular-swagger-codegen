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
import { Descriptions } from './descriptions';
import { ProductVariationAttribute } from './productVariationAttribute';
import { ProductVariationCatalog } from './productVariationCatalog';


/**
 * Defines a product variation result.
 */
import * as Enums from '../enums';

export interface ProductVariation { 
    /**
     * The unique product variation key.
     */
    productVariationKey?: string;
    /**
     * The product's description.
     */
    descriptions?: Descriptions;
    /**
     * The collection of product variation attributes.
     */
    attributes?: Array<ProductVariationAttribute>;
    /**
     * The collection of product variation catalogs.
     */
    catalog?: Array<ProductVariationCatalog>;
}
