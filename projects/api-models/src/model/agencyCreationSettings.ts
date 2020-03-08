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
 * Settings for creating agencies.
 */
import * as Enums from '../enums';

export interface AgencyCreationSettings { 
    /**
     * The default Department for new agency.
     */
    department?: string;
    /**
     * The default Role for new agency.
     */
    role?: string;
    /**
     * The default Domain for new agency.
     */
    domainCode?: string;
    /**
     * The default Domain name for new agency.
     */
    domainName?: string;
    /**
     * The default domain Location value for new agency.
     */
    domainLocation?: string;
    /**
     * The default channel type for new agency.
     */
    channelType?: Enums.ChannelType;
    /**
     * The default notification email address for new agency.
     */
    notificationEmailAddress?: string;
    /**
     * The default master role for the new agency.
     */
    masterRole?: string;
    /**
     * The default phone type for the new agency.
     */
    phoneType?: Enums.PhoneNumberType;
}
