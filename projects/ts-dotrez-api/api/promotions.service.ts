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
import { Promotion } from '../model/promotion';
import { PromotionBase } from '../model/promotionBase';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class PromotionsService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Gets a promotion based on the promotion code.
     * 
     * @param promotionCode The promotion code.
     
     */
    public apiNskV1PromotionsByPromotionCodeGet(promotionCode: string, observe?: 'body', headers?: Headers): Observable<Promotion>;
    public apiNskV1PromotionsByPromotionCodeGet(promotionCode: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Promotion>>;
    public apiNskV1PromotionsByPromotionCodeGet(promotionCode: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!promotionCode){
            throw new Error('Required parameter promotionCode was null or undefined when calling apiNskV1PromotionsByPromotionCodeGet.');
        }

        headers['Accept'] = 'text/plain';

        const response: Observable<HttpResponse<Promotion>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/promotions/${encodeURIComponent(String(promotionCode))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Promotion>(httpResponse.response));
        }
        return response;
    }


    /**
     * Evaluates a promotion code and optional organization code to determine if   the associated promotion is valid or not.
     * This validates the promotion code based on the logged-in user if the   organization code is not provided.
     * @param promotionCode The promotion code.
     * @param organizationCode The optional organization code.
     
     */
    public apiNskV1PromotionsByPromotionCodeValidateGet(promotionCode: string, organizationCode?: string, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1PromotionsByPromotionCodeValidateGet(promotionCode: string, organizationCode?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1PromotionsByPromotionCodeValidateGet(promotionCode: string, organizationCode?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!promotionCode){
            throw new Error('Required parameter promotionCode was null or undefined when calling apiNskV1PromotionsByPromotionCodeValidateGet.');
        }

        let queryParameters: string[] = [];
        if (organizationCode !== undefined) {
            queryParameters.push("organizationCode="+encodeURIComponent(String(organizationCode)));
        }

        headers['Accept'] = 'text/plain';

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/promotions/${encodeURIComponent(String(promotionCode))}/validate?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
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
     
     */
    public apiNskV1PromotionsGet(promotionCode?: string, organizationCode?: string, effectiveDate?: Date, cultureCode?: string, promotionCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', organizationCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', observe?: 'body', headers?: Headers): Observable<Array<PromotionBase>>;
    public apiNskV1PromotionsGet(promotionCode?: string, organizationCode?: string, effectiveDate?: Date, cultureCode?: string, promotionCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', organizationCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<PromotionBase>>>;
    public apiNskV1PromotionsGet(promotionCode?: string, organizationCode?: string, effectiveDate?: Date, cultureCode?: string, promotionCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', organizationCodeMatching?: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', observe: any = 'body', headers: Headers = {}): Observable<any> {
        let queryParameters: string[] = [];
        if (promotionCode !== undefined) {
            queryParameters.push("promotionCode="+encodeURIComponent(String(promotionCode)));
        }
        if (organizationCode !== undefined) {
            queryParameters.push("organizationCode="+encodeURIComponent(String(organizationCode)));
        }
        if (effectiveDate !== undefined) {
           queryParameters.push("effectiveDate="+encodeURIComponent(<any>effectiveDate.toISOString()));
        }
        if (cultureCode !== undefined) {
            queryParameters.push("cultureCode="+encodeURIComponent(String(cultureCode)));
        }
        if (promotionCodeMatching !== undefined) {
            queryParameters.push("promotionCodeMatching="+encodeURIComponent(String(promotionCodeMatching)));
        }
        if (organizationCodeMatching !== undefined) {
            queryParameters.push("organizationCodeMatching="+encodeURIComponent(String(organizationCodeMatching)));
        }

        headers['Accept'] = 'text/plain';

        const response: Observable<HttpResponse<Array<PromotionBase>>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/promotions?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Array<PromotionBase>>(httpResponse.response));
        }
        return response;
    }

}
