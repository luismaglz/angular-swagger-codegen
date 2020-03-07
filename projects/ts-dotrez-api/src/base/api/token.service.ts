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

import {
    Credentials, 
    IJsonResponse, 
    NskSessionContext, 
    NskTokenRequest, 
    ServerTransferRequest, 
    SingleSignOnCredentials, 
    TokenRequest, 
    TokenResponse, 
} from 'api-models';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class TokenService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Sets the culture code for the lifetime of the token.
     * Note there is middleware that looks for \&quot;Culture\&quot; on every request in the headers or query string parameters.  These can be used if you want to set the culture for a single request only.
     * @param defaultCultureCode 
     
     */
    public apiNskV1TokenCulturePost(defaultCultureCode?: string, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1TokenCulturePost(defaultCultureCode?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1TokenCulturePost(defaultCultureCode?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        let queryParameters: string[] = [];
        if (defaultCultureCode !== undefined) {
            queryParameters.push("defaultCultureCode="+encodeURIComponent(String(defaultCultureCode)));
        }


        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/token/culture?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Abandons the active token.
     * 
     
     */
    public apiNskV1TokenDelete(observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1TokenDelete(observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1TokenDelete(observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.delete(`${this.basePath}/api/nsk/v1/token`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Get the information about the current token.
     * 
     
     */
    public apiNskV1TokenGet(observe?: 'body', headers?: Headers): Observable<NskSessionContext>;
    public apiNskV1TokenGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<NskSessionContext>>;
    public apiNskV1TokenGet(observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<NskSessionContext>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/token`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <NskSessionContext>(httpResponse.response));
        }
        return response;
    }


    /**
     * Creates the general access token that will grant access to the API.
     * Security Note:  This endpoint has the ability to log in as any role assigned to a user  or that is allowed through impersonation settings. A user may still log  into a role that is not assigned to them if the impersonation settings  allow it.
     * @param request The nsk token request.
     
     */
    public apiNskV1TokenPost(request?: NskTokenRequest, observe?: 'body', headers?: Headers): Observable<TokenResponse>;
    public apiNskV1TokenPost(request?: NskTokenRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<TokenResponse>>;
    public apiNskV1TokenPost(request?: NskTokenRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<TokenResponse>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/token`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <TokenResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Given a non-null request, upgrades the current session&#39;s logged in user.  Otherwise, keeps the active token alive.
     * Security Note:  This endpoint has the ability to log in as any role assigned to a user  or that is allowed through impersonation settings. A user may still log  into a role that is not assigned to them if the impersonation settings  allow it.
     * @param request 
     
     */
    public apiNskV1TokenPut(request?: Credentials, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1TokenPut(request?: Credentials, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1TokenPut(request?: Credentials, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.put(`${this.basePath}/api/nsk/v1/token`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Transfers the server context from NewSkies and returns a new token.
     * This endpoint returns a new token.  The new token must be applied in the  authorization header to access the transferred server context.
     * @param request The server transfer request.
     
     */
    public apiNskV1TokenServerTransferPost(request?: ServerTransferRequest, observe?: 'body', headers?: Headers): Observable<TokenResponse>;
    public apiNskV1TokenServerTransferPost(request?: ServerTransferRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<TokenResponse>>;
    public apiNskV1TokenServerTransferPost(request?: ServerTransferRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<TokenResponse>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/token/serverTransfer`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <TokenResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Creates the general access token that will grant access to the API.
     * In order to use single sign on, a single sign on token must first be  associated with a user.  Refer to the \&quot;user/singleSignOnToken\&quot; endpoints.
     * @param credentials The single sign on credentials.
     
     */
    public apiNskV1TokenSingleSignOnPost(credentials?: SingleSignOnCredentials, observe?: 'body', headers?: Headers): Observable<TokenResponse>;
    public apiNskV1TokenSingleSignOnPost(credentials?: SingleSignOnCredentials, observe?: 'response', headers?: Headers): Observable<HttpResponse<TokenResponse>>;
    public apiNskV1TokenSingleSignOnPost(credentials?: SingleSignOnCredentials, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<TokenResponse>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/token/singleSignOn`, credentials , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <TokenResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Given a non-null request, upgrades the current session&#39;s logged in user.  Otherwise, keeps the active token alive.
     * In order to use single sign on, a single sign on token must first be  associated with a user.  Refer to the \&quot;user/singleSignOnToken\&quot; endpoints.
     * @param credentials The single sign on credentials.
     
     */
    public apiNskV1TokenSingleSignOnPut(credentials?: SingleSignOnCredentials, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1TokenSingleSignOnPut(credentials?: SingleSignOnCredentials, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1TokenSingleSignOnPut(credentials?: SingleSignOnCredentials, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.put(`${this.basePath}/api/nsk/v1/token/singleSignOn`, credentials , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * 
     * 
     
     */
    public apiV1TokenDelete(observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiV1TokenDelete(observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiV1TokenDelete(observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.delete(`${this.basePath}/api/v1/token`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * 
     * 
     * @param request 
     
     */
    public apiV1TokenPost(request?: TokenRequest, observe?: 'body', headers?: Headers): Observable<TokenResponse>;
    public apiV1TokenPost(request?: TokenRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<TokenResponse>>;
    public apiV1TokenPost(request?: TokenRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<TokenResponse>> = this.httpClient.post(`${this.basePath}/api/v1/token`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <TokenResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * 
     * 
     
     */
    public apiV1TokenPut(observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiV1TokenPut(observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiV1TokenPut(observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.put(`${this.basePath}/api/v1/token`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }

}
