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
import { UserRole } from './userRole';
import { UserSetting } from './userSetting';


/**
 * Defines a unique user.
 */
import * as Enums from '../enums';

export interface User { 
    /**
     * The unique user key.
     */
    userKey?: string;
    /**
     * The date the alerts were last read.
     */
    lastAlertReadDate?: Date;
    /**
     * The status of the account.
     */
    status?: Enums.UserStatus;
    /**
     * The unque person key associated to the user.
     */
    personKey?: string;
    /**
     * The date the news was last read.
     */
    lastNewsReadDate?: Date;
    /**
     * The unique username.
     */
    username: string;
    /**
     * Flag indicating if status is allowed.
     */
    allowed?: boolean;
    /**
     * The identifying agent codes.
     */
    codes: UserCodes;
    /**
     * The data and time of last login.
     */
    lastLogon?: Date;
    /**
     * The date the agent was hired.
     */
    hireDate?: Date;
    /**
     * The date and time the password was last changed.
     */
    passwordLastChanged?: Date;
    /**
     * The date the agent was terminated.
     */
    terminationDate?: Date;
    /**
     * The collection of authorized roles.
     */
    roles: Array<UserRole>;
    /**
     * The agent's note.
     */
    note?: string;
    /**
     * The collection of agent settings.
     */
    settings?: Array<UserSetting>;
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
