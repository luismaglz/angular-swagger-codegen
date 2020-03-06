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
 * Defines a request to apply credit for an account.
 */

    import { ApplyCreditAccountRequestType } from '../types/enums';

export interface ApplyCreditAccountRequest { 
    /**
     * The amount of credit.
     */
    amount: number;
    /**
     * The account reference. This will be the record locator, customer account number, or organization code depending on  the type.
     */
    referenceNumber: string;
    /**
     * The currency code of the account.
     */
    currencyCode?: string;
    /**
     * Defines the type of credit being applied.
     */
    type?: ApplyCreditAccountRequestType;
}
