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
 * The message base model.
 */
import * as Enums from '../types/enums';

export interface MessageBase { 
    /**
     * The message type code of the message queue.
     */
    typeCode?: string;
    /**
     * The reason why the message was added to the database.
     */
    information?: string;
    /**
     * The body of the message.
     */
    body?: string;
}
