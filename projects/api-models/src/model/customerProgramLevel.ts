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
import { CustomerProgramSetting } from './customerProgramSetting';


/**
 * The customer program level.
 */
import * as Enums from '../enums';

export interface CustomerProgramLevel { 
    /**
     * The program code.
     */
    programCode?: string;
    /**
     * The program level.
     */
    programLevelCode?: string;
    /**
     * The name.
     */
    name?: string;
    /**
     * The short name.
     */
    shortName?: string;
    /**
     * The display code.
     */
    displayCode?: string;
    /**
     * The rank.
     */
    rank?: number;
    /**
     * The in active flag.
     */
    inActive?: boolean;
    /**
     * The list of customer program settings.
     */
    customerProgramSettings?: Array<CustomerProgramSetting>;
}
