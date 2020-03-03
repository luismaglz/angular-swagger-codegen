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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';
import {
 Credentials,
 IJsonResponse,
 NskSessionContext,
 NskTokenRequest,
 ServerTransferRequest,
 SingleSignOnCredentials,
 TokenRequest,
 TokenResponse,
} from '../types/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

    protected basePath = 'https://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Sets the culture code for the lifetime of the token.
     * Note there is middleware that looks for \&quot;Culture\&quot; on every request in the headers or query string parameters.  These can be used if you want to set the culture for a single request only.
     * @param defaultCultureCode 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1TokenCulturePost(defaultCultureCode?: string, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1TokenCulturePost(defaultCultureCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1TokenCulturePost(defaultCultureCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1TokenCulturePost(defaultCultureCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (defaultCultureCode !== undefined && defaultCultureCode !== null) {
            queryParameters = queryParameters.set('defaultCultureCode', <any>defaultCultureCode);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<IJsonResponse>(`${this.basePath}/api/nsk/v1/token/culture`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Abandons the active token.
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1TokenDelete(observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1TokenDelete(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1TokenDelete(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1TokenDelete(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<IJsonResponse>(`${this.basePath}/api/nsk/v1/token`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the information about the current token.
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1TokenGet(observe?: 'body', reportProgress?: boolean): Observable<{data:NskSessionContext,metadata:{documentation_url:string}}>;
    public apiNskV1TokenGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:NskSessionContext,metadata:{documentation_url:string}}>>;
    public apiNskV1TokenGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NskSessionContext>>;
    public apiNskV1TokenGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<NskSessionContext>(`${this.basePath}/api/nsk/v1/token`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates the general access token that will grant access to the API.
     * Security Note:  This endpoint has the ability to log in as any role assigned to a user  or that is allowed through impersonation settings. A user may still log  into a role that is not assigned to them if the impersonation settings  allow it.
     * @param request The nsk token request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1TokenPost(request?: NskTokenRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:TokenResponse,metadata:{documentation_url:string}}>;
    public apiNskV1TokenPost(request?: NskTokenRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:TokenResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1TokenPost(request?: NskTokenRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenResponse>>;
    public apiNskV1TokenPost(request?: NskTokenRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TokenResponse>(`${this.basePath}/api/nsk/v1/token`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Given a non-null request, upgrades the current session&#39;s logged in user.  Otherwise, keeps the active token alive.
     * Security Note:  This endpoint has the ability to log in as any role assigned to a user  or that is allowed through impersonation settings. A user may still log  into a role that is not assigned to them if the impersonation settings  allow it.
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1TokenPut(request?: Credentials, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1TokenPut(request?: Credentials, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1TokenPut(request?: Credentials, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1TokenPut(request?: Credentials, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<IJsonResponse>(`${this.basePath}/api/nsk/v1/token`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Transfers the server context from NewSkies and returns a new token.
     * This endpoint returns a new token.  The new token must be applied in the  authorization header to access the transferred server context.
     * @param request The server transfer request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1TokenServerTransferPost(request?: ServerTransferRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:TokenResponse,metadata:{documentation_url:string}}>;
    public apiNskV1TokenServerTransferPost(request?: ServerTransferRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:TokenResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1TokenServerTransferPost(request?: ServerTransferRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenResponse>>;
    public apiNskV1TokenServerTransferPost(request?: ServerTransferRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TokenResponse>(`${this.basePath}/api/nsk/v1/token/serverTransfer`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates the general access token that will grant access to the API.
     * In order to use single sign on, a single sign on token must first be  associated with a user.  Refer to the \&quot;user/singleSignOnToken\&quot; endpoints.
     * @param credentials The single sign on credentials.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1TokenSingleSignOnPost(credentials?: SingleSignOnCredentials, observe?: 'body', reportProgress?: boolean): Observable<{data:TokenResponse,metadata:{documentation_url:string}}>;
    public apiNskV1TokenSingleSignOnPost(credentials?: SingleSignOnCredentials, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:TokenResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1TokenSingleSignOnPost(credentials?: SingleSignOnCredentials, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenResponse>>;
    public apiNskV1TokenSingleSignOnPost(credentials?: SingleSignOnCredentials, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TokenResponse>(`${this.basePath}/api/nsk/v1/token/singleSignOn`,
            credentials,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Given a non-null request, upgrades the current session&#39;s logged in user.  Otherwise, keeps the active token alive.
     * In order to use single sign on, a single sign on token must first be  associated with a user.  Refer to the \&quot;user/singleSignOnToken\&quot; endpoints.
     * @param credentials The single sign on credentials.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1TokenSingleSignOnPut(credentials?: SingleSignOnCredentials, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1TokenSingleSignOnPut(credentials?: SingleSignOnCredentials, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1TokenSingleSignOnPut(credentials?: SingleSignOnCredentials, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1TokenSingleSignOnPut(credentials?: SingleSignOnCredentials, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<IJsonResponse>(`${this.basePath}/api/nsk/v1/token/singleSignOn`,
            credentials,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1TokenDelete(observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiV1TokenDelete(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiV1TokenDelete(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiV1TokenDelete(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<IJsonResponse>(`${this.basePath}/api/v1/token`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1TokenPost(request?: TokenRequest, observe?: 'body', reportProgress?: boolean): Observable<{data:TokenResponse,metadata:{documentation_url:string}}>;
    public apiV1TokenPost(request?: TokenRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:TokenResponse,metadata:{documentation_url:string}}>>;
    public apiV1TokenPost(request?: TokenRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TokenResponse>>;
    public apiV1TokenPost(request?: TokenRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TokenResponse>(`${this.basePath}/api/v1/token`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1TokenPut(observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiV1TokenPut(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiV1TokenPut(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiV1TokenPut(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.put<IJsonResponse>(`${this.basePath}/api/v1/token`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
