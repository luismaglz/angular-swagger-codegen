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
import IHttpClient from "../IHttpClient";
import { inject, injectable } from "inversify";
import { IAPIConfiguration } from "../IAPIConfiguration";
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";

import { EnvironmentHealth } from '../model/environmentHealth';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class ConfigurationService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Performs the dotREZ NSK API configuration check.
     * 
     
     */
    public apiNskV1ConfigurationCheckGet(observe?: 'body', headers?: Headers): Observable<EnvironmentHealth>;
    public apiNskV1ConfigurationCheckGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<EnvironmentHealth>>;
    public apiNskV1ConfigurationCheckGet(observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<EnvironmentHealth>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/configuration/check`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <EnvironmentHealth>(httpResponse.response));
        }
        return response;
    }

}