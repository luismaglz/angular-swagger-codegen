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
 * A model for a request to update the passenger type code.
 */
export interface PassengerTypeCodeEditRequest { 
    /**
     * The new passenger type code to update the passenger to.
     */
    passengerTypeCode: string;
    /**
     * The date of birth for the passenger.
     */
    dateOfBirth?: Date;
    /**
     * The new gender of the passenger.  Only required if GDPR is enabled.
     */
    gender?: PassengerTypeCodeEditRequest.GenderEnum;
}
export namespace PassengerTypeCodeEditRequest {
    export type GenderEnum = 'XX' | 'Male' | 'Female';
    export const GenderEnum = {
        XX: 'XX' as GenderEnum,
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum
    }
}
