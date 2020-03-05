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
import { CheckinAddressRequirements } from './checkinAddressRequirements';
import { CheckinDocumentRequirements } from './checkinDocumentRequirements';
import { CheckinMissingSegmentRequiredSsr } from './checkinMissingSegmentRequiredSsr';
import { CheckinPassengerRestriction } from './checkinPassengerRestriction';


/**
 * Defines an individual passengers checkin requirements.
 */

export interface CheckinPassengerRequirements { 
    /**
     * Flag indicating if the specific passenger checkin is valid.
     */
    readonly isValid?: boolean;
    /**
     * The associated passenger key.
     */
    passengerKey?: string;
    /**
     * The passengers document requirements.
     */
    documentRequirements?: CheckinDocumentRequirements;
    /**
     * The passengers address requirements.
     */
    addressRequirements?: CheckinAddressRequirements;
    /**
     * The collection of checkin restricted/invalid SSR's the passenger contains.
     */
    invalidSsrs?: Array<string>;
    /**
     * The collection of checkin required SSR's the passenger is missing for each segment.
     */
    requiredSsrs?: Array<CheckinMissingSegmentRequiredSsr>;
    /**
     * The list of passengers restrictions that will restrict passenger from checkin.
     */
    restrictions?: Array<CheckinPassengerRestriction>;
}
