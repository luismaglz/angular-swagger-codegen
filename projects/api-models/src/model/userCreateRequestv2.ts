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
import { UserCodes } from './userCodes';
import { UserRoleCreateRequest } from './userRoleCreateRequest';
import { UserSetting } from './userSetting';


/**
 * Defines the v2 user create request.
 */
import * as Enums from '../enums';

export interface UserCreateRequestv2 { 
    /**
     * The unique person key associated with the user.
     */
    personKey: string;
    /**
     * The unique password.
     */
    password: string;
    /**
     * The status of the account.
     */
    status?: Enums.UserStatus;
    /**
     * The collection of user roles.
     */
    roles: Array<UserRoleCreateRequest>;
    /**
     * The unique username.
     */
    username: string;
    /**
     * The collection of agent settings.
     */
    settings?: Array<UserSetting>;
    /**
     * The identifying agent codes.
     */
    codes: UserCodes;
    /**
     * Send registration configrmation.
     */
    sendRegistrationConfirmation?: boolean;
    /**
     * The date the agent was hired.
     */
    hireDate?: Date;
    /**
     * The date the agent was terminated.
     */
    terminationDate?: Date;
    /**
     * The agent's note.
     */
    note?: string;
    /**
     * The trace logging queue code.
     */
    traceQueueCode?: string;
    /**
     * Flag indicating if the account is locked.
     */
    locked?: boolean;
    /**
     * Flag indicating if the password needs to be reset.
     */
    forcePasswordReset?: boolean;
}
