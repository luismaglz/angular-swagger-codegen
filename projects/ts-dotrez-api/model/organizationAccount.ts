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
import { AccountCollectionBase } from './accountCollectionBase';


/**
 * The organization account model.
 */

    import { OrganizationAccount<CAP>owner</CAP> } from '../types/enums';
    import { OrganizationAccount<CAP>type</CAP> } from '../types/enums';
    import { OrganizationAccount<CAP>status</CAP> } from '../types/enums';

export interface OrganizationAccount { 
    /**
     * The organization account collection.
     */
    collection?: AccountCollectionBase;
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
    owner?: <ENUM>'Organization'|'Personnal'|'Booking'|'Unknown'</ENUM>;
    /**
     * The account type.
     */
    type?: <ENUM>'Credit'|'Prepaid'|'Supplementary'|'Dependent'|'Unknown'</ENUM>;
    /**
     * The account status.
     */
    status?: <ENUM>'Open'|'Closed'|'AgencyInactive'|'Unknown'</ENUM>;
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
