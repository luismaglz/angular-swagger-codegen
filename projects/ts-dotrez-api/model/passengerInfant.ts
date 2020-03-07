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
import { InfantFee } from './infantFee';
import { Name } from './name';
import { PassengerTravelDocument } from './passengerTravelDocument';


/**
 * Model representing an infant with a passenger.
 */
import * as Enums from '../types/enums';

export interface PassengerInfant { 
    /**
     * The collection of infant fees.
     */
    readonly fees?: Array<InfantFee>;
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
    gender?: Enums.Gender;
    /**
     * The name of the passenger.
     */
    name?: Name;
}
