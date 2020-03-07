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
    Contact, 
    ContactRequest, 
    DeltaMapperContactBase, 
    IJsonResponse, 
    InlineResponse2004, 
    PhoneNumber, 
    PhoneNumberBase, 
} from 'api-models';

import {
        apiNskV1BookingContactsByContactTypeCodeDelete,
        apiNskV1BookingContactsByContactTypeCodeGet,
        apiNskV1BookingContactsByContactTypeCodePatch,
        apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete,
        apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet,
        apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut,
        apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet,
        apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost,
        apiNskV1BookingContactsByContactTypeCodePut,
        apiNskV1BookingContactsGet,
        apiNskV1BookingContactsPost,
        apiNskV1BookingContactsPrimaryDelete,
        apiNskV1BookingContactsPrimaryGet,
        apiNskV1BookingContactsPrimaryPatch,
        apiNskV1BookingContactsPrimaryPost,
        apiNskV1BookingContactsPrimaryPut,
} from '../base/api'




@injectable()
export class StoreBookingcontactsService {

    constructor(@inject("Store") private store: Store<any>) {}

    /**
     * Deletes a specific contact on the booking.
     * 
     */
    public store_apiNskV1BookingContactsByContactTypeCodeDelete(contactTypeCode: string,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsByContactTypeCodeDelete(contactTypeCode,'body', headers);
        // TODO: Implement apiNskV1BookingContactsByContactTypeCodeDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets a specific contact on the booking.
     * 
     */
    public store_apiNskV1BookingContactsByContactTypeCodeGet(contactTypeCode: string,  headers?: Headers): Promise<Contact>
    {
        const response = await apiNskV1BookingContactsByContactTypeCodeGet(contactTypeCode,'body', headers);
        // TODO: Implement apiNskV1BookingContactsByContactTypeCodeGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Patches a specific contact on the booking.
     * 
     */
    public store_apiNskV1BookingContactsByContactTypeCodePatch(contactTypeCode: string, request?: DeltaMapperContactBase,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsByContactTypeCodePatch(contactTypeCode,request,'body', headers);
        // TODO: Implement apiNskV1BookingContactsByContactTypeCodePatch
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Deletes a specific phone number on a specific contact on the booking.
     * 
     */
    public store_apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete(contactTypeCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete(contactTypeCode,phoneNumberType,'body', headers);
        // TODO: Implement apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the specific phone number from a specific contact on the booking.
     * 
     */
    public store_apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet(contactTypeCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',  headers?: Headers): Promise<PhoneNumber>
    {
        const response = await apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet(contactTypeCode,phoneNumberType,'body', headers);
        // TODO: Implement apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Updates a specific phone number on a specific contact on the booking.
     * 
     */
    public store_apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut(contactTypeCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax', request?: PhoneNumberBase,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut(contactTypeCode,phoneNumberType,request,'body', headers);
        // TODO: Implement apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the collection of phone number for a specific contact on the booking.
     * 
     */
    public store_apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet(contactTypeCode: string,  headers?: Headers): Promise<Array<PhoneNumber>>
    {
        const response = await apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet(contactTypeCode,'body', headers);
        // TODO: Implement apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Creates a new phone number on a specific contact on the booking.
     * 
     */
    public store_apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost(contactTypeCode: string, request?: PhoneNumber,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost(contactTypeCode,request,'body', headers);
        // TODO: Implement apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Updates a specific contact on the booking.
     * 
     */
    public store_apiNskV1BookingContactsByContactTypeCodePut(contactTypeCode: string, request?: ContactRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsByContactTypeCodePut(contactTypeCode,request,'body', headers);
        // TODO: Implement apiNskV1BookingContactsByContactTypeCodePut
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets all the contacts on the booking.
     * 
     */
    public store_apiNskV1BookingContactsGet( headers?: Headers): Promise<InlineResponse2004>
    {
        const response = await apiNskV1BookingContactsGet('body', headers);
        // TODO: Implement apiNskV1BookingContactsGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Creates a new contact on the booking.
     * 
     */
    public store_apiNskV1BookingContactsPost(request?: Contact,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsPost(request,'body', headers);
        // TODO: Implement apiNskV1BookingContactsPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Delets the primary contact.
     * 
     */
    public store_apiNskV1BookingContactsPrimaryDelete( headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsPrimaryDelete('body', headers);
        // TODO: Implement apiNskV1BookingContactsPrimaryDelete
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Gets the primary contact based on configuration.
     * 
     */
    public store_apiNskV1BookingContactsPrimaryGet( headers?: Headers): Promise<Contact>
    {
        const response = await apiNskV1BookingContactsPrimaryGet('body', headers);
        // TODO: Implement apiNskV1BookingContactsPrimaryGet
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Patches the primary contact.
     * 
     */
    public store_apiNskV1BookingContactsPrimaryPatch(request?: DeltaMapperContactBase,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsPrimaryPatch(request,'body', headers);
        // TODO: Implement apiNskV1BookingContactsPrimaryPatch
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Creates a new primary contact based on configuration.
     * 
     */
    public store_apiNskV1BookingContactsPrimaryPost(request?: ContactRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsPrimaryPost(request,'body', headers);
        // TODO: Implement apiNskV1BookingContactsPrimaryPost
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }


    /**
     * Updates the primary contact.
     * 
     */
    public store_apiNskV1BookingContactsPrimaryPut(request?: ContactRequest,  headers?: Headers): Promise<IJsonResponse>
    {
        const response = await apiNskV1BookingContactsPrimaryPut(request,'body', headers);
        // TODO: Implement apiNskV1BookingContactsPrimaryPut
        // addResponsetoStore(this.store, response.data, true, true);
        return response;
    }

}
