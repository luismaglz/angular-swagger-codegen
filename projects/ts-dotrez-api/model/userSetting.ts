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
 * Defines the agent setting configuration.
 */
import * as Enums from '../types/enums';

export interface UserSetting { 
    /**
     * The setting data.
     */
    data?: string;
    /**
     * The setting type code.
     */
    agentSettingTypeCode?: string;
    /**
     * The settings version.
     */
    version?: number;
    /**
     * The setting type name.
     */
    name?: string;
    /**
     * The in active.
     */
    inActive?: boolean;
    /**
     * The data schema.
     */
    schema?: string;
}
