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

    import { BookingCommentRequest<CAP>type<CAP> } from '../models/enums';

export interface BookingCommentRequest { 
    /**
     * Indicates where the comment will be seen.
     */
    type?: BookingCommentRequest<CAP>type<CAP>;
    /**
     * The text of the comment.
     */
    text?: string;
    /**
     * The created date of the comment.
     */
    createdDate?: Date;
}
