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
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from "rxjs/Observable";
import { map, toPromise } from "rxjs";
import { inject, injectable } from "inversify";

import {
    HttpResponse,
    Headers,
    IHttpClient,
    ChildAccountTransactionsRequest, 
    CreateOrganizationAccountRequest, 
    DeltaMapperOrganizationEditRequest, 
    IJsonResponse, 
    OrganizationAccount, 
    OrganizationCommissionRate, 
    OrganizationCreateRequest, 
    OrganizationEditRequest, 
    OrganizationExternalAccountRequest, 
    OrganizationExternalAccountv2, 
    OrganizationRecord, 
    OrganizationRegisterRequest, 
    OrganizationTransactionRequest, 
    Organizationv2, 
    PhoneNumber, 
    PhoneNumberBase, 
    Transaction, 
} from 'api-models';

import {
        apiNskV1Organizations2ByOrganizationCodeAccountChildAccountTransactionsPost,
        apiNskV1Organizations2ByOrganizationCodeAccountChildAccountTransactionsPut,
        apiNskV1Organizations2ByOrganizationCodeAccountGet,
        apiNskV1Organizations2ByOrganizationCodeAccountPost,
        apiNskV1Organizations2ByOrganizationCodeAccountStatusPut,
        apiNskV1Organizations2ByOrganizationCodeAccountTransactionsGet,
        apiNskV1Organizations2ByOrganizationCodeAccountTransactionsPost,
        apiNskV1Organizations2ByOrganizationCodeCommissionRatesByCommissionRateCodeDelete,
        apiNskV1Organizations2ByOrganizationCodeCommissionRatesByCommissionRateCodeGet,
        apiNskV1Organizations2ByOrganizationCodeCommissionRatesPost,
        apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersByPhoneNumberTypeDelete,
        apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersByPhoneNumberTypePut,
        apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersPost,
        apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersByPhoneNumberTypeDelete,
        apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersByPhoneNumberTypePut,
        apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersPost,
        apiNskV1Organizations2ByOrganizationCodeExternalAccountsByExternalAccountKeyDelete,
        apiNskV1Organizations2ByOrganizationCodeExternalAccountsByExternalAccountKeyGet,
        apiNskV1Organizations2ByOrganizationCodeExternalAccountsPost,
        apiNskV1Organizations2ByOrganizationCodeGet,
        apiNskV1Organizations2ByOrganizationCodePatch,
        apiNskV1Organizations2ByOrganizationCodePut,
        apiNskV1Organizations2Post,
        apiNskV1Organizations2RegisterPost,
        apiNskV2Organizations2Get,
} from '../base/api'




