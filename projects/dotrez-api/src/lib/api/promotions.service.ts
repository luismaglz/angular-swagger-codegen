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

import { IJsonResponse } from '../model/iJsonResponse';
import { Promotion } from '../model/promotion';
import { PromotionBase } from '../model/promotionBase';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

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
     * Gets a promotion based on the promotion code.
     * 
     * @param promotionCode The promotion code.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1PromotionsByPromotionCodeGet(promotionCode: string, observe?: 'body', reportProgress?: boolean): Observable<{data:Promotion,metadata:{documentation_url:string}}>;
    public apiNskV1PromotionsByPromotionCodeGet(promotionCode: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:Promotion,metadata:{documentation_url:string}}>>;
    public apiNskV1PromotionsByPromotionCodeGet(promotionCode: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Promotion>>;
    public apiNskV1PromotionsByPromotionCodeGet(promotionCode: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (promotionCode === null || promotionCode === undefined) {
            throw new Error('Required parameter promotionCode was null or undefined when calling apiNskV1PromotionsByPromotionCodeGet.');
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

        return this.httpClient.get<Promotion>(`${this.basePath}/api/nsk/v1/promotions/${encodeURIComponent(String(promotionCode))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Evaluates a promotion code and optional organization code to determine if   the associated promotion is valid or not.
     * This validates the promotion code based on the logged-in user if the   organization code is not provided.
     * @param promotionCode The promotion code.
     * @param organizationCode The optional organization code.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1PromotionsByPromotionCodeValidateGet(promotionCode: string, organizationCode?: string, observe?: 'body', reportProgress?: boolean): Observable<{data:IJsonResponse,metadata:{documentation_url:string}}>;
    public apiNskV1PromotionsByPromotionCodeValidateGet(promotionCode: string, organizationCode?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:IJsonResponse,metadata:{documentation_url:string}}>>;
    public apiNskV1PromotionsByPromotionCodeValidateGet(promotionCode: string, organizationCode?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IJsonResponse>>;
    public apiNskV1PromotionsByPromotionCodeValidateGet(promotionCode: string, organizationCode?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (promotionCode === null || promotionCode === undefined) {
            throw new Error('Required parameter promotionCode was null or undefined when calling apiNskV1PromotionsByPromotionCodeValidateGet.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (organizationCode !== undefined && organizationCode !== null) {
            queryParameters = queryParameters.set('organizationCode', <any>organizationCode);
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

        return this.httpClient.get<IJsonResponse>(`${this.basePath}/api/nsk/v1/promotions/${encodeURIComponent(String(promotionCode))}/validate`,
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
     * Gets promotions based on data in the request.
     * 
     * @param promotionCode The promotion code.
     * @param organizationCode The organization code.
     * @param effectiveDate The effective date of the promotion.
     * @param cultureCode The requested culture code.
     * @param promotionCodeMatching The matching criteria for the promotion code, by default if not set the criteria will be an exact match.
     * @param organizationCodeMatching The matching criteria for the organization code, by default if not set the criteria will be an exact match.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1PromotionsGet(promotionCode?: string, organizationCode?: string, effectiveDate?: Date, cultureCode?: string, promotionCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', organizationCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', observe?: 'body', reportProgress?: boolean): Observable<{data:Array<PromotionBase>,metadata:{documentation_url:string}}>;
    public apiNskV1PromotionsGet(promotionCode?: string, organizationCode?: string, effectiveDate?: Date, cultureCode?: string, promotionCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', organizationCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:Array<PromotionBase>,metadata:{documentation_url:string}}>>;
    public apiNskV1PromotionsGet(promotionCode?: string, organizationCode?: string, effectiveDate?: Date, cultureCode?: string, promotionCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', organizationCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PromotionBase>>>;
    public apiNskV1PromotionsGet(promotionCode?: string, organizationCode?: string, effectiveDate?: Date, cultureCode?: string, promotionCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', organizationCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {







        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (promotionCode !== undefined && promotionCode !== null) {
            queryParameters = queryParameters.set('PromotionCode', <any>promotionCode);
        }
        if (organizationCode !== undefined && organizationCode !== null) {
            queryParameters = queryParameters.set('OrganizationCode', <any>organizationCode);
        }
        if (effectiveDate !== undefined && effectiveDate !== null) {
            queryParameters = queryParameters.set('EffectiveDate', <any>effectiveDate.toISOString());
        }
        if (cultureCode !== undefined && cultureCode !== null) {
            queryParameters = queryParameters.set('CultureCode', <any>cultureCode);
        }
        if (promotionCodeMatching !== undefined && promotionCodeMatching !== null) {
            queryParameters = queryParameters.set('PromotionCodeMatching', <any>promotionCodeMatching);
        }
        if (organizationCodeMatching !== undefined && organizationCodeMatching !== null) {
            queryParameters = queryParameters.set('OrganizationCodeMatching', <any>organizationCodeMatching);
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

        return this.httpClient.get<Array<PromotionBase>>(`${this.basePath}/api/nsk/v1/promotions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
