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
import { Name } from './name';
import { UserRole } from './userRole';


/**
 * Defines a user record.
 */

    import { UserRecord<CAP>status<CAP> } from '../models/enums';

export interface UserRecord { 
    /**
     * The unique user key.
     */
    userKey?: string;
    /**
     * The unique username.
     */
    username?: string;
    /**
     * The user's name.
     */
    name?: Name;
    /**
     * The collection of user roles.
     */
    roles?: Array<UserRole>;
    /**
     * The status of the user.
     */
    status?: UserRecord<CAP>status<CAP>;
    /**
     * Flag indicating if the user is allowed.
     */
    allowed?: boolean;
    /**
     * The domain the user exists in.
     */
    domainCode?: string;
    /**
     * The organization the user exists in.
     */
    organizationCode?: string;
}
