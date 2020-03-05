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
import { CheckinRequirementsGovernmentProgramRequirements } from './checkinRequirementsGovernmentProgramRequirements';
import { CheckinRequirementsPassengers } from './checkinRequirementsPassengers';


/**
 * Defines the pre checkin requirements.
 */
export interface CheckinRequirements { 
    /**
     * Flag indicating if the ability to checkin is valid.
     */
    readonly isValid?: boolean;
    passengers?: CheckinRequirementsPassengers;
    governmentProgramRequirements?: CheckinRequirementsGovernmentProgramRequirements;
    /**
     *     The list of any non passenger related checkin restrictions that will restrict the desired segments to be checked in.   The checkin restriction type = ('Closed', 'NotOpened', 'PnrLocked', 'MarketingCodeShareNotAllowed', 'NotPaidInFull', 'PaymentsPending',   'PaymentsPendingCustomerAction', 'RestrictedOnAnotherSystem', 'NotAllowed', 'ApisNotAllowed', 'AppsNotAllowed', 'SegmentNotFound', 'InvalidPrice').
     */
    restrictions?: Array<CheckinRequirements.RestrictionsEnum>;
}
export namespace CheckinRequirements {
    export type RestrictionsEnum = 'Closed' | 'NotOpened' | 'PnrLocked' | 'MarketingCodeShareNotAllowed' | 'NotPaidInFull' | 'PaymentsPending' | 'PaymentsPendingCustomerAction' | 'RestrictedOnAnotherSystem' | 'NotAllowed' | 'ApisNotAllowed' | 'AppsNotAllowed' | 'SegmentNotFound' | 'InvalidPrice' | 'MissingEMDCoupon';
    export const RestrictionsEnum = {
        Closed: 'Closed' as RestrictionsEnum,
        NotOpened: 'NotOpened' as RestrictionsEnum,
        PnrLocked: 'PnrLocked' as RestrictionsEnum,
        MarketingCodeShareNotAllowed: 'MarketingCodeShareNotAllowed' as RestrictionsEnum,
        NotPaidInFull: 'NotPaidInFull' as RestrictionsEnum,
        PaymentsPending: 'PaymentsPending' as RestrictionsEnum,
        PaymentsPendingCustomerAction: 'PaymentsPendingCustomerAction' as RestrictionsEnum,
        RestrictedOnAnotherSystem: 'RestrictedOnAnotherSystem' as RestrictionsEnum,
        NotAllowed: 'NotAllowed' as RestrictionsEnum,
        ApisNotAllowed: 'ApisNotAllowed' as RestrictionsEnum,
        AppsNotAllowed: 'AppsNotAllowed' as RestrictionsEnum,
        SegmentNotFound: 'SegmentNotFound' as RestrictionsEnum,
        InvalidPrice: 'InvalidPrice' as RestrictionsEnum,
        MissingEMDCoupon: 'MissingEMDCoupon' as RestrictionsEnum
    }
}
