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
 * The customer program setting.
 */
import * as Enums from '../enums';

export interface CustomerProgramSetting { 
    /**
     * The program code.
     */
    programCode?: string;
    /**
     * The program level.
     */
    programLevel?: string;
    /**
     * The setting code.
     */
    settingCode?: string;
    /**
     * The sequence number.
     */
    sequenceNumber?: number;
    /**
     * The setting value.
     */
    settingValue?: string;
}
