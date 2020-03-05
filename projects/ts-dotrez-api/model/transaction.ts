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
 * The transaction model.
 */

    import { Transaction<CAP>type<CAP> } from '../models/enums';

export interface Transaction { 
    /**
     * The record locator from the refunded booking payment.
     */
    readonly recordLocator?: string;
    /**
     * The unique transaction key.
     */
    transactionKey?: string;
    /**
     * The credit account transaction amount.
     */
    amount: number;
    /**
     * The created date associated with the transaction.
     */
    createdDate?: Date;
    /**
     * The credit account transaction currency code.
     */
    currencyCode: string;
    /**
     * The transaction foreign amount.
     */
    foreignAmount?: number;
    /**
     * The credit account transaction note.
     */
    note?: string;
    /**
     * The transaction foreign currency code.
     */
    foreignCurrencyCode?: string;
    /**
     * The transaction type.
     */
    type?: Transaction<CAP>type<CAP>;
    /**
     * The payment ID of the transaction. This will only be non zero on refunded booking payments. A zero signifies that  no payment ID is found.
     */
    paymentId?: number;
    /**
     * The account collection key associated with the transaction.
     */
    accountCollectionKey?: string;
}
