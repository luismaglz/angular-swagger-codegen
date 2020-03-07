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
 * Represents a comment for a trip operation.
 */

    import { TripOperationComment<CAP>type</CAP> } from '../types/enums';

export interface TripOperationComment { 
    /**
     * The unique identification number for the comment.
     */
    tripOperationCommentKey?: string;
    /**
     * Represents the comment text.
     */
    text?: string;
    /**
     * Represents the comment type.
     */
    type?: <ENUM>'Default'|'Reservation'|'Operation'|'PitLoad'|'Irop'|'AppsOverride'|'ManualAppsOverride'</ENUM>;
}
