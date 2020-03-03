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
import { CompanyDetails } from './companyDetails';
import { ContactDetails } from './contactDetails';
import { OrganizationCommissionRate } from './organizationCommissionRate';
import { OrganizationConfigurationv2 } from './organizationConfigurationv2';
import { OrganizationExternalAccountv2 } from './organizationExternalAccountv2';


/**
 * The base data on the organization.
 */
export interface Organizationv2 { 
    /**
     * External accounts.
     */
    externalAccounts?: Array<OrganizationExternalAccountv2>;
    /**
     * The organization code.
     */
    organizationCode: string;
    /**
     * Commission rates.
     */
    commissionRates?: Array<OrganizationCommissionRate>;
    /**
     * Organization type.
     */
    type?: Organizationv2.TypeEnum;
    /**
     * The company details.
     */
    company?: CompanyDetails;
    /**
     * Advanced configuration values.
     */
    configuration?: OrganizationConfigurationv2;
    /**
     * The contact details.
     */
    contact?: ContactDetails;
    /**
     * The organization status.
     */
    status?: Organizationv2.StatusEnum;
    /**
     * The parent organization code.
     */
    parentOrganizationCode?: string;
    /**
     * The statement note.
     */
    statementNote?: string;
    /**
     * The last statement date.
     */
    lastStatementDate?: Date;
}
export namespace Organizationv2 {
    export type TypeEnum = 'Default' | 'Master' | 'Carrier' | 'TravelAgency' | 'ThirdParty';
    export const TypeEnum = {
        Default: 'Default' as TypeEnum,
        Master: 'Master' as TypeEnum,
        Carrier: 'Carrier' as TypeEnum,
        TravelAgency: 'TravelAgency' as TypeEnum,
        ThirdParty: 'ThirdParty' as TypeEnum
    }
    export type StatusEnum = 'Default' | 'Active' | 'Cancelled' | 'Pending';
    export const StatusEnum = {
        Default: 'Default' as StatusEnum,
        Active: 'Active' as StatusEnum,
        Cancelled: 'Cancelled' as StatusEnum,
        Pending: 'Pending' as StatusEnum
    }
}