@injectable()
export class StoreOrganizations2Service {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * Adjust the available amount of a child account.
     * The known list of parent-child relations are as follows:  - Dependent accounts are not supported.  - A parent&#39;s account of type credit may have children of type supplemental or credit.  - A parent&#39;s account of type prepaid may have children of type prepaid.  - No other combination of parent-child relations are supported.
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeAccountChildAccountTransactionsPost(organizationCode: string, request?: ChildAccountTransactionsRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeAccountChildAccountTransactionsPost(organizationCode,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeAccountChildAccountTransactionsPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Adjust the credit limit of a child account.
     * The known list of parent-child relations are as follows:  - Dependent accounts are not supported.  - A parent&#39;s account of type credit may have children of type supplemental or credit.  - A parent&#39;s account of type prepaid may have children of type prepaid.  - No other combination of parent-child relations are supported.
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeAccountChildAccountTransactionsPut(organizationCode: string, request?: ChildAccountTransactionsRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeAccountChildAccountTransactionsPut(organizationCode,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeAccountChildAccountTransactionsPut
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Retrieves the organization account and collections based on the organization code.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeAccountGet(organizationCode: string,  headers?: Headers): Promise<OrganizationAccount>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeAccountGet(organizationCode,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeAccountGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Creates an organization account based on the organization code.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeAccountPost(organizationCode: string, request?: CreateOrganizationAccountRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeAccountPost(organizationCode,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeAccountPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Updates the organization account status.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeAccountStatusPut(organizationCode: string, status: 'Open' | 'Closed' | 'AgencyInactive' | 'Unknown',  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeAccountStatusPut(organizationCode,status,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeAccountStatusPut
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Retrieves the organization account transactions based on the organization code  and data in the request.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeAccountTransactionsGet(organizationCode: string, startTime: Date, sortByNewest: boolean, endTime?: Date, pageSize?: number, pageIndex?: number,  headers?: Headers): Promise<Array<Transaction>>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeAccountTransactionsGet(organizationCode,startTime,sortByNewest,endTime,pageSize,pageIndex,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeAccountTransactionsGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Creates account transactions based on data in the request and the  organization code.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeAccountTransactionsPost(organizationCode: string, request?: OrganizationTransactionRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeAccountTransactionsPost(organizationCode,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeAccountTransactionsPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Delete a commission rate.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeCommissionRatesByCommissionRateCodeDelete(organizationCode: string, commissionRateCode: string,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeCommissionRatesByCommissionRateCodeDelete(organizationCode,commissionRateCode,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeCommissionRatesByCommissionRateCodeDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Get a commission rate.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeCommissionRatesByCommissionRateCodeGet(organizationCode: string, commissionRateCode: string,  headers?: Headers): Promise<OrganizationCommissionRate>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeCommissionRatesByCommissionRateCodeGet(organizationCode,commissionRateCode,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeCommissionRatesByCommissionRateCodeGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Create a commission rate.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeCommissionRatesPost(organizationCode: string, request?: OrganizationCommissionRate,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeCommissionRatesPost(organizationCode,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeCommissionRatesPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Deletes a company phone number.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersByPhoneNumberTypeDelete(organizationCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersByPhoneNumberTypeDelete(organizationCode,phoneNumberType,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersByPhoneNumberTypeDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Updates a company phone number.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersByPhoneNumberTypePut(organizationCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax', request?: PhoneNumberBase,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersByPhoneNumberTypePut(organizationCode,phoneNumberType,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersByPhoneNumberTypePut
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Create a company phone number.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersPost(organizationCode: string, request?: PhoneNumber,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersPost(organizationCode,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeCompanyPhoneNumbersPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Deletes a contact phone number.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersByPhoneNumberTypeDelete(organizationCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersByPhoneNumberTypeDelete(organizationCode,phoneNumberType,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersByPhoneNumberTypeDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Updates a contact phone number.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersByPhoneNumberTypePut(organizationCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax', request?: PhoneNumberBase,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersByPhoneNumberTypePut(organizationCode,phoneNumberType,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersByPhoneNumberTypePut
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Create a contact phone number.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersPost(organizationCode: string, request?: PhoneNumber,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersPost(organizationCode,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeContactPhoneNumbersPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Delete an external account.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeExternalAccountsByExternalAccountKeyDelete(organizationCode: string, externalAccountKey: string,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeExternalAccountsByExternalAccountKeyDelete(organizationCode,externalAccountKey,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeExternalAccountsByExternalAccountKeyDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Get an external account.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeExternalAccountsByExternalAccountKeyGet(organizationCode: string, externalAccountKey: string,  headers?: Headers): Promise<OrganizationExternalAccountv2>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeExternalAccountsByExternalAccountKeyGet(organizationCode,externalAccountKey,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeExternalAccountsByExternalAccountKeyGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Create an external account.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeExternalAccountsPost(organizationCode: string, request?: OrganizationExternalAccountRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeExternalAccountsPost(organizationCode,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeExternalAccountsPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Retrieves the organization.
     * 
     */
    public async store_apiNskV1Organizations2ByOrganizationCodeGet(organizationCode: string,  headers?: Headers): Promise<Organizationv2>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodeGet(organizationCode,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodeGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Updates an organization.
     * Requires agent permissions.  The organization code is a generic code for all of the organization types. Each individual type has its own code  and validation.  If the organization status is not pending the organization code should follow these validation rules based on type:  &lt;ul&gt;&lt;li&gt;Third Party: 3 to 10 characters in length with alphanumeric values.&lt;/li&gt;&lt;li&gt;Travel Agency: 7 to 10 characters in length with numeric values.&lt;/li&gt;&lt;li&gt;Carrier: 2 to 3 characters in length with alphanumeric values.&lt;/li&gt;&lt;/ul&gt;
     */
    public async store_apiNskV1Organizations2ByOrganizationCodePatch(organizationCode: string, createRequest?: DeltaMapperOrganizationEditRequest,  headers?: Headers): Promise<Organizationv2>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodePatch(organizationCode,createRequest,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodePatch
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Updates an organization.
     * Requires agent permissions.  The organization code is a generic code for all of the organization types. Each individual type has its own code  and validation.  If the organization status is not pending the organization code should follow these validation rules based on type:  &lt;ul&gt;&lt;li&gt;Third Party: 3 to 10 characters in length with alphanumeric values.&lt;/li&gt;&lt;li&gt;Travel Agency: 7 to 10 characters in length with numeric values.&lt;/li&gt;&lt;li&gt;Carrier: 2 to 3 characters in length with alphanumeric values.&lt;/li&gt;&lt;/ul&gt;
     */
    public async store_apiNskV1Organizations2ByOrganizationCodePut(organizationCode: string, request?: OrganizationEditRequest,  headers?: Headers): Promise<Organizationv2>
    {
        const response = await apiNskV1Organizations2ByOrganizationCodePut(organizationCode,request,'body', headers);
        // TODO: Implement apiNskV1Organizations2ByOrganizationCodePut
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Create a new organization.
     * Requires agent permissions.  The organization code is a generic code for all of the organization types. Each individual type has its own code  and validation.  If the organization status is not pending the organization code should follow these validation rules based on type:  &lt;ul&gt;&lt;li&gt;Third Party: 3 to 10 characters in length with alphanumeric values.&lt;/li&gt;&lt;li&gt;Travel Agency: 7 to 10 characters in length with numeric values.&lt;/li&gt;&lt;li&gt;Carrier: 2 to 3 characters in length with alphanumeric values.&lt;/li&gt;&lt;/ul&gt;
     */
    public async store_apiNskV1Organizations2Post(createRequest?: OrganizationCreateRequest,  headers?: Headers): Promise<Organizationv2>
    {
        const response = await apiNskV1Organizations2Post(createRequest,'body', headers);
        // TODO: Implement apiNskV1Organizations2Post
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Requests to register a new organization.
     * Note: This is only a request. An agent will need to approve the action.
     */
    public async store_apiNskV1Organizations2RegisterPost(registerRequest?: OrganizationRegisterRequest,  headers?: Headers): Promise<Organizationv2>
    {
        const response = await apiNskV1Organizations2RegisterPost(registerRequest,'body', headers);
        // TODO: Implement apiNskV1Organizations2RegisterPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Searches for organizations.
     * 
     */
    public async store_apiNskV2Organizations2Get(type: 'Default' | 'Master' | 'Carrier' | 'TravelAgency' | 'ThirdParty', status: 'Default' | 'Active' | 'Cancelled' | 'Pending', organizationCode?: string, parentOrganizationCode?: string, companyName?: string, city?: string, postalCode?: string, pagedItemIndex?: number, pageSize?: number, matchCriteriaOrganizationCode?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', matchCriteriaParentOrganizationCode?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', matchCriteriaCompanyName?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', matchCriteriaCity?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', matchCriteriaPostalCode?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch',  headers?: Headers): Promise<Array<OrganizationRecord>>
    {
        const response = await apiNskV2Organizations2Get(type,status,organizationCode,parentOrganizationCode,companyName,city,postalCode,pagedItemIndex,pageSize,matchCriteriaOrganizationCode,matchCriteriaParentOrganizationCode,matchCriteriaCompanyName,matchCriteriaCity,matchCriteriaPostalCode,'body', headers);
        // TODO: Implement apiNskV2Organizations2Get
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}