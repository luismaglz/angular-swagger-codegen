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
import { CustomerProgramLevel } from './customerProgramLevel';


/**
 * The customer program such as loyalty programs.
 */
import * as Enums from '../enums';

export interface CustomerProgram { 
    /**
     * The program code.
     */
    programCode?: string;
    /**
     * The name.
     */
    name?: string;
    /**
     * The program type.
     */
    programType?: Enums.<ENUM>'Default'|'Internal'|'External'</ENUM>;
    /**
     * The validation type.
     */
    validationType?: string;
    /**
     * Is in-active.
     */
    inActive?: boolean;
    /**
     * The qualifying segments.
     */
    qualifyingSegments?: number;
    /**
     * The qualifying points.
     */
    qualifyingPoints?: number;
    /**
     * The point balance.
     */
    pointBalance?: number;
    /**
     * The customer program levels.
     */
    customerProgramLevels?: Array<CustomerProgramLevel>;
}