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

    import { ContactSettings<CAP>title</CAP> } from '../types/enums';
    import { ContactSettings<CAP>firstName</CAP> } from '../types/enums';
    import { ContactSettings<CAP>middleName</CAP> } from '../types/enums';
    import { ContactSettings<CAP>lastName</CAP> } from '../types/enums';
    import { ContactSettings<CAP>suffix</CAP> } from '../types/enums';
    import { ContactSettings<CAP>addressLineOne</CAP> } from '../types/enums';
    import { ContactSettings<CAP>addressLineTwo</CAP> } from '../types/enums';
    import { ContactSettings<CAP>addressLineThree</CAP> } from '../types/enums';
    import { ContactSettings<CAP>city</CAP> } from '../types/enums';
    import { ContactSettings<CAP>state</CAP> } from '../types/enums';
    import { ContactSettings<CAP>postalCode</CAP> } from '../types/enums';
    import { ContactSettings<CAP>country</CAP> } from '../types/enums';
    import { ContactSettings<CAP>email</CAP> } from '../types/enums';
    import { ContactSettings<CAP>homePhoneNumber</CAP> } from '../types/enums';
    import { ContactSettings<CAP>workPhoneNumber</CAP> } from '../types/enums';
    import { ContactSettings<CAP>otherPhoneNumber</CAP> } from '../types/enums';
    import { ContactSettings<CAP>faxNumber</CAP> } from '../types/enums';
    import { ContactSettings<CAP>defaultItineraryDistribution</CAP> } from '../types/enums';
    import { ContactSettings<CAP>notificationPreference</CAP> } from '../types/enums';
    import { ContactSettings<CAP>defaultNotificationPreference</CAP> } from '../types/enums';

export interface ContactSettings { 
    /**
     * Title field validation control.
     */
    title?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * First name field validation control.
     */
    firstName?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Middle name field validation control.
     */
    middleName?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Last name field validation control.
     */
    lastName?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Suffix field validation control.
     */
    suffix?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Address line one field validation control.
     */
    addressLineOne?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Address line two field validation control.
     */
    addressLineTwo?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Address line three field validation control.
     */
    addressLineThree?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Address city field validation control.
     */
    city?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Address state field validation control.
     */
    state?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Address postal code field validation control.
     */
    postalCode?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Address country field validation control.
     */
    country?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Email field validation control.
     */
    email?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Home phone number field validation control.
     */
    homePhoneNumber?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Work phone number field validation control.
     */
    workPhoneNumber?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Other phone number field validation control.
     */
    otherPhoneNumber?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Fax number field validation control.
     */
    faxNumber?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * Flag indicating to disable phone number formatting.
     */
    disablePhoneFormat?: boolean;
    /**
     * The default itinerary distribution option.
     */
    defaultItineraryDistribution?: <ENUM>'None'|'Mail'|'Email'|'Fax'|'MailFax'|'Airport'|'Hold'|'Print'</ENUM>;
    /**
     * Notification preference field validation control.
     */
    notificationPreference?: <ENUM>'Required'|'Optional'|'Disabled'|'RequiredMasked'|'OptionalMasked'</ENUM>;
    /**
     * The default notification preference.
     */
    defaultNotificationPreference?: <ENUM>'None'|'Promotional'</ENUM>;
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
