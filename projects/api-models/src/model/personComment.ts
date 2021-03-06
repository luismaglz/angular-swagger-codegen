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
 * Defines a person comment.
 */
import * as Enums from '../enums';

export interface PersonComment { 
    /**
     * The unique person comment key.
     */
    personCommentKey?: string;
    /**
     * The comments text.
     */
    text?: string;
    /**
     * The comment type.
     */
    type?: Enums.PersonCommentType;
}
