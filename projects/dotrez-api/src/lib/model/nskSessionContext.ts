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
import { ServerContext } from './serverContext';
import { SessionRoles } from './sessionRoles';
import { UserIdentity } from './userIdentity';


/**
 * Defines the nsk current session context.
 */
export interface NskSessionContext { 
    /**
     * Flag indicating if the session is pending login.
     */
    readonly isPendingLogin?: boolean;
    /**
     * Flag indicating if the session is a virtual user.
     */
    readonly isVirtual?: boolean;
    /**
     * The logged in users identity.
     */
    identity?: UserIdentity;
    /**
     * The server's session context.
     */
    serverContext?: ServerContext;
    /**
     * The roles applied to the current session.
     */
    roles?: SessionRoles;
    /**
     * The users default culture code.
     */
    defaultCultureCode?: string;
    /**
     * The users default currency code.
     */
    defaultCurrencyCode?: string;
    /**
     * The type of session permissions based on the logged in user.
     */
    type?: NskSessionContext.TypeEnum;
    /**
     * True if the booking exists in NewSkies for the session.
     */
    hasBookingInState?: boolean;
}
export namespace NskSessionContext {
    export type TypeEnum = 'Unknown' | 'Customer' | 'Anonymous' | 'Agent';
    export const TypeEnum = {
        Unknown: 'Unknown' as TypeEnum,
        Customer: 'Customer' as TypeEnum,
        Anonymous: 'Anonymous' as TypeEnum,
        Agent: 'Agent' as TypeEnum
    };
}
