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
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IHttpClient from "../IHttpClient";
import { inject, injectable } from "inversify";
import { IAPIConfiguration } from "../IAPIConfiguration";
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";

import { IJsonResponse } from '../model/iJsonResponse';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class RedisService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * 
     * 
     * @param name 
     
     */
    public apiV1RedisByNameDelete(name: string, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiV1RedisByNameDelete(name: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiV1RedisByNameDelete(name: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!name){
            throw new Error('Required parameter name was null or undefined when calling apiV1RedisByNameDelete.');
        }


        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.delete(`${this.basePath}/api/v1/redis/${encodeURIComponent(String(name))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * 
     * 
     
     */
    public apiV1RedisDelete(observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiV1RedisDelete(observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiV1RedisDelete(observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.delete(`${this.basePath}/api/v1/redis`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * 
     * 
     
     */
    public apiV1RedisGet(observe?: 'body', headers?: Headers): Observable<Array<string>>;
    public apiV1RedisGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<string>>>;
    public apiV1RedisGet(observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<Array<string>>> = this.httpClient.get(`${this.basePath}/api/v1/redis`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Array<string>>(httpResponse.response));
        }
        return response;
    }

}
