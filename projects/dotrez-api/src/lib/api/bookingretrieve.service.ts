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
 Booking,
 IJsonResponse,
} from '../types/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class BookingretrieveService {

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
     * Gets a specific booking by key and stores it in state.
     * This action requires a session token and the user logged in.
     * @param bookingKey The booking key.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingRetrieveByBookingKeyGet(bookingKey: string, observe?: 'body', reportProgress?: boolean): Observable<{data:Booking,metadata:{documentation_url:string}}>;
    public apiNskV1BookingRetrieveByBookingKeyGet(bookingKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:Booking,metadata:{documentation_url:string}}>>;
    public apiNskV1BookingRetrieveByBookingKeyGet(bookingKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Booking>>;
    public apiNskV1BookingRetrieveByBookingKeyGet(bookingKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (bookingKey === null || bookingKey === undefined) {
            throw new Error('Required parameter bookingKey was null or undefined when calling apiNskV1BookingRetrieveByBookingKeyGet.');
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

        return this.httpClient.get<Booking>(`${this.basePath}/api/nsk/v1/booking/retrieve/${encodeURIComponent(String(bookingKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a specific booking by record locator and stores it in state.
     * This action requires a session token and the user logged in.
     * @param recordLocator The booking record locator.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1BookingRetrieveByRecordLocatorByRecordLocatorGet(recordLocator: string, observe?: 'body', reportProgress?: boolean): Observable<{data:Booking,metadata:{documentation_url:string}}>;
    public apiNskV1BookingRetrieveByRecordLocatorByRecordLocatorGet(recordLocator: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:Booking,metadata:{documentation_url:string}}>>;
    public apiNskV1BookingRetrieveByRecordLocatorByRecordLocatorGet(recordLocator: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Booking>>;
    public apiNskV1BookingRetrieveByRecordLocatorByRecordLocatorGet(recordLocator: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (recordLocator === null || recordLocator === undefined) {
            throw new Error('Required parameter recordLocator was null or undefined when calling apiNskV1BookingRetrieveByRecordLocatorByRecordLocatorGet.');
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

        return this.httpClient.get<Booking>(`${this.basePath}/api/nsk/v1/booking/retrieve/byRecordLocator/${encodeURIComponent(String(recordLocator))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves the booking from the New Skies server based on the retrieve booking request parameters and any configured  booking retrieve strategies. If the booking exists and the search criteria is allowed by one of the configured  booking  retrieve strategies, the booking will be loaded into the web session and returned.
     * This endpoint will perform validation using a pre-configured booking retrieve strategy.  Custom strategies can  be configured in Utilities, and are configurable based on application name.  To set-up a custom strategy, go to Utilities -&amp;gt; Resource Management.  From the \&quot;Resource Management\&quot; screen, go  to Root -&amp;gt; Web -&amp;gt; dotREZ folder.  Right click on the dotREZ folder and select \&quot;Add Content\&quot;.  On the \&quot;Add Resource\&quot;  screen, set the \&quot;Content Name\&quot; to \&quot;BookingStrategyManagementConfig\&quot;.  Choose \&quot;XML\&quot; as the \&quot;Type\&quot;.  The \&quot;Content Data\&quot;  will be in JSON, and should look like this:  &lt;example&gt;      {      \&quot;strategies\&quot; :      [{      \&quot;applicationName\&quot; : \&quot;dotREZApi\&quot;,      \&quot;allowedStrategies\&quot; : [      \&quot;firstAndLastName\&quot;,      \&quot;email\&quot;      ]      }, {      \&quot;applicationName\&quot; : \&quot;Web\&quot;,      \&quot;allowedStrategies\&quot; : [      \&quot;email\&quot;      ]      }, {      \&quot;applicationName\&quot; : \&quot;\&quot;,      \&quot;allowedStrategies\&quot; : [      \&quot;lastName\&quot;      ]      }]      }  &lt;/example&gt;  The application name can be set when creating a new token.  If no application name is given for a token create  request, the API will use whatever value is defined in the \&quot;dotrez-nsk-common.json\&quot; configuration file under the  \&quot;systemOptions\&quot; -&amp;gt; \&quot;fallbackApplicationName\&quot;.  If no strategies are configured and no \&quot;fallbackApplicationName\&quot; is  configured, the default strategy will be a booking retrieve based on PNR, first name, and last name.  If the same strategy should be used for multiple applications, the last entry in the example above can be set by  setting an empty string as the application name, and then listing the allowed strategies to be used.  Application  specific strategies can still be defined, but if no application specific strategy is found, a list of strategies  associated with the blank application name will be used (if one exists in the configuration file).  The list of strategies currently includes the following options:  &lt;ul&gt;&lt;li&gt;          firstAndLastName      &lt;/li&gt;&lt;li&gt;          email      &lt;/li&gt;&lt;li&gt;          originAndDepartureDate      &lt;/li&gt;&lt;li&gt;          lastName      &lt;/li&gt;&lt;li&gt;          customerNumber      &lt;/li&gt;&lt;/ul&gt;  More strategies may be added in the future.
     * @param recordLocator Record locator being requested.
     * @param emailAddress The email address of a contact.
     * @param origin The origin station code.
     * @param firstName The first name of a passenger or contact.
     * @param lastName The last name of a passenger or contact.
     * @param customerNumber One of the passengers customer numbers applied.
     * @param departureDate The first journeys departure date.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV2BookingRetrieveGet(recordLocator: string, emailAddress?: string, origin?: string, firstName?: string, lastName?: string, customerNumber?: string, departureDate?: Date, observe?: 'body', reportProgress?: boolean): Observable<{data:Booking,metadata:{documentation_url:string}}>;
    public apiNskV2BookingRetrieveGet(recordLocator: string, emailAddress?: string, origin?: string, firstName?: string, lastName?: string, customerNumber?: string, departureDate?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{data:Booking,metadata:{documentation_url:string}}>>;
    public apiNskV2BookingRetrieveGet(recordLocator: string, emailAddress?: string, origin?: string, firstName?: string, lastName?: string, customerNumber?: string, departureDate?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Booking>>;
    public apiNskV2BookingRetrieveGet(recordLocator: string, emailAddress?: string, origin?: string, firstName?: string, lastName?: string, customerNumber?: string, departureDate?: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (recordLocator === null || recordLocator === undefined) {
            throw new Error('Required parameter recordLocator was null or undefined when calling apiNskV2BookingRetrieveGet.');
        }







        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (recordLocator !== undefined && recordLocator !== null) {
            queryParameters = queryParameters.set('RecordLocator', <any>recordLocator);
        }
        if (emailAddress !== undefined && emailAddress !== null) {
            queryParameters = queryParameters.set('EmailAddress', <any>emailAddress);
        }
        if (origin !== undefined && origin !== null) {
            queryParameters = queryParameters.set('Origin', <any>origin);
        }
        if (firstName !== undefined && firstName !== null) {
            queryParameters = queryParameters.set('FirstName', <any>firstName);
        }
        if (lastName !== undefined && lastName !== null) {
            queryParameters = queryParameters.set('LastName', <any>lastName);
        }
        if (customerNumber !== undefined && customerNumber !== null) {
            queryParameters = queryParameters.set('CustomerNumber', <any>customerNumber);
        }
        if (departureDate !== undefined && departureDate !== null) {
            queryParameters = queryParameters.set('DepartureDate', <any>departureDate.toISOString());
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

        return this.httpClient.get<Booking>(`${this.basePath}/api/nsk/v2/booking/retrieve`,
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
