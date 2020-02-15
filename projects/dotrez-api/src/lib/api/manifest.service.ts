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
import { Manifest } from '../model/manifest';
import { ManifestRequestBase } from '../model/manifestRequestBase';
import { PassengerDetails } from '../model/passengerDetails';
import { PassengerSeatAssignment } from '../model/passengerSeatAssignment';
import { TripInformationResponse } from '../model/tripInformationResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ManifestService {

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
     * Gets the passenger details for the specified leg.
     * 
     * @param legKey The leg key.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1ManifestByLegKeyPassengerDetailsGet(legKey: string, observe?: 'body', reportProgress?: boolean): Observable<PassengerDetails>;
    public apiNskV1ManifestByLegKeyPassengerDetailsGet(legKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PassengerDetails>>;
    public apiNskV1ManifestByLegKeyPassengerDetailsGet(legKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PassengerDetails>>;
    public apiNskV1ManifestByLegKeyPassengerDetailsGet(legKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (legKey === null || legKey === undefined) {
            throw new Error('Required parameter legKey was null or undefined when calling apiNskV1ManifestByLegKeyPassengerDetailsGet.');
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

        return this.httpClient.get<PassengerDetails>(`${this.basePath}/api/nsk/v1/manifest/${encodeURIComponent(String(legKey))}/passengerDetails`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a list of seat assignment reports for the specified leg.
     * 
     * @param legKey The leg key.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet(legKey: string, observe?: 'body', reportProgress?: boolean): Observable<Array<PassengerSeatAssignment>>;
    public apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet(legKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PassengerSeatAssignment>>>;
    public apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet(legKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PassengerSeatAssignment>>>;
    public apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet(legKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (legKey === null || legKey === undefined) {
            throw new Error('Required parameter legKey was null or undefined when calling apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet.');
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

        return this.httpClient.get<Array<PassengerSeatAssignment>>(`${this.basePath}/api/nsk/v1/manifest/${encodeURIComponent(String(legKey))}/passengerSeatAssignments`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the manifest for the specified leg.
     * 
     * @param legKey The manifest leg key.
     * @param request The manifest request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1ManifestByLegKeyPost(legKey: string, request?: ManifestRequestBase, observe?: 'body', reportProgress?: boolean): Observable<Manifest>;
    public apiNskV1ManifestByLegKeyPost(legKey: string, request?: ManifestRequestBase, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Manifest>>;
    public apiNskV1ManifestByLegKeyPost(legKey: string, request?: ManifestRequestBase, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Manifest>>;
    public apiNskV1ManifestByLegKeyPost(legKey: string, request?: ManifestRequestBase, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (legKey === null || legKey === undefined) {
            throw new Error('Required parameter legKey was null or undefined when calling apiNskV1ManifestByLegKeyPost.');
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
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Manifest>(`${this.basePath}/api/nsk/v1/manifest/${encodeURIComponent(String(legKey))}`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the manifest trip information response list for the specified   manifest trip information search request.
     * 
     * @param beginDate The starting date of the trip information search.
     * @param origin The departure station.
     * @param destination The arrival station.
     * @param identifier The transportation identifier, such as a flight number.
     * @param carrierCode The carrier code.
     * @param flightType The flight type.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiNskV1ManifestGet(beginDate: Date, origin?: string, destination?: string, identifier?: string, carrierCode?: string, flightType?: 'All' | 'NonStop' | 'Through' | 'Direct' | 'Connect', observe?: 'body', reportProgress?: boolean): Observable<TripInformationResponse>;
    public apiNskV1ManifestGet(beginDate: Date, origin?: string, destination?: string, identifier?: string, carrierCode?: string, flightType?: 'All' | 'NonStop' | 'Through' | 'Direct' | 'Connect', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TripInformationResponse>>;
    public apiNskV1ManifestGet(beginDate: Date, origin?: string, destination?: string, identifier?: string, carrierCode?: string, flightType?: 'All' | 'NonStop' | 'Through' | 'Direct' | 'Connect', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TripInformationResponse>>;
    public apiNskV1ManifestGet(beginDate: Date, origin?: string, destination?: string, identifier?: string, carrierCode?: string, flightType?: 'All' | 'NonStop' | 'Through' | 'Direct' | 'Connect', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (beginDate === null || beginDate === undefined) {
            throw new Error('Required parameter beginDate was null or undefined when calling apiNskV1ManifestGet.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (origin !== undefined && origin !== null) {
            queryParameters = queryParameters.set('Origin', <any>origin);
        }
        if (destination !== undefined && destination !== null) {
            queryParameters = queryParameters.set('Destination', <any>destination);
        }
        if (beginDate !== undefined && beginDate !== null) {
            queryParameters = queryParameters.set('BeginDate', <any>beginDate.toISOString());
        }
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('Identifier', <any>identifier);
        }
        if (carrierCode !== undefined && carrierCode !== null) {
            queryParameters = queryParameters.set('CarrierCode', <any>carrierCode);
        }
        if (flightType !== undefined && flightType !== null) {
            queryParameters = queryParameters.set('FlightType', <any>flightType);
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

        return this.httpClient.get<TripInformationResponse>(`${this.basePath}/api/nsk/v1/manifest`,
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
