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
import { Name } from './name';


/**
 * Defines a create travel documents request.
 */
export interface TravelDocumentCreateRequest { 
    /**
     * The unique travel document type code.
     */
    documentTypeCode: string;
    /**
     * The BirthCountry property.
     */
    birthCountry?: string;
    /**
     * The issuer code for the travel document (country code).
     */
    issuedByCode?: string;
    /**
     * The Name property.
     */
    name?: Name;
    /**
     * The Nationality property.
     */
    nationality?: string;
    /**
     * The date when this travel document expires.
     */
    expirationDate?: Date;
    /**
     * The travel document number.
     */
    number?: string;
    /**
     * The date this travel document was issued.
     */
    issuedDate?: Date;
    /**
     * The travel document holder's gender.
     */
    gender?: TravelDocumentCreateRequest.GenderEnum;
    /**
     * The person's date of birth.
     */
    dateOfBirth?: Date;
}
export namespace TravelDocumentCreateRequest {
    export type GenderEnum = 'XX' | 'Male' | 'Female';
}
