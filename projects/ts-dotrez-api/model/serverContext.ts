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
 * Defines the server context.
 */

    import { ServerContext<CAP>systemName<CAP> } from '../models/enums';
    import { ServerContext<CAP>channel<CAP> } from '../models/enums';

export interface ServerContext { 
    /**
     * The servers session ID.
     */
    id?: number;
    /**
     * The servers secure token.
     */
    token?: string;
    /**
     * The acting system name.
     */
    systemName?: ServerContext<CAP>systemName<CAP>;
    /**
     * The acting channel type.
     */
    channel?: ServerContext<CAP>channel<CAP>;
}
