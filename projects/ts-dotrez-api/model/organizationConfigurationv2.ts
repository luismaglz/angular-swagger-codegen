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
 * The configuration details of an organization.
 */

    import { OrganizationConfigurationv2<CAP>gdsEmailItinerary</CAP> } from '../models/enums';
    import { OrganizationConfigurationv2<CAP>referralType</CAP> } from '../models/enums';

export interface OrganizationConfigurationv2 { 
    /**
     * The culture code.
     */
    cultureCode?: string;
    /**
     * The currency code.
     */
    currencyCode?: string;
    /**
     * Commissionable.
     */
    commissionable?: boolean;
    /**
     * Recalculate commission.
     */
    recalculateCommission?: boolean;
    /**
     * Recall commission.
     */
    recallCommission?: boolean;
    /**
     * Netted total.
     */
    nettedTotal?: boolean;
    /**
     * Gds email itinerary.
     */
    gdsEmailItinerary?: OrganizationConfigurationv2<CAP>gdsEmailItinerary</CAP>;
    /**
     * Organization source is internal. Otherwise its external.
     */
    sourceIsInternal?: boolean;
    /**
     * Organization source is deleted. Otherwise its active.
     */
    sourceIsDeleted?: boolean;
    /**
     * The trace queue code.
     */
    traceQueueCode?: string;
    /**
     * Referral type.
     */
    referralType?: OrganizationConfigurationv2<CAP>referralType</CAP>;
}
