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
import { AccountCollection } from './accountCollection';


/**
 * The account model.
 */
export interface Account { 
    /**
     * The list of account collections.
     */
    collections?: Array<AccountCollection>;
    /**
     * The account key.
     */
    accountKey?: string;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * The summed total of all currently available credit amounts for the account.
     */
    totalAvailable?: number;
    /**
     * The account owner type.
     */
    owner?: Account.OwnerEnum;
    /**
     * The account type.
     */
    type?: Account.TypeEnum;
    /**
     * The account status.
     */
    status?: Account.StatusEnum;
    /**
     * The total amount.
     */
    totalAmount?: number;
    /**
     * The foreign currency available.
     */
    foreignAvailable?: number;
    /**
     * The foreign currency code.
     */
    foreignCurrencyCode?: string;
}
export namespace Account {
    export type OwnerEnum = 'Organization' | 'Personnal' | 'Booking' | 'Unknown';
    export type TypeEnum = 'Credit' | 'Prepaid' | 'Supplementary' | 'Dependent' | 'Unknown';
    export type StatusEnum = 'Open' | 'Closed' | 'AgencyInactive' | 'Unknown';
}
