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
    ActivityProduct, 
    ActivitySimpleRequest, 
    AddOn, 
    CarProduct, 
    HotelProduct, 
    HotelRequest, 
    ProductRequest, 
    QuoteCarRequest, 
    QuoteHotelRequest, 
    QuoteTokenRequest, 
    QuotedProduct, 
    SellCarRequest, 
    SellHotelRequest, 
    SellTokenRequest, 
} from 'api-models';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class AddOnsService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Gets availability.
     * This is functionally a GET but POST is used to reduce URL length overhead.
     * @param request Activity simple query.
     
     */
    public apiNskV1AddOnsActivitiesAvailablePost(request?: ActivitySimpleRequest, observe?: 'body', headers?: Headers): Observable<Array<ActivityProduct>>;
    public apiNskV1AddOnsActivitiesAvailablePost(request?: ActivitySimpleRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<ActivityProduct>>>;
    public apiNskV1AddOnsActivitiesAvailablePost(request?: ActivitySimpleRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<Array<ActivityProduct>>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/addOns/activities/available`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Array<ActivityProduct>>(httpResponse.response));
        }
        return response;
    }


    /**
     * Sell request for an activity.
     * 
     * @param request Items request.
     
     */
    public apiNskV1AddOnsActivitiesPost(request?: SellTokenRequest, observe?: 'body', headers?: Headers): Observable<AddOn>;
    public apiNskV1AddOnsActivitiesPost(request?: SellTokenRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<AddOn>>;
    public apiNskV1AddOnsActivitiesPost(request?: SellTokenRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<AddOn>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/addOns/activities`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <AddOn>(httpResponse.response));
        }
        return response;
    }


    /**
     * Quote an activity.
     * 
     * @param request Quote hotel request.
     
     */
    public apiNskV1AddOnsActivitiesQuotePost(request?: QuoteTokenRequest, observe?: 'body', headers?: Headers): Observable<QuotedProduct>;
    public apiNskV1AddOnsActivitiesQuotePost(request?: QuoteTokenRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<QuotedProduct>>;
    public apiNskV1AddOnsActivitiesQuotePost(request?: QuoteTokenRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<QuotedProduct>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/addOns/activities/quote`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <QuotedProduct>(httpResponse.response));
        }
        return response;
    }


    /**
     * Gets availability.
     * This is functionally a GET but POST is used to reduce URL length overhead.
     * @param request Activity simple query.
     
     */
    public apiNskV1AddOnsCarsAvailablePost(request?: ProductRequest, observe?: 'body', headers?: Headers): Observable<Array<CarProduct>>;
    public apiNskV1AddOnsCarsAvailablePost(request?: ProductRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<CarProduct>>>;
    public apiNskV1AddOnsCarsAvailablePost(request?: ProductRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<Array<CarProduct>>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/addOns/cars/available`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Array<CarProduct>>(httpResponse.response));
        }
        return response;
    }


    /**
     * Sell request for a car.
     * 
     * @param request Items request.
     
     */
    public apiNskV1AddOnsCarsPost(request?: SellCarRequest, observe?: 'body', headers?: Headers): Observable<AddOn>;
    public apiNskV1AddOnsCarsPost(request?: SellCarRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<AddOn>>;
    public apiNskV1AddOnsCarsPost(request?: SellCarRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<AddOn>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/addOns/cars`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <AddOn>(httpResponse.response));
        }
        return response;
    }


    /**
     * Quote car.
     * 
     * @param request Quote hotel request.
     
     */
    public apiNskV1AddOnsCarsQuotePost(request?: QuoteCarRequest, observe?: 'body', headers?: Headers): Observable<QuotedProduct>;
    public apiNskV1AddOnsCarsQuotePost(request?: QuoteCarRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<QuotedProduct>>;
    public apiNskV1AddOnsCarsQuotePost(request?: QuoteCarRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<QuotedProduct>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/addOns/cars/quote`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <QuotedProduct>(httpResponse.response));
        }
        return response;
    }


    /**
     * Gets availability.
     * This is functionally a GET but POST is used to reduce URL length overhead.
     * @param request Activity simple query.
     
     */
    public apiNskV1AddOnsHotelsAvailablePost(request?: HotelRequest, observe?: 'body', headers?: Headers): Observable<Array<HotelProduct>>;
    public apiNskV1AddOnsHotelsAvailablePost(request?: HotelRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<HotelProduct>>>;
    public apiNskV1AddOnsHotelsAvailablePost(request?: HotelRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<Array<HotelProduct>>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/addOns/hotels/available`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Array<HotelProduct>>(httpResponse.response));
        }
        return response;
    }


    /**
     * Sell request for a hotel.
     * 
     * @param request Items request.
     
     */
    public apiNskV1AddOnsHotelsPost(request?: SellHotelRequest, observe?: 'body', headers?: Headers): Observable<AddOn>;
    public apiNskV1AddOnsHotelsPost(request?: SellHotelRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<AddOn>>;
    public apiNskV1AddOnsHotelsPost(request?: SellHotelRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<AddOn>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/addOns/hotels`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <AddOn>(httpResponse.response));
        }
        return response;
    }


    /**
     * Quote hotel.
     * 
     * @param request Quote hotel request.
     
     */
    public apiNskV1AddOnsHotelsQuotePost(request?: QuoteHotelRequest, observe?: 'body', headers?: Headers): Observable<QuotedProduct>;
    public apiNskV1AddOnsHotelsQuotePost(request?: QuoteHotelRequest, observe?: 'response', headers?: Headers): Observable<HttpResponse<QuotedProduct>>;
    public apiNskV1AddOnsHotelsQuotePost(request?: QuoteHotelRequest, observe: any = 'body', headers: Headers = {}): Observable<any> {

        const response: Observable<HttpResponse<QuotedProduct>> = this.httpClient.post(`${this.basePath}/api/nsk/v1/addOns/hotels/quote`, request , headers);
        if (observe == 'body') {
               return response.map(httpResponse => <QuotedProduct>(httpResponse.response));
        }
        return response;
    }

}
