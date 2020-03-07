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
 * The document type model.
 */

    import { DocumentTypeGroup } from '../types/enums';

export interface DocumentType { 
    /**
     * The document type code.
     */
    documentTypeCode: string;
    /**
     * The document type name.
     */
    name?: string;
    /**
     * The document group.
     */
    group?: DocumentTypeGroup;
    /**
     * Indicates if an expiration date is required.
     */
    isExpirationDateRequired?: boolean;
    /**
     * The in active.
     */
    inActive?: boolean;
}