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

    import { Account<CAP>owner</CAP> } from '../models/enums';
    import { Account<CAP>type</CAP> } from '../models/enums';
    import { Account<CAP>status</CAP> } from '../models/enums';

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
    owner?: Account<CAP>owner</CAP>;
    /**
     * The account type.
     */
    type?: Account<CAP>type</CAP>;
    /**
     * The account status.
     */
    status?: Account<CAP>status</CAP>;
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
