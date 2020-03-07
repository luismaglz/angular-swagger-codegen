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
 * The hot card reason model.
 */
import * as Enums from '../types/enums';

export interface HotCardReason { 
    /**
     * The reason code.
     */
    hotCardReasonCode: string;
    /**
     * The name.
     */
    name?: string;
    /**
     * The in active.
     */
    inActive?: boolean;
}
