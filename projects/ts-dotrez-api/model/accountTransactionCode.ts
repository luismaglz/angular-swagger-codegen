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
 * The account transaction code model.
 */

    import { AccountTransactionCode<CAP>expirationType</CAP> } from '../models/enums';

export interface AccountTransactionCode { 
    /**
     * The unique transaction code.
     */
    transactionCode: string;
    /**
     * The Name.
     */
    name?: string;
    /**
     * The expiration type.
     */
    expirationType?: AccountTransactionCode<CAP>expirationType</CAP>;
    /**
     * The expiration days.
     */
    expirationDays?: number;
    /**
     * The expiration date.
     */
    expirationDate?: Date;
    /**
     * In active.
     */
    inActive?: boolean;
}
