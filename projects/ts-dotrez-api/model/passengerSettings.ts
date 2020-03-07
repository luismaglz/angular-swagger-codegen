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
 * The booking passenger settings.
 */
import * as Enums from '../types/enums';

export interface PassengerSettings { 
    /**
     * Passenger title field validation control.
     */
    passengerTitle?: Enums.FieldControlType;
    /**
     * Passenger first name field validation control.
     */
    passengerFirstName?: Enums.FieldControlType;
    /**
     * Passenger middle name field validation control.
     */
    passengerMiddleName?: Enums.FieldControlType;
    /**
     * Passenger last name field validation control.
     */
    passengerLastName?: Enums.FieldControlType;
    /**
     * Passenger suffix field validation control.
     */
    passengerSuffix?: Enums.FieldControlType;
    /**
     * Passenger customer number field validation control.
     */
    passengerCustomerNumber?: Enums.FieldControlType;
    /**
     * Passenger gender field validation control.
     */
    passengerGender?: Enums.FieldControlType;
    /**
     * Passenger date of birth field validation control.
     */
    passengerDateOfBirth?: Enums.FieldControlType;
    /**
     * Passenger nationality field validation control.
     */
    passengerNationality?: Enums.FieldControlType;
    /**
     * Passenger resident country field validation control.
     */
    passengerResidentCountry?: Enums.FieldControlType;
    /**
     * Infant title field validation control.
     */
    infantTitle?: Enums.FieldControlType;
    /**
     * Infant first name field validation control.
     */
    infantFirstName?: Enums.FieldControlType;
    /**
     * Infant middle name field validation control.
     */
    infantMiddleName?: Enums.FieldControlType;
    /**
     * Infant last name field validation control.
     */
    infantLastName?: Enums.FieldControlType;
    /**
     * Infant suffix field validation control.
     */
    infantSuffix?: Enums.FieldControlType;
    /**
     * Infant gender field validation control.
     */
    infantGender?: Enums.FieldControlType;
    /**
     * Infant date of birth field validation control.
     */
    infantDateOfBirth?: Enums.FieldControlType;
    /**
     * Infant nationality field validation control.
     */
    infantNationality?: Enums.FieldControlType;
    /**
     * Infant resident country field validation control.
     */
    infantResidentCountry?: Enums.FieldControlType;
    /**
     * TBA passenger will allow users to enter passengers with information \"To Be Determined\".
     */
    tbaPassengersAllowed?: Enums.TbaPassengersAllowed;
    /**
     * Flag to indicate if passenger customer programs are allowed.
     */
    allowCustomerProgram?: boolean;
    /**
     * Flag to indicate if passenger name changes are allowed.
     */
    allowNameChange?: boolean;
}
