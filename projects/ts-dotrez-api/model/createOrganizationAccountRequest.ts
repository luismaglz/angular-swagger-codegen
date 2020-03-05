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
 * The create organization account request model.
 */

    import { CreateOrganizationAccountRequest<CAP>type<CAP> } from '../models/enums';

export interface CreateOrganizationAccountRequest { 
    /**
     * The account currency code.
     */
    currencyCode?: string;
    /**
     * The total amount of the account.
     */
    totalAmount?: number;
    /**
     * The allowed account types for account creation.
     */
    type?: CreateOrganizationAccountRequest<CAP>type<CAP>;
    /**
     * The optional note to associate with the account creation.
     */
    note?: string;
}
