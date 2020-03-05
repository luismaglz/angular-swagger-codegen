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

import { Booking } from '../model/booking';
import { IJsonResponse } from '../model/iJsonResponse';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class BookingretrieveService {
    private basePath: string = 'https://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Gets a specific booking by key and stores it in state.
     * This action requires a session token and the user logged in.
     * @param bookingKey The booking key.
     
     */
    public apiNskV1BookingRetrieveByBookingKeyGet(bookingKey: string, observe?: 'body', headers?: Headers): Observable<Booking>;
    public apiNskV1BookingRetrieveByBookingKeyGet(bookingKey: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Booking>>;
    public apiNskV1BookingRetrieveByBookingKeyGet(bookingKey: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!bookingKey){
            throw new Error('Required parameter bookingKey was null or undefined when calling apiNskV1BookingRetrieveByBookingKeyGet.');
        }

        headers['Accept'] = 'text/plain';

        const response: Observable<HttpResponse<Booking>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/booking/retrieve/${encodeURIComponent(String(bookingKey))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Booking>(httpResponse.response));
        }
        return response;
    }


    /**
     * Gets a specific booking by record locator and stores it in state.
     * This action requires a session token and the user logged in.
     * @param recordLocator The booking record locator.
     
     */
    public apiNskV1BookingRetrieveByRecordLocatorByRecordLocatorGet(recordLocator: string, observe?: 'body', headers?: Headers): Observable<Booking>;
    public apiNskV1BookingRetrieveByRecordLocatorByRecordLocatorGet(recordLocator: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Booking>>;
    public apiNskV1BookingRetrieveByRecordLocatorByRecordLocatorGet(recordLocator: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!recordLocator){
            throw new Error('Required parameter recordLocator was null or undefined when calling apiNskV1BookingRetrieveByRecordLocatorByRecordLocatorGet.');
        }

        headers['Accept'] = 'text/plain';

        const response: Observable<HttpResponse<Booking>> = this.httpClient.get(`${this.basePath}/api/nsk/v1/booking/retrieve/byRecordLocator/${encodeURIComponent(String(recordLocator))}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Booking>(httpResponse.response));
        }
        return response;
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
     
     */
    public apiNskV2BookingRetrieveGet(recordLocator: string, emailAddress?: string, origin?: string, firstName?: string, lastName?: string, customerNumber?: string, departureDate?: Date, observe?: 'body', headers?: Headers): Observable<Booking>;
    public apiNskV2BookingRetrieveGet(recordLocator: string, emailAddress?: string, origin?: string, firstName?: string, lastName?: string, customerNumber?: string, departureDate?: Date, observe?: 'response', headers?: Headers): Observable<HttpResponse<Booking>>;
    public apiNskV2BookingRetrieveGet(recordLocator: string, emailAddress?: string, origin?: string, firstName?: string, lastName?: string, customerNumber?: string, departureDate?: Date, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (!recordLocator){
            throw new Error('Required parameter recordLocator was null or undefined when calling apiNskV2BookingRetrieveGet.');
        }

        let queryParameters: string[] = [];
        if (recordLocator !== undefined) {
            queryParameters.push("recordLocator="+encodeURIComponent(String(recordLocator)));
        }
        if (emailAddress !== undefined) {
            queryParameters.push("emailAddress="+encodeURIComponent(String(emailAddress)));
        }
        if (origin !== undefined) {
            queryParameters.push("origin="+encodeURIComponent(String(origin)));
        }
        if (firstName !== undefined) {
            queryParameters.push("firstName="+encodeURIComponent(String(firstName)));
        }
        if (lastName !== undefined) {
            queryParameters.push("lastName="+encodeURIComponent(String(lastName)));
        }
        if (customerNumber !== undefined) {
            queryParameters.push("customerNumber="+encodeURIComponent(String(customerNumber)));
        }
        if (departureDate !== undefined) {
           queryParameters.push("departureDate="+encodeURIComponent(<any>departureDate.toISOString()));
        }

        headers['Accept'] = 'text/plain';

        const response: Observable<HttpResponse<Booking>> = this.httpClient.get(`${this.basePath}/api/nsk/v2/booking/retrieve?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.map(httpResponse => <Booking>(httpResponse.response));
        }
        return response;
    }

}
