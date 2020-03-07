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

import { IJsonResponse } from '../model/iJsonResponse';
import { OneTimeNotificationCreateRequest } from '../model/oneTimeNotificationCreateRequest';
import { OneTimeTravelNotification } from '../model/oneTimeTravelNotification';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class OneTimeTravelNotificationsService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Deletes a one time travel notification.
     * 
     * @param oneTimeTravelNotificationKey The one time travel notification key.
     
     */
    public apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyDelete(oneTimeTravelNotificationKey: string, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyDelete(oneTimeTravelNotificationKey: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyDelete(oneTimeTravelNotificationKey: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!oneTimeTravelNotificationKey){
            throw new Error('Required parameter oneTimeTravelNotificationKey was null or undefined when calling apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyDelete.');
        }


        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.delete(`${this.basePath}/api/nsk/v1/oneTimeTravelNotifications/${encodeURIComponent(String(oneTimeTravelNotificationKey))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Gets a one time travel notification.
     * 
     * @param oneTimeTravelNotificationKey The one time travel notification key.
     
     */
    public apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyGet(oneTimeTravelNotificationKey: string, observe?: 'body', headers?: Headers): Observable<OneTimeTravelNotification>;
    public apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyGet(oneTimeTravelNotificationKey: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<OneTimeTravelNotification>>;
    public apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyGet(oneTimeTravelNotificationKey: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!oneTimeTravelNotificationKey){
            throw new Error('Required parameter oneTimeTravelNotificationKey was null or undefined when calling apiNskV1OneTimeTravelNotificationsByOneTimeTravelNotificationKeyGet.');
        }


        const response: Observable<HttpResponse<OneTimeTravelNotification>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/oneTimeTravelNotifications/${encodeURIComponent(String(oneTimeTravelNotificationKey))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <OneTimeTravelNotification>(httpResponse.response));
        }
        return response;
    }


    /**
     * Creates a one time travel notification.
     * To get or delete a one time notification, you will need to store the key that is on the location header.
     * @param request The passenger travel notification create request.
     
     */
    public apiNskV1OneTimeTravelNotificationsPost(request?: OneTimeNotificationCreateRequest, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1OneTimeTravelNotificationsPost(request?: OneTimeNotificationCreateRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1OneTimeTravelNotificationsPost(request?: OneTimeNotificationCreateRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/oneTimeTravelNotifications`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }

}