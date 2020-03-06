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
 * The Booking Check-In Settings.
 */

    import { CheckInSettingsAllowApisCheckIn } from '../types/enums';
    import { CheckInSettingsAllowIappCheckIn } from '../types/enums';
    import { CheckInSettingsDomesticBagWeight } from '../types/enums';
    import { CheckInSettingsInternationalBagWeight } from '../types/enums';

export interface CheckInSettings { 
    /**
     * Gets or sets the APIS rules for Check-In.
     */
    allowApisCheckIn?: CheckInSettingsAllowApisCheckIn;
    /**
     * Gets or sets the IAPP rules for Check-In.
     */
    allowIappCheckIn?: CheckInSettingsAllowIappCheckIn;
    /**
     * Gets or sets the Domestic bag weight rules for Check-In.
     */
    domesticBagWeight?: CheckInSettingsDomesticBagWeight;
    /**
     * Gets or sets the International bag weight rules for Check-In.
     */
    internationalBagWeight?: CheckInSettingsInternationalBagWeight;
    /**
     * Gets or sets the flag to allow APPS Checkin.
     */
    allowAppsCheckIn?: boolean;
    /**
     * Gets or sets the flag to allow APPS override in Check-In.
     */
    allowAppsOverride?: boolean;
    /**
     * Gets or sets the allow bag tag destination mismatch flag for Check-In.
     */
    allowBagTagDestinationMismatch?: boolean;
    /**
     * Gets or sets the flag to allow reprinting bag tags for Check-In.
     */
    allowBagTagReprint?: boolean;
    /**
     * Gets or sets the flag that allows checked-in passenger to change flight for Check-In.
     */
    allowCheckedInPassengerFlightChange?: boolean;
    /**
     * Gets or sets the flag that allows checked-in passenger to change name for Check-In.
     */
    allowCheckedInPassengerNameChange?: boolean;
    /**
     * Gets or sets the flag that allows a passenger with pending payments to check-in.
     */
    allowCheckInOfPassengerWithPendingPayments?: boolean;
    /**
     * Gets or sets the flag that allows a passenger to check-in when ticket is collected for Check-In.
     */
    allowCheckInWhenTicketCollected?: boolean;
    /**
     * Gets or sets the status override flag for allowing an E-Ticket coupon for Check-In.
     */
    allowETicketCouponStatusOverride?: boolean;
    /**
     * Gets or sets the flag for allowing the gate info to be printed for Check-In.
     */
    allowGatePassPrinting?: boolean;
    /**
     * Gets or sets the flag for allowing an invalid booking to be checked-in.
     */
    allowInvalidBookingCheckIn?: boolean;
    /**
     * Gets or sets the flag for allowing manual clearance for Check-In.
     */
    allowManualClearance?: boolean;
    /**
     * Gets or sets the flag for allowing mid-journey Check-In.
     */
    allowMidJourneyCheckIn?: boolean;
    /**
     * Gets or sets the flag allowing a passenger with the name TBA to be allowed to check-in.
     */
    allowTbaCheckIn?: boolean;
    /**
     * Gets or sets the flag allowing to ignore market time restrictions for Check-In.
     */
    ignoreMarketTimeRestrictions?: boolean;
    /**
     * Gets or sets the timespan a checked-in passenger can change flights.
     */
    checkedInPassengerFlightChangeOffset?: string;
    /**
     * Gets or sets the timespan a checked-in passenger can change names.
     */
    checkedInPassengerNameChangeOffset?: string;
    /**
     * Gets or sets the timespan a passengers opportunity to check-in closes prior to flight.
     */
    checkedInCloseOffset?: string;
    /**
     * Gets or sets the timespan a passengers opportunity to check-in opens prior to flight.
     */
    checkedInOpenOffset?: string;
    /**
     * Gets or sets a collection of allowed SSR codes for Check-In reference.
     */
    allowedSsrCodes?: Array<string>;
    /**
     * Gets or sets a collection of restricted SSR codes for Check-In reference.
     */
    restrictedSsrCodes?: Array<string>;
    /**
     * Gets or sets a collection of required SSR codes for Check-In reference.
     */
    requiredSsrCodes?: Array<string>;
}
