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
import { BoardingPassInfantDetails } from './boardingPassInfantDetails';
import { BoardingPassPassengerScore } from './boardingPassPassengerScore';
import { Name } from './name';
import { PassengerTravelDocument } from './passengerTravelDocument';


/**
 * Defines the boarding pass passenger details.
 */
export interface BoardingPassPassengerDetailsv2 { 
    /**
     * The passenger bar code.
     */
    barCode?: string;
    /**
     * The passenger type.
     */
    type?: string;
    /**
     * The given name.
     */
    name?: Name;
    /**
     * The string that indicates a selectee.
     */
    selecteeString?: string;
    /**
     * The given name converted to ISO standard.
     */
    isoName?: Name;
    /**
     * The customer number.
     */
    customerNumber?: string;
    /**
     * The date of birth.
     */
    dateOfBirth?: Date;
    /**
     * The passenger score.
     */
    score?: BoardingPassPassengerScore;
    /**
     * The gender.
     */
    gender?: BoardingPassPassengerDetailsv2.GenderEnum;
    /**
     * The passengers infant details if an infant exists.
     */
    infant?: BoardingPassInfantDetails;
    /**
     * The collection of travel documents.
     */
    documents?: Array<PassengerTravelDocument>;
}
export namespace BoardingPassPassengerDetailsv2 {
    export type GenderEnum = 'XX' | 'Male' | 'Female';
}
