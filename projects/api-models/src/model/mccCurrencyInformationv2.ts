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
import { Currencyv2 } from './currencyv2';
import { ExternalRate } from './externalRate';


/**
 * Model with the Mcc curency and rate information.
 */
import * as Enums from '../enums';

export interface MccCurrencyInformationv2 { 
    /**
     * The external rate.
     */
    rate?: ExternalRate;
    /**
     * The currency.
     */
    currency?: Currencyv2;
    /**
     * The total balance due using this currency code.
     */
    balanceDue?: number;
}
