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

    import { Organizationv2<CAP>type</CAP> } from '../types/enums';
    import { Organizationv2<CAP>status</CAP> } from '../types/enums';

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
    type?: <ENUM>'Default'|'Master'|'Carrier'|'TravelAgency'|'ThirdParty'</ENUM>;
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
    status?: <ENUM>'Default'|'Active'|'Cancelled'|'Pending'</ENUM>;
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
