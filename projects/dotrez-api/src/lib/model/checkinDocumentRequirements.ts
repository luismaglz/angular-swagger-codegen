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
import { GovernmentPassengerDocumentRequirement } from './governmentPassengerDocumentRequirement';


/**
 * Defines a passenger checkin document requirements.
 */
export interface CheckinDocumentRequirements { 
    /**
     * Flag indicating if the checkin document requirements are all meet and ready/valid for checkin.
     */
    readonly isValid?: boolean;
    /**
     * The collection of document type codes that already exist on the passenger.
     */
    documentsOnFile?: Array<string>;
    /**
     * The collection of unhandled documents at each acting government entity.
     */
    unhandledDocuments?: Array<GovernmentPassengerDocumentRequirement>;
}
