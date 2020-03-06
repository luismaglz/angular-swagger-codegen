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
import { OrderCriteria } from './orderCriteria';
import { OrderFee } from './orderFee';
import { OrderNote } from './orderNote';
import { OrderPriceBreakdown } from './orderPriceBreakdown';
import { Parameter } from './parameter';
import { Personalization } from './personalization';
import { ProductVariationDetail } from './productVariationDetail';
import { Term } from './term';


/**
 * Defines a product order.
 */

    import { QuotedOrderType } from '../types/enums';
    import { QuotedOrderPaymentAction } from '../types/enums';

export interface QuotedOrder { 
    /**
     * The quoted catalog key.
     */
    catalogKey?: string;
    /**
     * The unique order key.
     */
    orderKey?: string;
    /**
     * The product type code.
     */
    type?: QuotedOrderType;
    /**
     * Flag indicating if the order is active.
     */
    active?: boolean;
    /**
     * Flag indicating the order is valid.
     */
    isValid?: boolean;
    /**
     * The specific order criteria.
     */
    criteria?: OrderCriteria;
    /**
     * Flag indicating the order is flagged as new.
     */
    isNew?: boolean;
    /**
     * The thumbnail file name.
     */
    thumbnailFileName?: string;
    /**
     * The order's culture code.
     */
    cultureCode?: string;
    /**
     * The quantity.
     */
    quantity?: number;
    /**
     * The collection of available personalizations.
     */
    personalizations?: Array<Personalization>;
    /**
     * The usage date for this order.
     */
    usageDate?: Date;
    /**
     * The collection of dynamic order input parameters.
     */
    parameters?: Array<Parameter>;
    /**
     * The third party external locator.
     */
    externalLocator?: string;
    /**
     * The orders description.
     */
    description?: string;
    /**
     * The order descriptions format type.
     */
    descriptionFormatType?: string;
    /**
     * The products description.
     */
    productDescription?: string;
    /**
     * The products variations description.
     */
    productVariationDescription?: string;
    /**
     * The payment action.
     */
    paymentAction?: QuotedOrderPaymentAction;
    /**
     * The pricing breakdown.
     */
    amounts?: OrderPriceBreakdown;
    /**
     * The collection of terms and conditions.
     */
    terms?: Array<Term>;
    /**
     * The collection of cancellation terms and conditions.
     */
    cancellationTerms?: Array<Term>;
    /**
     * The collection of product variation details.
     */
    details?: Array<ProductVariationDetail>;
    /**
     * The collection of applied fees.
     */
    fees?: Array<OrderFee>;
    /**
     * The collection of notes about the order.
     */
    notes?: Array<OrderNote>;
    /**
     * The unique product variation key.
     */
    productVariationKey?: string;
    /**
     * The unique product order key.
     */
    productOrderKey?: string;
}
