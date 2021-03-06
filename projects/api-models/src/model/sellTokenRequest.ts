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
import { SellTokenCatalogRequest } from './sellTokenCatalogRequest';


/**
 * Defines a product sell token request.
 */
import * as Enums from '../enums';

export interface SellTokenRequest { 
    /**
     * The selected unique product variations catalog keys and quantities.
     */
    items?: Array<SellTokenCatalogRequest>;
    /**
     * The selected unique product key.
     */
    productKey: string;
    /**
     * The primary passenger key. If the the passenger key is not set it defaults to the first passenger on  the booking.
     */
    primaryPassengerKey?: string;
    /**
     * The culture code.
     */
    cultureCode?: string;
}
