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
 * The organization account transaction request.
 */

    import { OrganizationTransactionRequestType } from '../types/enums';

export interface OrganizationTransactionRequest { 
    /**
     * The transaction types for an organization account.
     */
    type?: OrganizationTransactionRequestType;
    /**
     * The credit account transaction amount.
     */
    amount: number;
    /**
     * The credit account transaction currency code.
     */
    currencyCode: string;
    /**
     * The credit account transaction note.
     */
    note?: string;
}