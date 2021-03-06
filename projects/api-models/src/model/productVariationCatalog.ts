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
import { ProductVariationCatalogAmounts } from './productVariationCatalogAmounts';


/**
 * Defines a product variations catalog results.
 */
import * as Enums from '../enums';

export interface ProductVariationCatalog { 
    /**
     * The unique catalog key.
     */
    catalogKey?: string;
    /**
     * The catalog code.
     */
    code?: string;
    /**
     * The comparison key.
     */
    comparisonKey?: string;
    /**
     * The variation descriptions.
     */
    descriptions?: Descriptions;
    /**
     * The variations catalog amount breakdown.
     */
    amounts?: ProductVariationCatalogAmounts;
    /**
     * Determines how the inventory quantity is counted.
     */
    inventoryGrouping?: Enums.InventoryQuantityGrouping;
    /**
     * The actual number available.
     */
    inventoryQuantity?: number;
    /**
     * The number available to sell.
     */
    sellQuantity?: number;
    /**
     * The usage date.
     */
    usageDate?: Date;
    /**
     * The configured payment action.
     */
    paymentAction?: Enums.PaymentAction;
}
