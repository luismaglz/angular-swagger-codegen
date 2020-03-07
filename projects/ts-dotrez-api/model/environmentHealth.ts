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
import { HealthInformation } from './healthInformation';


import * as Enums from '../types/enums';

export interface EnvironmentHealth { 
    nodes?: Array<HealthInformation>;
    component?: string;
    componentType?: string;
    details?: string;
    status?: Enums.<ENUM>'Unknown'|'Ok'|'Warning'|'Error'</ENUM>;
}
