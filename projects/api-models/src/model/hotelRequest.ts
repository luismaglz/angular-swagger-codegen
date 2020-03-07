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
import { ActivitySimpleRequestParameters } from './activitySimpleRequestParameters';
import { ParticipantCriteria } from './participantCriteria';


/**
 * Defines the query for a single station used for hotel travel commerce.
 */
import * as Enums from '../enums';

export interface HotelRequest { 
    /**
     * The station code for the city.
     */
    station: string;
    /**
     * The specific vendor code.
     */
    vendorCode?: string;
    /**
     * The company code with which to search.
     */
    companyCode?: string;
    /**
     * The begin date.
     */
    beginDate: Date;
    /**
     * The specific culture code.
     */
    cultureCode?: string;
    /**
     * The discount code with which to search.
     */
    discountCode?: string;
    /**
     * The end date.
     */
    endDate: Date;
    /**
     * The search sort order.
     */
    sort?: Enums.<ENUM>'SupplierDefined'|'Price'|'Rating'|'Name'|'Category'|'VendorDescription'|'Preferred'|'Relevance'</ENUM>;
    /**
     * The promotion code with which to search.
     */
    promotionCode?: string;
    /**
     * The collection of participants to with which to search.
     */
    participants: Array<ParticipantCriteria>;
    /**
     * The country code with which to search (source or market of the customer).
     */
    countryCode?: string;
    /**
     * The catalog code to with which to search.
     */
    catalogCode?: string;
    /**
     * The currency code with which to search.
     */
    currencyCode?: string;
    /**
     * The category code with which to search.
     */
    categoryCode?: string;
    /**
     * The department code with which to search.
     */
    departmentCode?: string;
    /**
     * The rating code with which to search.
     */
    ratingCode?: string;
    /**
     * The keywork with which to search.
     */
    keyword?: string;
    /**
     * The maximum price with which to search.
     */
    maxPrice?: number;
    /**
     * The minimum price with which to search.
     */
    minPrice?: number;
    /**
     * The quantity with which to search.
     */
    quantity?: number;
    parameters?: ActivitySimpleRequestParameters;
}
