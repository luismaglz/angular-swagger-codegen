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


/**
 * Defines a credit account information.
 */
import * as Enums from '../enums';

export interface CreditAccount { 
    /**
     * The account reference.
     */
    accountReference?: string;
    /**
     * The currency code of the account.
     */
    currencyCode?: string;
    /**
     * The amount of credit.
     */
    amount?: number;
    /**
     * The foreign amount of credit.
     */
    foreignAmount?: number;
    /**
     * The foreign currency code of the account.
     */
    foreignCurrencyCode?: string;
}
