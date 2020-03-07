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
import { PassengerTypeCriteria } from './passengerTypeCriteria';
import { SellKey } from './sellKey';
import { SsrsStatelessRequest } from './ssrsStatelessRequest';


/**
 * Defines the itinerary booking quote request.
 */
import * as Enums from '../enums';

export interface ItineraryQuoteRequest { 
    /**
     * Sell service requests to quote.
     */
    ssrs?: Array<SsrsStatelessRequest>;
    /**
     * The list of selected sell keys to be added to the booking.
     */
    keys?: Array<SellKey>;
    /**
     * The list of passengers.
     */
    passengers: PassengerTypeCriteria;
    /**
     * The desired currency code.
     */
    currencyCode: string;
    /**
     * The number of infants to be added.
     */
    infantCount?: number;
    /**
     * The promo code to apply.
     */
    promotionCode?: string;
    /**
     * The acting source organization code.
     */
    sourceOrganization?: string;
}