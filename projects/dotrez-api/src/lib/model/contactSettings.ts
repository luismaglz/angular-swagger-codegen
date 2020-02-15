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
 * The booking contact settings.
 */
export interface ContactSettings { 
    /**
     * Title field validation control.
     */
    title?: ContactSettings.TitleEnum;
    /**
     * First name field validation control.
     */
    firstName?: ContactSettings.FirstNameEnum;
    /**
     * Middle name field validation control.
     */
    middleName?: ContactSettings.MiddleNameEnum;
    /**
     * Last name field validation control.
     */
    lastName?: ContactSettings.LastNameEnum;
    /**
     * Suffix field validation control.
     */
    suffix?: ContactSettings.SuffixEnum;
    /**
     * Address line one field validation control.
     */
    addressLineOne?: ContactSettings.AddressLineOneEnum;
    /**
     * Address line two field validation control.
     */
    addressLineTwo?: ContactSettings.AddressLineTwoEnum;
    /**
     * Address line three field validation control.
     */
    addressLineThree?: ContactSettings.AddressLineThreeEnum;
    /**
     * Address city field validation control.
     */
    city?: ContactSettings.CityEnum;
    /**
     * Address state field validation control.
     */
    state?: ContactSettings.StateEnum;
    /**
     * Address postal code field validation control.
     */
    postalCode?: ContactSettings.PostalCodeEnum;
    /**
     * Address country field validation control.
     */
    country?: ContactSettings.CountryEnum;
    /**
     * Email field validation control.
     */
    email?: ContactSettings.EmailEnum;
    /**
     * Home phone number field validation control.
     */
    homePhoneNumber?: ContactSettings.HomePhoneNumberEnum;
    /**
     * Work phone number field validation control.
     */
    workPhoneNumber?: ContactSettings.WorkPhoneNumberEnum;
    /**
     * Other phone number field validation control.
     */
    otherPhoneNumber?: ContactSettings.OtherPhoneNumberEnum;
    /**
     * Fax number field validation control.
     */
    faxNumber?: ContactSettings.FaxNumberEnum;
    /**
     * Flag indicating to disable phone number formatting.
     */
    disablePhoneFormat?: boolean;
    /**
     * The default itinerary distribution option.
     */
    defaultItineraryDistribution?: ContactSettings.DefaultItineraryDistributionEnum;
    /**
     * Notification preference field validation control.
     */
    notificationPreference?: ContactSettings.NotificationPreferenceEnum;
    /**
     * The default notification preference.
     */
    defaultNotificationPreference?: ContactSettings.DefaultNotificationPreferenceEnum;
    /**
     * Flag indicating to default the customer preferences to the contact.
     */
    defaultToCustomerPreference?: boolean;
    /**
     * Gets or Sets the indicator whether contact language is masked.
     */
    maskContactLanguage?: boolean;
    /**
     * Gets or Sets the indicator whether contact language is masked.
     */
    maskIndiaGSTInfo?: boolean;
}
export namespace ContactSettings {
    export type TitleEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const TitleEnum = {
        Required: 'Required' as TitleEnum,
        Optional: 'Optional' as TitleEnum,
        Disabled: 'Disabled' as TitleEnum,
        RequiredMasked: 'RequiredMasked' as TitleEnum,
        OptionalMasked: 'OptionalMasked' as TitleEnum
    };
    export type FirstNameEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const FirstNameEnum = {
        Required: 'Required' as FirstNameEnum,
        Optional: 'Optional' as FirstNameEnum,
        Disabled: 'Disabled' as FirstNameEnum,
        RequiredMasked: 'RequiredMasked' as FirstNameEnum,
        OptionalMasked: 'OptionalMasked' as FirstNameEnum
    };
    export type MiddleNameEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const MiddleNameEnum = {
        Required: 'Required' as MiddleNameEnum,
        Optional: 'Optional' as MiddleNameEnum,
        Disabled: 'Disabled' as MiddleNameEnum,
        RequiredMasked: 'RequiredMasked' as MiddleNameEnum,
        OptionalMasked: 'OptionalMasked' as MiddleNameEnum
    };
    export type LastNameEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const LastNameEnum = {
        Required: 'Required' as LastNameEnum,
        Optional: 'Optional' as LastNameEnum,
        Disabled: 'Disabled' as LastNameEnum,
        RequiredMasked: 'RequiredMasked' as LastNameEnum,
        OptionalMasked: 'OptionalMasked' as LastNameEnum
    };
    export type SuffixEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const SuffixEnum = {
        Required: 'Required' as SuffixEnum,
        Optional: 'Optional' as SuffixEnum,
        Disabled: 'Disabled' as SuffixEnum,
        RequiredMasked: 'RequiredMasked' as SuffixEnum,
        OptionalMasked: 'OptionalMasked' as SuffixEnum
    };
    export type AddressLineOneEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const AddressLineOneEnum = {
        Required: 'Required' as AddressLineOneEnum,
        Optional: 'Optional' as AddressLineOneEnum,
        Disabled: 'Disabled' as AddressLineOneEnum,
        RequiredMasked: 'RequiredMasked' as AddressLineOneEnum,
        OptionalMasked: 'OptionalMasked' as AddressLineOneEnum
    };
    export type AddressLineTwoEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const AddressLineTwoEnum = {
        Required: 'Required' as AddressLineTwoEnum,
        Optional: 'Optional' as AddressLineTwoEnum,
        Disabled: 'Disabled' as AddressLineTwoEnum,
        RequiredMasked: 'RequiredMasked' as AddressLineTwoEnum,
        OptionalMasked: 'OptionalMasked' as AddressLineTwoEnum
    };
    export type AddressLineThreeEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const AddressLineThreeEnum = {
        Required: 'Required' as AddressLineThreeEnum,
        Optional: 'Optional' as AddressLineThreeEnum,
        Disabled: 'Disabled' as AddressLineThreeEnum,
        RequiredMasked: 'RequiredMasked' as AddressLineThreeEnum,
        OptionalMasked: 'OptionalMasked' as AddressLineThreeEnum
    };
    export type CityEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const CityEnum = {
        Required: 'Required' as CityEnum,
        Optional: 'Optional' as CityEnum,
        Disabled: 'Disabled' as CityEnum,
        RequiredMasked: 'RequiredMasked' as CityEnum,
        OptionalMasked: 'OptionalMasked' as CityEnum
    };
    export type StateEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const StateEnum = {
        Required: 'Required' as StateEnum,
        Optional: 'Optional' as StateEnum,
        Disabled: 'Disabled' as StateEnum,
        RequiredMasked: 'RequiredMasked' as StateEnum,
        OptionalMasked: 'OptionalMasked' as StateEnum
    };
    export type PostalCodeEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const PostalCodeEnum = {
        Required: 'Required' as PostalCodeEnum,
        Optional: 'Optional' as PostalCodeEnum,
        Disabled: 'Disabled' as PostalCodeEnum,
        RequiredMasked: 'RequiredMasked' as PostalCodeEnum,
        OptionalMasked: 'OptionalMasked' as PostalCodeEnum
    };
    export type CountryEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const CountryEnum = {
        Required: 'Required' as CountryEnum,
        Optional: 'Optional' as CountryEnum,
        Disabled: 'Disabled' as CountryEnum,
        RequiredMasked: 'RequiredMasked' as CountryEnum,
        OptionalMasked: 'OptionalMasked' as CountryEnum
    };
    export type EmailEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const EmailEnum = {
        Required: 'Required' as EmailEnum,
        Optional: 'Optional' as EmailEnum,
        Disabled: 'Disabled' as EmailEnum,
        RequiredMasked: 'RequiredMasked' as EmailEnum,
        OptionalMasked: 'OptionalMasked' as EmailEnum
    };
    export type HomePhoneNumberEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const HomePhoneNumberEnum = {
        Required: 'Required' as HomePhoneNumberEnum,
        Optional: 'Optional' as HomePhoneNumberEnum,
        Disabled: 'Disabled' as HomePhoneNumberEnum,
        RequiredMasked: 'RequiredMasked' as HomePhoneNumberEnum,
        OptionalMasked: 'OptionalMasked' as HomePhoneNumberEnum
    };
    export type WorkPhoneNumberEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const WorkPhoneNumberEnum = {
        Required: 'Required' as WorkPhoneNumberEnum,
        Optional: 'Optional' as WorkPhoneNumberEnum,
        Disabled: 'Disabled' as WorkPhoneNumberEnum,
        RequiredMasked: 'RequiredMasked' as WorkPhoneNumberEnum,
        OptionalMasked: 'OptionalMasked' as WorkPhoneNumberEnum
    };
    export type OtherPhoneNumberEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const OtherPhoneNumberEnum = {
        Required: 'Required' as OtherPhoneNumberEnum,
        Optional: 'Optional' as OtherPhoneNumberEnum,
        Disabled: 'Disabled' as OtherPhoneNumberEnum,
        RequiredMasked: 'RequiredMasked' as OtherPhoneNumberEnum,
        OptionalMasked: 'OptionalMasked' as OtherPhoneNumberEnum
    };
    export type FaxNumberEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const FaxNumberEnum = {
        Required: 'Required' as FaxNumberEnum,
        Optional: 'Optional' as FaxNumberEnum,
        Disabled: 'Disabled' as FaxNumberEnum,
        RequiredMasked: 'RequiredMasked' as FaxNumberEnum,
        OptionalMasked: 'OptionalMasked' as FaxNumberEnum
    };
    export type DefaultItineraryDistributionEnum = 'None' | 'Mail' | 'Email' | 'Fax' | 'MailFax' | 'Airport' | 'Hold' | 'Print';
    export const DefaultItineraryDistributionEnum = {
        None: 'None' as DefaultItineraryDistributionEnum,
        Mail: 'Mail' as DefaultItineraryDistributionEnum,
        Email: 'Email' as DefaultItineraryDistributionEnum,
        Fax: 'Fax' as DefaultItineraryDistributionEnum,
        MailFax: 'MailFax' as DefaultItineraryDistributionEnum,
        Airport: 'Airport' as DefaultItineraryDistributionEnum,
        Hold: 'Hold' as DefaultItineraryDistributionEnum,
        Print: 'Print' as DefaultItineraryDistributionEnum
    };
    export type NotificationPreferenceEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const NotificationPreferenceEnum = {
        Required: 'Required' as NotificationPreferenceEnum,
        Optional: 'Optional' as NotificationPreferenceEnum,
        Disabled: 'Disabled' as NotificationPreferenceEnum,
        RequiredMasked: 'RequiredMasked' as NotificationPreferenceEnum,
        OptionalMasked: 'OptionalMasked' as NotificationPreferenceEnum
    };
    export type DefaultNotificationPreferenceEnum = 'None' | 'Promotional';
    export const DefaultNotificationPreferenceEnum = {
        None: 'None' as DefaultNotificationPreferenceEnum,
        Promotional: 'Promotional' as DefaultNotificationPreferenceEnum
    };
}
