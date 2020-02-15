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
 * Defines a booking comment.
 */
export interface BookingCommentRequest { 
    /**
     * Indicates where the comment will be seen.
     */
    type?: BookingCommentRequest.TypeEnum;
    /**
     * The text of the comment.
     */
    text?: string;
    /**
     * The created date of the comment.
     */
    createdDate?: Date;
}
export namespace BookingCommentRequest {
    export type TypeEnum = 'Default' | 'Itinerary' | 'Manifest' | 'Alert' | 'Archive';
    export const TypeEnum = {
        Default: 'Default' as TypeEnum,
        Itinerary: 'Itinerary' as TypeEnum,
        Manifest: 'Manifest' as TypeEnum,
        Alert: 'Alert' as TypeEnum,
        Archive: 'Archive' as TypeEnum
    };
}
