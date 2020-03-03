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
 * The booking customer account settings.
 */
export interface CustomerAccountSettings { 
    /**
     * The flag allowing two different customer accounts to be combined into a single account.
     */
    allowCustomerMerge?: boolean;
    /**
     * The flag allowing the current role to manage user customer programs.
     */
    allowCustomerProgram?: boolean;
    /**
     * The flag allowing the current role to manage user seat preferences.
     */
    allowSeatLocationOption?: boolean;
    /**
     * The restriction/permissions allowed by the current role.
     */
    customerAccessControl?: CustomerAccountSettings.CustomerAccessControlEnum;
    /**
     * The default notification preferences of the customer.
     */
    defaultCustomerNotificationPreference?: CustomerAccountSettings.DefaultCustomerNotificationPreferenceEnum;
    /**
     * The default seat preferences of the customer.
     */
    defaultSeatPreference?: CustomerAccountSettings.DefaultSeatPreferenceEnum;
    /**
     * The restrictions on the customer address fields.
     */
    disableCustomerAddress?: CustomerAccountSettings.DisableCustomerAddressEnum;
    /**
     * The restrictions on the customer currency fields.
     */
    disableCustomerCurrency?: CustomerAccountSettings.DisableCustomerCurrencyEnum;
    /**
     * The restrictions on the customer date of birth fields.
     */
    disableCustomerDateOfBirth?: CustomerAccountSettings.DisableCustomerDateOfBirthEnum;
    /**
     * The restrictions on the customer email fields.
     */
    disableCustomerEmail?: CustomerAccountSettings.DisableCustomerEmailEnum;
    /**
     * The restrictions on the customer fax fields.
     */
    disableCustomerFax?: CustomerAccountSettings.DisableCustomerFaxEnum;
    /**
     * The restrictions on the customer language fields.
     */
    disableCustomerLanguage?: CustomerAccountSettings.DisableCustomerLanguageEnum;
    /**
     * The restrictions on the customer nationality fields.
     */
    disableCustomerNationality?: CustomerAccountSettings.DisableCustomerNationalityEnum;
    /**
     * The restrictions on the customer notification preferences fields.
     */
    disableCustomerNotificationPreference?: CustomerAccountSettings.DisableCustomerNotificationPreferenceEnum;
    /**
     * The restrictions on the customer payment fields.
     */
    disableCustomerPayment?: CustomerAccountSettings.DisableCustomerPaymentEnum;
    /**
     * The restrictions on the customer phone number fields.
     */
    disableCustomerPhone?: CustomerAccountSettings.DisableCustomerPhoneEnum;
    /**
     * The restrictions on the customer resident country fields.
     */
    disableCustomerResidentCountry?: CustomerAccountSettings.DisableCustomerResidentCountryEnum;
    /**
     * The restrictions on the customer title fields.
     */
    disableCustomerTitle?: CustomerAccountSettings.DisableCustomerTitleEnum;
    /**
     * The restrictions on the customer type fields.
     */
    disableCustomerType?: CustomerAccountSettings.DisableCustomerTypeEnum;
}
export namespace CustomerAccountSettings {
    export type CustomerAccessControlEnum = 'View' | 'CreateAndChange';
    export const CustomerAccessControlEnum = {
        View: 'View' as CustomerAccessControlEnum,
        CreateAndChange: 'CreateAndChange' as CustomerAccessControlEnum
    }
    export type DefaultCustomerNotificationPreferenceEnum = 'None' | 'Promotional';
    export const DefaultCustomerNotificationPreferenceEnum = {
        None: 'None' as DefaultCustomerNotificationPreferenceEnum,
        Promotional: 'Promotional' as DefaultCustomerNotificationPreferenceEnum
    }
    export type DefaultSeatPreferenceEnum = 'None' | 'Window' | 'Aisle' | 'NoPreference' | 'Front' | 'Rear' | 'WindowFront' | 'WindowRear' | 'AisleFront' | 'AisleRear';
    export const DefaultSeatPreferenceEnum = {
        None: 'None' as DefaultSeatPreferenceEnum,
        Window: 'Window' as DefaultSeatPreferenceEnum,
        Aisle: 'Aisle' as DefaultSeatPreferenceEnum,
        NoPreference: 'NoPreference' as DefaultSeatPreferenceEnum,
        Front: 'Front' as DefaultSeatPreferenceEnum,
        Rear: 'Rear' as DefaultSeatPreferenceEnum,
        WindowFront: 'WindowFront' as DefaultSeatPreferenceEnum,
        WindowRear: 'WindowRear' as DefaultSeatPreferenceEnum,
        AisleFront: 'AisleFront' as DefaultSeatPreferenceEnum,
        AisleRear: 'AisleRear' as DefaultSeatPreferenceEnum
    }
    export type DisableCustomerAddressEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerAddressEnum = {
        Required: 'Required' as DisableCustomerAddressEnum,
        Optional: 'Optional' as DisableCustomerAddressEnum,
        Disabled: 'Disabled' as DisableCustomerAddressEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerAddressEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerAddressEnum
    }
    export type DisableCustomerCurrencyEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerCurrencyEnum = {
        Required: 'Required' as DisableCustomerCurrencyEnum,
        Optional: 'Optional' as DisableCustomerCurrencyEnum,
        Disabled: 'Disabled' as DisableCustomerCurrencyEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerCurrencyEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerCurrencyEnum
    }
    export type DisableCustomerDateOfBirthEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerDateOfBirthEnum = {
        Required: 'Required' as DisableCustomerDateOfBirthEnum,
        Optional: 'Optional' as DisableCustomerDateOfBirthEnum,
        Disabled: 'Disabled' as DisableCustomerDateOfBirthEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerDateOfBirthEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerDateOfBirthEnum
    }
    export type DisableCustomerEmailEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerEmailEnum = {
        Required: 'Required' as DisableCustomerEmailEnum,
        Optional: 'Optional' as DisableCustomerEmailEnum,
        Disabled: 'Disabled' as DisableCustomerEmailEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerEmailEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerEmailEnum
    }
    export type DisableCustomerFaxEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerFaxEnum = {
        Required: 'Required' as DisableCustomerFaxEnum,
        Optional: 'Optional' as DisableCustomerFaxEnum,
        Disabled: 'Disabled' as DisableCustomerFaxEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerFaxEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerFaxEnum
    }
    export type DisableCustomerLanguageEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerLanguageEnum = {
        Required: 'Required' as DisableCustomerLanguageEnum,
        Optional: 'Optional' as DisableCustomerLanguageEnum,
        Disabled: 'Disabled' as DisableCustomerLanguageEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerLanguageEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerLanguageEnum
    }
    export type DisableCustomerNationalityEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerNationalityEnum = {
        Required: 'Required' as DisableCustomerNationalityEnum,
        Optional: 'Optional' as DisableCustomerNationalityEnum,
        Disabled: 'Disabled' as DisableCustomerNationalityEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerNationalityEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerNationalityEnum
    }
    export type DisableCustomerNotificationPreferenceEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerNotificationPreferenceEnum = {
        Required: 'Required' as DisableCustomerNotificationPreferenceEnum,
        Optional: 'Optional' as DisableCustomerNotificationPreferenceEnum,
        Disabled: 'Disabled' as DisableCustomerNotificationPreferenceEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerNotificationPreferenceEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerNotificationPreferenceEnum
    }
    export type DisableCustomerPaymentEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerPaymentEnum = {
        Required: 'Required' as DisableCustomerPaymentEnum,
        Optional: 'Optional' as DisableCustomerPaymentEnum,
        Disabled: 'Disabled' as DisableCustomerPaymentEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerPaymentEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerPaymentEnum
    }
    export type DisableCustomerPhoneEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerPhoneEnum = {
        Required: 'Required' as DisableCustomerPhoneEnum,
        Optional: 'Optional' as DisableCustomerPhoneEnum,
        Disabled: 'Disabled' as DisableCustomerPhoneEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerPhoneEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerPhoneEnum
    }
    export type DisableCustomerResidentCountryEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerResidentCountryEnum = {
        Required: 'Required' as DisableCustomerResidentCountryEnum,
        Optional: 'Optional' as DisableCustomerResidentCountryEnum,
        Disabled: 'Disabled' as DisableCustomerResidentCountryEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerResidentCountryEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerResidentCountryEnum
    }
    export type DisableCustomerTitleEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerTitleEnum = {
        Required: 'Required' as DisableCustomerTitleEnum,
        Optional: 'Optional' as DisableCustomerTitleEnum,
        Disabled: 'Disabled' as DisableCustomerTitleEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerTitleEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerTitleEnum
    }
    export type DisableCustomerTypeEnum = 'Required' | 'Optional' | 'Disabled' | 'RequiredMasked' | 'OptionalMasked';
    export const DisableCustomerTypeEnum = {
        Required: 'Required' as DisableCustomerTypeEnum,
        Optional: 'Optional' as DisableCustomerTypeEnum,
        Disabled: 'Disabled' as DisableCustomerTypeEnum,
        RequiredMasked: 'RequiredMasked' as DisableCustomerTypeEnum,
        OptionalMasked: 'OptionalMasked' as DisableCustomerTypeEnum
    }
}
