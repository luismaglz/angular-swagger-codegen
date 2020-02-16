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
import { PassengerTravelDocument } from './passengerTravelDocument';


/**
 * Defines the boarding pass infant details.
 */
export interface BoardingPassInfantDetails { 
    /**
     * The given name.
     */
    name?: Name;
    /**
     * The given name converted to ISO standard.
     */
    isoName?: Name;
    /**
     * The date of birth.
     */
    dateOfBirth?: Date;
    /**
     * The gender.
     */
    gender?: BoardingPassInfantDetails.GenderEnum;
    /**
     * The collection of travel documents.
     */
    documents?: Array<PassengerTravelDocument>;
}
export namespace BoardingPassInfantDetails {
    export type GenderEnum = 'XX' | 'Male' | 'Female';
}
