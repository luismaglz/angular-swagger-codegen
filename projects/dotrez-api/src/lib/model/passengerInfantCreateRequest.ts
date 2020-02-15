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
 * Model representing infant data that can be set.
 */
export interface PassengerInfantCreateRequest { 
    /**
     * The nationality of the passenger.
     */
    nationality?: string;
    /**
     * The date of birth of the infant.
     */
    dateOfBirth?: Date;
    /**
     * Travel Documents.
     */
    travelDocuments?: Array<PassengerTravelDocument>;
    /**
     * The residentCountry of the passenger.
     */
    residentCountry?: string;
    /**
     * The gender of the passenger.
     */
    gender?: PassengerInfantCreateRequest.GenderEnum;
    /**
     * The name of the passenger.
     */
    name?: Name;
}
export namespace PassengerInfantCreateRequest {
    export type GenderEnum = 'XX' | 'Male' | 'Female';
    export const GenderEnum = {
        XX: 'XX' as GenderEnum,
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum
    };
}
