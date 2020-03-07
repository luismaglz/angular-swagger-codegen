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
 * Defines a certain document requirement reguarding a specific government instance.
 */

    import { GovernmentDocumentRequirementGroup } from '../types/enums';

export interface GovernmentDocumentRequirement { 
    /**
     * The document group.
     */
    group?: GovernmentDocumentRequirementGroup;
    /**
     * The documents type code.
     */
    documentTypeCode?: string;
}