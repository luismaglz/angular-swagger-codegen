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
 * Model representing additional passenger information.
 */
export interface PassengerInformation { 
    /**
     * The passenger nationality.
     */
    nationality?: string;
    /**
     * The resident country.
     */
    residentCountry?: string;
    /**
     * Gets or sets passenger gender.
     */
    gender?: PassengerInformation.GenderEnum;
    /**
     * The passenger's date of birth.
     */
    dateOfBirth?: Date;
    /**
     * The unique identifier of a family registered in the system.
     */
    familyNumber?: number;
}
export namespace PassengerInformation {
    export type GenderEnum = 'XX' | 'Male' | 'Female';
    export const GenderEnum = {
        XX: 'XX' as GenderEnum,
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum
    };
}
