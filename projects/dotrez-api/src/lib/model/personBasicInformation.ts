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
 * Defines the person's basic information.
 */
export interface PersonBasicInformation { 
    /**
     * The person's gender.
     */
    gender?: PersonBasicInformation.GenderEnum;
    /**
     * The person's date of birth.
     */
    dateOfBirth?: Date;
    /**
     * The person's nationality.
     */
    nationality?: string;
    /**
     * The person's resident country.
     */
    residentCountry?: string;
    /**
     * The type of passenger the person is.
     */
    passengerType?: string;
    /**
     * The person's preferred culture code.
     */
    preferredCultureCode?: string;
    /**
     * The person's preferred currency code.
     */
    preferredCurrencyCode?: string;
    /**
     * The person's national ID number.
     */
    nationalIdNumber?: string;
}
export namespace PersonBasicInformation {
    export type GenderEnum = 'XX' | 'Male' | 'Female';
    export const GenderEnum = {
        XX: 'XX' as GenderEnum,
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum
    };
}
