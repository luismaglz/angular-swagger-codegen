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
    channelType?: AgencyCreationSettings.ChannelTypeEnum;
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
    phoneType?: AgencyCreationSettings.PhoneTypeEnum;
}
export namespace AgencyCreationSettings {
    export type ChannelTypeEnum = 'Default' | 'Direct' | 'Web' | 'Gds' | 'Api';
    export const ChannelTypeEnum = {
        Default: 'Default' as ChannelTypeEnum,
        Direct: 'Direct' as ChannelTypeEnum,
        Web: 'Web' as ChannelTypeEnum,
        Gds: 'Gds' as ChannelTypeEnum,
        Api: 'Api' as ChannelTypeEnum
    }
    export type PhoneTypeEnum = 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax';
    export const PhoneTypeEnum = {
        Other: 'Other' as PhoneTypeEnum,
        Home: 'Home' as PhoneTypeEnum,
        Work: 'Work' as PhoneTypeEnum,
        Mobile: 'Mobile' as PhoneTypeEnum,
        Fax: 'Fax' as PhoneTypeEnum
    }
}
