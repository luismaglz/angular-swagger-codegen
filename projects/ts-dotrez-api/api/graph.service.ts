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

import { GraphQlQuery } from '../model/graphQlQuery';
import { GraphQlQueryv2 } from '../model/graphQlQueryv2';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class GraphService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Invokes a graph query configured in utilities.
     * When a graph query is configured on the server under Resource Management it allows your payload sizes to be even smaller.
     * @param queryName The query name matching your resource management configuration.
     * @param cachedResults True to return cached results.
     * @param variables The json matching your json variables in your graph query.
     
     */
    public apiNskV1GraphByQueryNamePost(queryName: string, cachedResults: boolean, variables?: any, observe?: 'body', headers?: Headers): Observable<any>;
    public apiNskV1GraphByQueryNamePost(queryName: string, cachedResults: boolean, variables?: any, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public apiNskV1GraphByQueryNamePost(queryName: string, cachedResults: boolean, variables?: any, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!queryName){
            throw new Error('Required parameter queryName was null or undefined when calling apiNskV1GraphByQueryNamePost.');
        }

        if (!cachedResults){
            throw new Error('Required parameter cachedResults was null or undefined when calling apiNskV1GraphByQueryNamePost.');
        }

        let queryParameters: string[] = [];
        if (cachedResults !== undefined) {
            queryParameters.push("cachedResults="+encodeURIComponent(String(cachedResults)));
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json-patch+json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/graph/${encodeURIComponent(String(queryName))}?${queryParameters.join('&')}`, variables , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <any>(httpResponse.response));
        }
        return response;
    }


    /**
     * 
     * 
     * @param query 
     
     */
    public apiV1GraphPost(query?: GraphQlQuery, observe?: 'body', headers?: Headers): Observable<any>;
    public apiV1GraphPost(query?: GraphQlQuery, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public apiV1GraphPost(query?: GraphQlQuery, observe: any = 'body', headers: Headers = {}): Observable<any> {
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json-patch+json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/api/v1/graph`, query , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <any>(httpResponse.response));
        }
        return response;
    }


    /**
     * 
     * 
     * @param queryName 
     * @param query 
     
     */
    public apiV2GraphByQueryNamePost(queryName: string, query?: GraphQlQueryv2, observe?: 'body', headers?: Headers): Observable<any>;
    public apiV2GraphByQueryNamePost(queryName: string, query?: GraphQlQueryv2, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public apiV2GraphByQueryNamePost(queryName: string, query?: GraphQlQueryv2, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!queryName){
            throw new Error('Required parameter queryName was null or undefined when calling apiV2GraphByQueryNamePost.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json-patch+json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/api/v2/graph/${encodeURIComponent(String(queryName))}`, query , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <any>(httpResponse.response));
        }
        return response;
    }

}
