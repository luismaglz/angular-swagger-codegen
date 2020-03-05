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
 * Represents the payload data for the trip operation.
 */

export interface TripOperationPayload { 
    /**
     * The type of payload this model represents, expressed as a single  character.
     */
    payloadType?: string;
    /**
     * The compartment for the payload this model represents, expressed   as a single character.
     */
    compartment?: string;
    /**
     * The payload count.
     */
    payloadCount?: number;
    /**
     * The total payload weight.
     */
    weight?: number;
}
