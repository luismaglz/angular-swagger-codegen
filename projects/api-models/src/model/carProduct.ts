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
import { AddOnCriteria } from './addOnCriteria';
import { Category } from './category';
import { Descriptions } from './descriptions';
import { Image } from './image';
import { OrderAddress } from './orderAddress';
import { ParticipantBase } from './participantBase';
import { PhoneNumber } from './phoneNumber';
import { ProductPriceBreakdown } from './productPriceBreakdown';
import { ProductVariation } from './productVariation';
import { Warning } from './warning';


/**
 * Defines a car product result.
 */
import * as Enums from '../enums';

export interface CarProduct { 
    /**
     * The unique product result key.
     */
    productKey?: string;
    /**
     * Flag indicating this item is preferred.
     */
    isPreferred?: boolean;
    /**
     * Flag indicating this item is new.
     */
    isNew?: boolean;
    /**
     * The external system locator code.
     */
    externalLocator?: string;
    /**
     * The culture code for everything.
     */
    cultureCode?: string;
    /**
     * The specific vendor code.
     */
    vendorCode?: string;
    /**
     * The various descriptions.
     */
    descriptions?: Descriptions;
    /**
     * The provided thumbnail file name.
     */
    thumbnailFileName?: string;
    /**
     * The search result amounts.
     */
    amounts?: ProductPriceBreakdown;
    /**
     * The address of the result.
     */
    address?: OrderAddress;
    /**
     * The collection of phone numbers.
     */
    phoneNumbers?: Array<PhoneNumber>;
    /**
     * The collection of display images.
     */
    images?: Array<Image>;
    /**
     * The origin station code for the city.
     */
    origin?: string;
    /**
     * The destination station code if different than the origin.
     */
    destination?: string;
    /**
     * The begin date.
     */
    beginDate?: Date;
    /**
     * The end date.
     */
    endDate?: Date;
    /**
     * The collection of participating participants.
     */
    participants?: Array<ParticipantBase>;
    /**
     * The collection of product variations.
     */
    productVariations?: Array<ProductVariation>;
    /**
     * The search criteria of the product.
     */
    criteria?: AddOnCriteria;
    /**
     * The car product category.
     */
    category?: Category;
    /**
     * The car product warning.
     */
    warning?: Warning;
    /**
     * The unique product order key.
     */
    productOrderKey?: string;
}