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
import { Category } from './category';
import { Descriptions } from './descriptions';
import { Name } from './name';
import { ParticipantLinkedResult } from './participantLinkedResult';
import { PhoneNumber } from './phoneNumber';
import { ProductPriceBreakdown } from './productPriceBreakdown';
import { ProductVariation } from './productVariation';
import { Warning } from './warning';


/**
 * Defines an insurance product result.
 */
import * as Enums from '../enums';

export interface InsuranceProduct { 
    /**
     * Flag indicating if the insurance product is a group offer.
     */
    readonly isGroup?: boolean;
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
     * The search result amounts.
     */
    amounts?: ProductPriceBreakdown;
    /**
     * The collection of phone numbers.
     */
    phoneNumbers?: Array<PhoneNumber>;
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
    participants?: Array<ParticipantLinkedResult>;
    /**
     * The collection of declined participant names based on the participants from the search request.
     */
    declinedParticipants?: Array<Name>;
    /**
     * The collection of product variations.
     */
    productVariations?: Array<ProductVariation>;
    /**
     * The insurance product category.
     */
    category?: Category;
    /**
     * The insurance product warning.
     */
    warning?: Warning;
    /**
     * The unique product order key.
     */
    productOrderKey?: string;
}