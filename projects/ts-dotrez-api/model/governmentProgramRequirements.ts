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
 * Defines a government programs document requirements.
 */

    import { GovernmentProgramRequirements<CAP>requiredDocumentFields<CAP> } from '../models/enums';
    import { GovernmentProgramRequirements<CAP>additionalDataRequired<CAP> } from '../models/enums';

export interface GovernmentProgramRequirements { 
    /**
     * Identifies which instance of government security is associated with these specific requirements.
     */
    governmentInstance?: string;
    /**
     * The collection of required document fields to be collected.
     */
    requiredDocumentFields?: GovernmentProgramRequirements<CAP>requiredDocumentFields<CAP>;
    /**
     * The collection of additional data that is required that are not related to documents.
     */
    additionalDataRequired?: GovernmentProgramRequirements<CAP>additionalDataRequired<CAP>;
}
