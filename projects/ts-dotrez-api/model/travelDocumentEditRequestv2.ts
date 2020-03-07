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
 * Defines the edit travel document request.
 */

    import { TravelDocumentEditRequestv2<CAP>gender</CAP> } from '../types/enums';

export interface TravelDocumentEditRequestv2 { 
    /**
     * The BirthCountry property.
     */
    birthCountry?: string;
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
    number: string;
    /**
     * The date this travel document was issued.
     */
    issuedDate?: Date;
    /**
     * Flag indicating if the travel document is the default.
     */
    _default?: boolean;
    /**
     * The travel document holder's gender.
     */
    gender?: <ENUM>'XX'|'Male'|'Female'</ENUM>;
    /**
     * The person's date of birth.
     */
    dateOfBirth?: Date;
}
