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
    CurrencyConversion, 
    IJsonResponse, 
} from 'api-models';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class CurrencyService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Calculates currency conversions.
     * 
     * @param fromCurrencyCode The currency code that the amount is currently in.
     * @param toCurrencyCode The currency code we want the amount converted to.
     * @param amount The amount to be converted. This will be in the FromCurrencyCode currency.
     
     */
    public apiNskV1CurrencyConverterGet(fromCurrencyCode: string, toCurrencyCode: string, amount: number, observe?: 'body', headers?: Headers): Observable<CurrencyConversion>;
    public apiNskV1CurrencyConverterGet(fromCurrencyCode: string, toCurrencyCode: string, amount: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<CurrencyConversion>>;
    public apiNskV1CurrencyConverterGet(fromCurrencyCode: string, toCurrencyCode: string, amount: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!fromCurrencyCode){
            throw new Error('Required parameter fromCurrencyCode was null or undefined when calling apiNskV1CurrencyConverterGet.');
        }

        if (!toCurrencyCode){
            throw new Error('Required parameter toCurrencyCode was null or undefined when calling apiNskV1CurrencyConverterGet.');
        }

        if (!amount){
            throw new Error('Required parameter amount was null or undefined when calling apiNskV1CurrencyConverterGet.');
        }

        let queryParameters: string[] = [];
        if (fromCurrencyCode !== undefined) {
            queryParameters.push("fromCurrencyCode="+encodeURIComponent(String(fromCurrencyCode)));
        }
        if (toCurrencyCode !== undefined) {
            queryParameters.push("toCurrencyCode="+encodeURIComponent(String(toCurrencyCode)));
        }
        if (amount !== undefined) {
            queryParameters.push("amount="+encodeURIComponent(String(amount)));
        }


        const response: Observable<HttpResponse<CurrencyConversion>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/currency/converter?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <CurrencyConversion>(httpResponse.response));
        }
        return response;
    }

}
