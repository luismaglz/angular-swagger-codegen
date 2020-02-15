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
import { CompanyEditDetails } from './companyEditDetails';
import { ContactEditDetails } from './contactEditDetails';
import { OrganizationConfigurationv2 } from './organizationConfigurationv2';


/**
 * The base data on the organization.
 */
export interface OrganizationEditRequest { 
    /**
     * The company details.
     */
    company?: CompanyEditDetails;
    /**
     * The organization code.
     */
    organizationCode: string;
    /**
     * The contact details.
     */
    contact?: ContactEditDetails;
    /**
     * Organization type.
     */
    type?: OrganizationEditRequest.TypeEnum;
    /**
     * Advanced configuration values.
     */
    configuration?: OrganizationConfigurationv2;
    /**
     * The organization status.
     */
    status?: OrganizationEditRequest.StatusEnum;
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
export namespace OrganizationEditRequest {
    export type TypeEnum = 'Default' | 'Master' | 'Carrier' | 'TravelAgency' | 'ThirdParty';
    export const TypeEnum = {
        Default: 'Default' as TypeEnum,
        Master: 'Master' as TypeEnum,
        Carrier: 'Carrier' as TypeEnum,
        TravelAgency: 'TravelAgency' as TypeEnum,
        ThirdParty: 'ThirdParty' as TypeEnum
    };
    export type StatusEnum = 'Default' | 'Active' | 'Cancelled' | 'Pending';
    export const StatusEnum = {
        Default: 'Default' as StatusEnum,
        Active: 'Active' as StatusEnum,
        Cancelled: 'Cancelled' as StatusEnum,
        Pending: 'Pending' as StatusEnum
    };
}
