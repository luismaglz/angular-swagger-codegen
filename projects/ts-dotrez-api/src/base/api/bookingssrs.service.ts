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
    IJsonResponse, 
    PassengerSsr, 
    PassengerSsrKey, 
    ResellSsrRequest, 
    SingleSsrByKeyRequestv2, 
    SsrAvailability, 
    SsrAvailabilityRequestv2, 
    SsrByKeysRequestv2, 
    SsrsRequest, 
} from 'api-models';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class BookingssrsService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Deletes by the SSR passenger key provided by metadata.
     * Requires a booking in state.
     * @param ssrKey Unique Ssr passenger identifier.
     
     */
    public apiNskV1BookingSsrsBySsrKeyDelete(ssrKey: string, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1BookingSsrsBySsrKeyDelete(ssrKey: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1BookingSsrsBySsrKeyDelete(ssrKey: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!ssrKey){
            throw new Error('Required parameter ssrKey was null or undefined when calling apiNskV1BookingSsrsBySsrKeyDelete.');
        }


        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.delete(`${this.basePath}/api/nsk/v1/booking/ssrs/${encodeURIComponent(String(ssrKey))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Retrieves the current SSR by key.
     * Requires a booking in state.
     * @param ssrKey 
     
     */
    public apiNskV1BookingSsrsBySsrKeyGet(ssrKey: string, observe?: 'body', headers?: Headers): Observable<PassengerSsr>;
    public apiNskV1BookingSsrsBySsrKeyGet(ssrKey: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<PassengerSsr>>;
    public apiNskV1BookingSsrsBySsrKeyGet(ssrKey: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!ssrKey){
            throw new Error('Required parameter ssrKey was null or undefined when calling apiNskV1BookingSsrsBySsrKeyGet.');
        }


        const response: Observable<HttpResponse<PassengerSsr>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/booking/ssrs/${encodeURIComponent(String(ssrKey))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <PassengerSsr>(httpResponse.response));
        }
        return response;
    }


    /**
     * Modify the ssr note.
     * Requires a booking in state.
     * @param ssrKey Unique Ssr key identifier.
     * @param note The updated note.
     
     */
    public apiNskV1BookingSsrsBySsrKeyPut(ssrKey: string, note?: string, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1BookingSsrsBySsrKeyPut(ssrKey: string, note?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1BookingSsrsBySsrKeyPut(ssrKey: string, note?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!ssrKey){
            throw new Error('Required parameter ssrKey was null or undefined when calling apiNskV1BookingSsrsBySsrKeyPut.');
        }


        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.put(`${this.basePath}/api/nsk/v1/booking/ssrs/${encodeURIComponent(String(ssrKey))}`, note , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Retrieves the current SSRs added to the booking in state.
     * Requires a booking in state.
     
     */
    public apiNskV1BookingSsrsGet(observe?: 'body', headers?: Headers): Observable<Array<PassengerSsr>>;
    public apiNskV1BookingSsrsGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<PassengerSsr>>>;
    public apiNskV1BookingSsrsGet(observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<Array<PassengerSsr>>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/booking/ssrs`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Array<PassengerSsr>>(httpResponse.response));
        }
        return response;
    }


    /**
     * Deletes the SSR by the request criteria.
     * Requires a booking in state.   This is an alternate way of deleting an SSR. Deleting by ID is recommended (see /api/booking/ssrs).  This method is useful if the UI is not querying availability and not using dynamic SSR information.
     * @param request Unique Ssr passenger information.
     
     */
    public apiNskV1BookingSsrsManualDelete(request?: PassengerSsrKey, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1BookingSsrsManualDelete(request?: PassengerSsrKey, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1BookingSsrsManualDelete(request?: PassengerSsrKey, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.delete(`${this.basePath}/api/nsk/v1/booking/ssrs/manual`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Adds SSRs to the booking in state.
     * Adding an SSR by journey automatically adds the SSR to every segment.  Requires a booking in state.  This is an alternate way of creating an SSR. Creating by ID is recommended (see /api/booking/ssrs).  This method is useful if the UI is not querying availability and not using dynamic SSR information.
     * @param request 
     
     */
    public apiNskV1BookingSsrsManualPost(request?: SsrsRequest, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1BookingSsrsManualPost(request?: SsrsRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1BookingSsrsManualPost(request?: SsrsRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/booking/ssrs/manual`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Resells any cancelled ssrs to the provided journey on the booking.
     * 
     * @param request The resell ssr request.
     
     */
    public apiNskV1BookingSsrsResellPost(request?: ResellSsrRequest, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1BookingSsrsResellPost(request?: ResellSsrRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1BookingSsrsResellPost(request?: ResellSsrRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/booking/ssrs/resell`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Get the ssr&#39;s available to add to the booking in state.
     * Requires a booking in state.  By default, all ssr availability for the booking is returned.
     * @param request Optional request filter.
     
     */
    public apiNskV2BookingSsrsAvailabilityPost(request?: SsrAvailabilityRequestv2, observe?: 'body', headers?: Headers): Observable<SsrAvailability>;
    public apiNskV2BookingSsrsAvailabilityPost(request?: SsrAvailabilityRequestv2, observe?: 'response', headers?: Headers): Observable<HttpResponse<SsrAvailability>>;
    public apiNskV2BookingSsrsAvailabilityPost(request?: SsrAvailabilityRequestv2, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<SsrAvailability>> = this.httpClient.post(`${this.basePath}/api/nsk/v2/booking/ssrs/availability`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <SsrAvailability>(httpResponse.response));
        }
        return response;
    }


    /**
     * Add an SSR to the booking in state.
     * Adding an SSR by journey automatically adds the SSR to every segment.  Requires a booking in state.
     * @param ssrKey The SSR key to add.
     * @param request The single SSR by key request.
     
     */
    public apiNskV2BookingSsrsBySsrKeyPost(ssrKey: string, request?: SingleSsrByKeyRequestv2, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV2BookingSsrsBySsrKeyPost(ssrKey: string, request?: SingleSsrByKeyRequestv2, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV2BookingSsrsBySsrKeyPost(ssrKey: string, request?: SingleSsrByKeyRequestv2, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!ssrKey){
            throw new Error('Required parameter ssrKey was null or undefined when calling apiNskV2BookingSsrsBySsrKeyPost.');
        }


        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.post(`${this.basePath}/api/nsk/v2/booking/ssrs/${encodeURIComponent(String(ssrKey))}`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Adds SSRs to the booking in state.
     * Adding an SSR by journey automatically adds the SSR to every segment.  Requires a booking in state.
     * @param request The SSR by keys request.
     
     */
    public apiNskV2BookingSsrsPost(request?: SsrByKeysRequestv2, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV2BookingSsrsPost(request?: SsrByKeysRequestv2, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV2BookingSsrsPost(request?: SsrByKeysRequestv2, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.post(`${this.basePath}/api/nsk/v2/booking/ssrs`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }

}
