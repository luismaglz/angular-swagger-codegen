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
 * Defines a order history transaction.
 */
import * as Enums from '../types/enums';

export interface OrderHistory { 
    /**
     * The status code.
     */
    code?: string;
    /**
     * The previous status code.
     */
    previousCode?: string;
    /**
     * The history note.
     */
    note?: string;
    /**
     * The history entry created date.
     */
    created?: Date;
    /**
     * Flag indicating if has an error.
     */
    hasError?: boolean;
}
