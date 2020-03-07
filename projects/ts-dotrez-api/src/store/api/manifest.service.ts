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
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";
import {
    IJsonResponse 
    Manifest 
    ManifestRequestBase 
    PassengerDetails 
    PassengerSeatAssignment 
    TripInformationResponse 
} from 'api-models';

import {
        apiNskV1ManifestByLegKeyPassengerDetailsGet
        apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet
        apiNskV1ManifestByLegKeyPost
        apiNskV1ManifestGet
} from '../base/api'




@injectable()
export class StoreManifestService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * Gets the passenger details for the specified leg.
     * 
     */
    public store_apiNskV1ManifestByLegKeyPassengerDetailsGet(legKey: string,  headers?: Headers): Promise<PassengerDetails>
    {
        const response = await apiNskV1ManifestByLegKeyPassengerDetailsGet(legKey,'body', headers);
        // TODO: Implement apiNskV1ManifestByLegKeyPassengerDetailsGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets a list of seat assignment reports for the specified leg.
     * 
     */
    public store_apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet(legKey: string,  headers?: Headers): Promise<Array<PassengerSeatAssignment>>
    {
        const response = await apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet(legKey,'body', headers);
        // TODO: Implement apiNskV1ManifestByLegKeyPassengerSeatAssignmentsGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the manifest for the specified leg.
     * 
     */
    public store_apiNskV1ManifestByLegKeyPost(legKey: string, request?: ManifestRequestBase,  headers?: Headers): Promise<Manifest>
    {
        const response = await apiNskV1ManifestByLegKeyPost(legKey,request,'body', headers);
        // TODO: Implement apiNskV1ManifestByLegKeyPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the manifest trip information response list for the specified   manifest trip information search request.
     * 
     */
    public store_apiNskV1ManifestGet(beginDate: Date, origin?: string, destination?: string, identifier?: string, carrierCode?: string, flightType?: 'All' | 'NonStop' | 'Through' | 'Direct' | 'Connect',  headers?: Headers): Promise<TripInformationResponse>
    {
        const response = await apiNskV1ManifestGet(beginDate,origin,destination,identifier,carrierCode,flightType,'body', headers);
        // TODO: Implement apiNskV1ManifestGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
