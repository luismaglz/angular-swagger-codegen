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
import { MarketInformation } from './marketInformation';


/**
 * Represents the inventory leg cross reference data.
 */
import * as Enums from '../enums';

export interface LegCrossReference { 
    /**
     * The key for the manifest leg.
     */
    legKey?: string;
    /**
     * The inventory leg cross reference number.
     */
    number?: number;
    /**
     * Information about the market arrival and destination details.
     */
    marketInformation?: MarketInformation;
}