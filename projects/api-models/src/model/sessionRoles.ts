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
import { RoleBase } from './roleBase';


/**
 * Defines the roles being used within the session.
 */
import * as Enums from '../enums';

export interface SessionRoles { 
    /**
     * Flag indicating if in the base role.
     */
    readonly inBaseRole?: boolean;
    /**
     * The acting role.
     */
    acting?: RoleBase;
    /**
     * The base/original role.
     */
    base?: RoleBase;
}
