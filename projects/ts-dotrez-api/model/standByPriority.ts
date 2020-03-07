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
 * The stand by priority model.
 */
import * as Enums from '../types/enums';

export interface StandByPriority { 
    /**
     * The priority code.
     */
    standByPriorityCode?: string;
    /**
     * the name.
     */
    name?: string;
    /**
     * the priority category
     */
    priorityCategory?: string;
    /**
     * the in active.
     */
    inActive?: boolean;
}
