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
import { MessageBase } from '../model/messageBase';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class MessagesService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Deletes a message item.
     * 
     * @param messageKey The key of the message to delete.
     
     */
    public apiNskV1MessagesByMessageKeyDelete(messageKey: string, observe?: 'body', headers?: Headers): Observable<IJsonResponse>;
    public apiNskV1MessagesByMessageKeyDelete(messageKey: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<IJsonResponse>>;
    public apiNskV1MessagesByMessageKeyDelete(messageKey: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!messageKey){
            throw new Error('Required parameter messageKey was null or undefined when calling apiNskV1MessagesByMessageKeyDelete.');
        }

        headers['Accept'] = 'text/plain';

        const response: Observable<HttpResponse<IJsonResponse>> = this.httpClient.delete(`${this.basePath}/api/nsk/v1/messages/${encodeURIComponent(String(messageKey))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <IJsonResponse>(httpResponse.response));
        }
        return response;
    }


    /**
     * Retrieves a specific message item.
     * 
     * @param messageKey The key of the message to be retrieved.
     
     */
    public apiNskV1MessagesByMessageKeyGet(messageKey: string, observe?: 'body', headers?: Headers): Observable<MessageBase>;
    public apiNskV1MessagesByMessageKeyGet(messageKey: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<MessageBase>>;
    public apiNskV1MessagesByMessageKeyGet(messageKey: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!messageKey){
            throw new Error('Required parameter messageKey was null or undefined when calling apiNskV1MessagesByMessageKeyGet.');
        }

        headers['Accept'] = 'text/plain';

        const response: Observable<HttpResponse<MessageBase>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/messages/${encodeURIComponent(String(messageKey))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <MessageBase>(httpResponse.response));
        }
        return response;
    }


    /**
     * Retrieves a collection of messages based on search criteria.
     * 
     * @param searchType The type of search to be performed.
     * @param messageTypeCode The message type code to search for.
     * @param searchStartDate The start of created date range to search for.
     * @param searchEndDate The end of created date range to search for.
     * @param pageSize The number of records to return when paging.
     * @param lastIndex The index of the last set of records retrieved when paging.
     * @param searchValue The search query.
     
     */
    public apiNskV1MessagesGet(searchType: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', messageTypeCode?: string, searchStartDate?: Date, searchEndDate?: Date, pageSize?: number, lastIndex?: number, searchValue?: string, observe?: 'body', headers?: Headers): Observable<Array<MessageBase>>;
    public apiNskV1MessagesGet(searchType: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', messageTypeCode?: string, searchStartDate?: Date, searchEndDate?: Date, pageSize?: number, lastIndex?: number, searchValue?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<MessageBase>>>;
    public apiNskV1MessagesGet(searchType: 'StartsWith' | 'EndsWith' | 'Contains' | 'ExactMatch', messageTypeCode?: string, searchStartDate?: Date, searchEndDate?: Date, pageSize?: number, lastIndex?: number, searchValue?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!searchType){
            throw new Error('Required parameter searchType was null or undefined when calling apiNskV1MessagesGet.');
        }

        let queryParameters: string[] = [];
        if (messageTypeCode !== undefined) {
            queryParameters.push("messageTypeCode="+encodeURIComponent(String(messageTypeCode)));
        }
        if (searchStartDate !== undefined) {
           queryParameters.push("searchStartDate="+encodeURIComponent(<any>searchStartDate.toISOString()));
        }
        if (searchEndDate !== undefined) {
           queryParameters.push("searchEndDate="+encodeURIComponent(<any>searchEndDate.toISOString()));
        }
        if (pageSize !== undefined) {
            queryParameters.push("pageSize="+encodeURIComponent(String(pageSize)));
        }
        if (lastIndex !== undefined) {
            queryParameters.push("lastIndex="+encodeURIComponent(String(lastIndex)));
        }
        if (searchValue !== undefined) {
            queryParameters.push("searchValue="+encodeURIComponent(String(searchValue)));
        }
        if (searchType !== undefined) {
            queryParameters.push("searchType="+encodeURIComponent(String(searchType)));
        }

        headers['Accept'] = 'text/plain';

        const response: Observable<HttpResponse<Array<MessageBase>>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/messages?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Array<MessageBase>>(httpResponse.response));
        }
        return response;
    }


    /**
     * Adds a new message item.
     * 
     * @param request The message queue.
     
     */
    public apiNskV1MessagesPost(request?: MessageBase, observe?: 'body', headers?: Headers): Observable<MessageBase>;
    public apiNskV1MessagesPost(request?: MessageBase, observe?: 'response', headers?: Headers): Observable<HttpResponse<MessageBase>>;
    public apiNskV1MessagesPost(request?: MessageBase, observe: any = 'body', headers: Headers = {}): Observable<any> {
        headers['Accept'] = 'text/plain';
        headers['Content-Type'] = 'application/json-patch+json';

        const response: Observable<HttpResponse<MessageBase>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/messages`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <MessageBase>(httpResponse.response));
        }
        return response;
    }

}
