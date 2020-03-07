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

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { inject, injectable } from "inversify";
import { Store } from 'redux';
import {
    HttpResponse,
    Headers,
    IHttpClient,
    IJsonResponse, 
    OrganizationGroup, 
    OrganizationGroupDetails, 
} from 'api-models';

import {
        apiNskV1OrganizationsGroupsByOrganizationGroupCodeGet,
        apiNskV1OrganizationsGroupsGet,
} from '../base/api/index'




@injectable()
export class StoreOrganizationsService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * Retrieves the details of an organization group.
     * 
     */
    public async store_apiNskV1OrganizationsGroupsByOrganizationGroupCodeGet(organizationGroupCode: string,  headers?: Headers): Promise<OrganizationGroupDetails>
    {
        const response = await apiNskV1OrganizationsGroupsByOrganizationGroupCodeGet(organizationGroupCode,'body', headers).toPromise();
        // TODO: Implement apiNskV1OrganizationsGroupsByOrganizationGroupCodeGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Retrieves the organization groups.
     * 
     */
    public async store_apiNskV1OrganizationsGroupsGet( headers?: Headers): Promise<Array<OrganizationGroup>>
    {
        const response = await apiNskV1OrganizationsGroupsGet('body', headers).toPromise();
        // TODO: Implement apiNskV1OrganizationsGroupsGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
