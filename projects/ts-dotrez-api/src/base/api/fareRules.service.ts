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
import { inject, injectable } from "inversify";

import {
    IAPIConfiguration,
    HttpResponse,
    Headers,
    IHttpClient,
    FareRule, 
    IJsonResponse, 
} from 'api-models';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class FareRulesService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Gets the fare rules from the server based on a fare availability key.
     * 
     * @param fareAvailabilityKey The unique fare availability key to get rules for.
     
     */
    public apiNskV1FareRulesByFareAvailabilityKeyGet(fareAvailabilityKey: string, observe?: 'body', headers?: Headers): Observable<FareRule>;
    public apiNskV1FareRulesByFareAvailabilityKeyGet(fareAvailabilityKey: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<FareRule>>;
    public apiNskV1FareRulesByFareAvailabilityKeyGet(fareAvailabilityKey: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!fareAvailabilityKey){
            throw new Error('Required parameter fareAvailabilityKey was null or undefined when calling apiNskV1FareRulesByFareAvailabilityKeyGet.');
        }


        const response: Observable<HttpResponse<FareRule>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/fareRules/${encodeURIComponent(String(fareAvailabilityKey))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <FareRule>(httpResponse.response));
        }
        return response;
    }

}
