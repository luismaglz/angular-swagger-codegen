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
import { RegularExpressionPolicy } from './regularExpressionPolicy';


/**
 * The domain model.
 */
import * as Enums from '../types/enums';

export interface Domain { 
    /**
     * The domain code.
     */
    domainCode: string;
    /**
     * The domain name.
     */
    name?: string;
    /**
     * Set to true if the password will never expire.
     */
    passwordNeverExpires?: boolean;
    /**
     * Minimum Password Age is the amount of days that a password must live before it can be  changed. This is to prevent an Agent from changing their password the required amount  of times so that the system allows her to return to her original password. For  example, if my pwd (12345) expires, and I don't want to change it, without this  Minimum Password Age I could change it manually the right number of times and then  change it back to 12345, thus defeating the purpose of requiring the change in the  first place.  If the field is set to null, the system should never prevent an  Agent from changing her password. The example above would be perfectly valid.
     */
    minimumPasswordAge?: number;
    /**
     * The Maximum Password Age is the amount of time a password can live before the system  forces it to be changed. If this is set to null, the system  would never force an Agent to change their password.
     */
    maximumPasswordAge?: number;
    /**
     * After failing logon the amount of times specified by this field the locked bit is  flipped on the Agent. No more logon attempts from the UI will be accepted for that  Agent name. This locked bit can be flipped (on or off) manually in the Agents dialog  in SkyManager.  Setting this field to null would also indicate that logon can be  attempted an unlimited amount of times for an Agent.
     */
    maximumFaliedLogons?: number;
    /**
     * The system forces the Agent to not re-use a password that it remembers the Agent has  used. This field defines how many passwords the system remembers for an Agent. So if  this field is set to two and if my password was 12345, then when my password is  changed I would have to have two other passwords before I could reuse 12345.  This field does NOT specify how many Agents can have the same password. As far as the  system is concerned every Agent can have the same password.
     */
    uniquePasswordCount?: number;
    /**
     * The password policy.
     */
    passwordPolicy?: RegularExpressionPolicy;
    /**
     * The regular expression that defines the rules for the username policy.
     */
    usernamePolicy?: RegularExpressionPolicy;
    /**
     * True if the domain is allowed to use.
     */
    allowed?: boolean;
}
