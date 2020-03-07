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
 * The account collection model.
 */
import * as Enums from '../types/enums';

export interface AccountCollection { 
    /**
     * The transaction code.
     */
    transactionCode?: string;
    /**
     * The unique account collection key.
     */
    accountCollectionKey?: string;
    /**
     * The expiration date.
     */
    expiration?: Date;
    /**
     * The available amount.
     */
    available?: number;
    /**
     * The total amount.
     */
    amount?: number;
}
