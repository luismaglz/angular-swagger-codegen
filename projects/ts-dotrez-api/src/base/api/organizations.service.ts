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

import {
    IAPIConfiguration,
    HttpResponse,
    Headers,
    IHttpClient,
    IJsonResponse, 
    OrganizationGroup, 
    OrganizationGroupDetails, 
} from 'api-models';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class OrganizationsService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Retrieves the details of an organization group.
     * 
     * @param organizationGroupCode 
     
     */
    public apiNskV1OrganizationsGroupsByOrganizationGroupCodeGet(organizationGroupCode: string, observe?: 'body', headers?: Headers): Observable<OrganizationGroupDetails>;
    public apiNskV1OrganizationsGroupsByOrganizationGroupCodeGet(organizationGroupCode: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<OrganizationGroupDetails>>;
    public apiNskV1OrganizationsGroupsByOrganizationGroupCodeGet(organizationGroupCode: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!organizationGroupCode){
            throw new Error('Required parameter organizationGroupCode was null or undefined when calling apiNskV1OrganizationsGroupsByOrganizationGroupCodeGet.');
        }


        const response: Observable<HttpResponse<OrganizationGroupDetails>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/organizations/groups/${encodeURIComponent(String(organizationGroupCode))}`, headers);
        if (observe == 'body') {
               return response.pipe(map(httpResponse => <OrganizationGroupDetails>(httpResponse.response)));
        }
        return response;
    }


    /**
     * Retrieves the organization groups.
     * 
     
     */
    public apiNskV1OrganizationsGroupsGet(observe?: 'body', headers?: Headers): Observable<Array<OrganizationGroup>>;
    public apiNskV1OrganizationsGroupsGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<OrganizationGroup>>>;
    public apiNskV1OrganizationsGroupsGet(observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<Array<OrganizationGroup>>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/organizations/groups`, headers);
        if (observe == 'body') {
               return response.pipe(map(httpResponse => <Array<OrganizationGroup>>(httpResponse.response)));
        }
        return response;
    }

}
