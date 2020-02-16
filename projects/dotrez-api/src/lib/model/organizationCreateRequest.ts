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
import { OrganizationExternalAccountRequest } from './organizationExternalAccountRequest';


/**
 * The data on the organization.
 */
export interface OrganizationCreateRequest { 
    /**
     * Send agency activation notification.
     */
    sendNotification?: boolean;
    /**
     * The organization code.
     */
    organizationCode: string;
    /**
     * External accounts.
     */
    externalAccounts?: Array<OrganizationExternalAccountRequest>;
    /**
     * Organization type.
     */
    type?: OrganizationCreateRequest.TypeEnum;
    /**
     * Commission rates.
     */
    commissionRates?: Array<OrganizationCommissionRate>;
    /**
     * Advanced configuration values.
     */
    configuration?: OrganizationConfigurationv2;
    /**
     * The company details.
     */
    company?: CompanyDetails;
    /**
     * The organization status.
     */
    status?: OrganizationCreateRequest.StatusEnum;
    /**
     * The contact details.
     */
    contact?: ContactDetails;
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
export namespace OrganizationCreateRequest {
    export type TypeEnum = 'Default' | 'Master' | 'Carrier' | 'TravelAgency' | 'ThirdParty';
    export type StatusEnum = 'Default' | 'Active' | 'Cancelled' | 'Pending';
}
