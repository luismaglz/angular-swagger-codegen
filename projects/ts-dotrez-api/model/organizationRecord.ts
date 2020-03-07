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
import { CompanyDetailsRecord } from './companyDetailsRecord';
import { ContactDetails } from './contactDetails';


/**
 * The data on the user related agent's organization.
 */
import * as Enums from '../types/enums';

export interface OrganizationRecord { 
    /**
     * The organization code.
     */
    organizationCode: string;
    /**
     * Organization type.
     */
    type?: Enums.OrganizationType;
    /**
     * The company details.
     */
    company?: CompanyDetailsRecord;
    /**
     * The contact details.
     */
    contact?: ContactDetails;
    /**
     * The organization status.
     */
    status?: Enums.OrganizationStatus;
    /**
     * The parent organization code.
     */
    parentOrganizationCode?: string;
}
