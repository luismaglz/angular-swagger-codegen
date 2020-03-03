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
 * Defines the participant results.
 */
export interface ParticipantLinkedResult { 
    /**
     * The passenger number of the participant.
     */
    passengerKey?: string;
    /**
     * The participant's type code.
     */
    participantTypeCode: string;
    /**
     * The flag indicating the participant is the owner.
     */
    isPrimary?: boolean;
    /**
     * The participant's date of birth.
     */
    dateOfBirth?: Date;
    /**
     * The resident country.
     */
    residentCountry?: string;
}
