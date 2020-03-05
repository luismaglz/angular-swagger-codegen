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

import * as Models from '../models';
import { Dictionary } from '../models';
import * as Enums from '../enums';
import { getClient, Request } from '../helper';

import { Contact } from '../model/contact';
import { ContactRequest } from '../model/contactRequest';
import { DeltaMapperContactBase } from '../model/deltaMapperContactBase';
import { IJsonResponse } from '../model/iJsonResponse';
import { InlineResponse2004 } from '../model/inlineResponse2004';
import { PhoneNumber } from '../model/phoneNumber';
import { PhoneNumberBase } from '../model/phoneNumberBase';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class BookingcontactsService {

    constructor(@inject(HTTP_CLIENT) protected client: ApiHttpClient) {}

    /**
     * Deletes a specific contact on the booking.
     * 
     * @param contactTypeCode The unique type code.
     
     */
    public apiNskV1BookingContactsByContactTypeCodeDelete = (contactTypeCode: string, ) => {
        if (!contactTypeCode){
            throw new Error('Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodeDelete.');
        }


            const requestObj: Request<{
                contactTypeCode: string, 
            }> = {
                url: '/api/nsk/v1/booking/contacts/${encodeURIComponent(String(contactTypeCode))}',
                method: 'delete',
                data: {
                    contactTypeCode,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Gets a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     
     */
    public apiNskV1BookingContactsByContactTypeCodeGet = (contactTypeCode: string, ) => {
        if (!contactTypeCode){
            throw new Error('Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodeGet.');
        }


            const requestObj: Request<{
                contactTypeCode: string, 
            }> = {
                url: '/api/nsk/v1/booking/contacts/${encodeURIComponent(String(contactTypeCode))}',
                method: 'get',
                data: {
                    contactTypeCode,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Patches a specific contact on the booking.
     * 
     * @param contactTypeCode The unique type code.
     * @param request The patched contact request.
     
     */
    public apiNskV1BookingContactsByContactTypeCodePatch = (contactTypeCode: string, request?: DeltaMapperContactBase, ) => {
        if (!contactTypeCode){
            throw new Error('Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePatch.');
        }


            const requestObj: Request<{
                contactTypeCode: string, request?: DeltaMapperContactBase, 
            }> = {
                url: '/api/nsk/v1/booking/contacts/${encodeURIComponent(String(contactTypeCode))}',
                method: 'patch',
                data: {
                    contactTypeCode,request,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Deletes a specific phone number on a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     * @param phoneNumberType The phone number type.
     
     */
    public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete = (contactTypeCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax', ) => {
        if (!contactTypeCode){
            throw new Error('Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete.');
        }

        if (!phoneNumberType){
            throw new Error('Required parameter phoneNumberType was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete.');
        }


            const requestObj: Request<{
                contactTypeCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax', 
            }> = {
                url: '/api/nsk/v1/booking/contacts/${encodeURIComponent(String(contactTypeCode))}/phoneNumbers/${encodeURIComponent(String(phoneNumberType))}',
                method: 'delete',
                data: {
                    contactTypeCode,phoneNumberType,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Gets the specific phone number from a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     * @param phoneNumberType The phone number type.
     
     */
    public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet = (contactTypeCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax', ) => {
        if (!contactTypeCode){
            throw new Error('Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet.');
        }

        if (!phoneNumberType){
            throw new Error('Required parameter phoneNumberType was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet.');
        }


            const requestObj: Request<{
                contactTypeCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax', 
            }> = {
                url: '/api/nsk/v1/booking/contacts/${encodeURIComponent(String(contactTypeCode))}/phoneNumbers/${encodeURIComponent(String(phoneNumberType))}',
                method: 'get',
                data: {
                    contactTypeCode,phoneNumberType,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Updates a specific phone number on a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     * @param phoneNumberType The phone number type.
     * @param request The modified phone number.
     
     */
    public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut = (contactTypeCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax', request?: PhoneNumberBase, ) => {
        if (!contactTypeCode){
            throw new Error('Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut.');
        }

        if (!phoneNumberType){
            throw new Error('Required parameter phoneNumberType was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut.');
        }


            const requestObj: Request<{
                contactTypeCode: string, phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax', request?: PhoneNumberBase, 
            }> = {
                url: '/api/nsk/v1/booking/contacts/${encodeURIComponent(String(contactTypeCode))}/phoneNumbers/${encodeURIComponent(String(phoneNumberType))}',
                method: 'put',
                data: {
                    contactTypeCode,phoneNumberType,request,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Gets the collection of phone number for a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     
     */
    public apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet = (contactTypeCode: string, ) => {
        if (!contactTypeCode){
            throw new Error('Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet.');
        }


            const requestObj: Request<{
                contactTypeCode: string, 
            }> = {
                url: '/api/nsk/v1/booking/contacts/${encodeURIComponent(String(contactTypeCode))}/phoneNumbers',
                method: 'get',
                data: {
                    contactTypeCode,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Creates a new phone number on a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     * @param request The new phone number.
     
     */
    public apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost = (contactTypeCode: string, request?: PhoneNumber, ) => {
        if (!contactTypeCode){
            throw new Error('Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost.');
        }


            const requestObj: Request<{
                contactTypeCode: string, request?: PhoneNumber, 
            }> = {
                url: '/api/nsk/v1/booking/contacts/${encodeURIComponent(String(contactTypeCode))}/phoneNumbers',
                method: 'post',
                data: {
                    contactTypeCode,request,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Updates a specific contact on the booking.
     * 
     * @param contactTypeCode The unique type code.
     * @param request The modified contact.
     
     */
    public apiNskV1BookingContactsByContactTypeCodePut = (contactTypeCode: string, request?: ContactRequest, ) => {
        if (!contactTypeCode){
            throw new Error('Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePut.');
        }


            const requestObj: Request<{
                contactTypeCode: string, request?: ContactRequest, 
            }> = {
                url: '/api/nsk/v1/booking/contacts/${encodeURIComponent(String(contactTypeCode))}',
                method: 'put',
                data: {
                    contactTypeCode,request,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Gets all the contacts on the booking.
     * 
     
     */
    public apiNskV1BookingContactsGet = () => {

            const requestObj: Request<{
                
            }> = {
                url: '/api/nsk/v1/booking/contacts',
                method: 'get',
                data: {
                    
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Creates a new contact on the booking.
     * 
     * @param request The new contact.
     
     */
    public apiNskV1BookingContactsPost = (request?: Contact, ) => {

            const requestObj: Request<{
                request?: Contact, 
            }> = {
                url: '/api/nsk/v1/booking/contacts',
                method: 'post',
                data: {
                    request,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Delets the primary contact.
     * 
     
     */
    public apiNskV1BookingContactsPrimaryDelete = () => {

            const requestObj: Request<{
                
            }> = {
                url: '/api/nsk/v1/booking/contacts/primary',
                method: 'delete',
                data: {
                    
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Gets the primary contact based on configuration.
     * 
     
     */
    public apiNskV1BookingContactsPrimaryGet = () => {

            const requestObj: Request<{
                
            }> = {
                url: '/api/nsk/v1/booking/contacts/primary',
                method: 'get',
                data: {
                    
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Patches the primary contact.
     * 
     * @param request The patched contact request.
     
     */
    public apiNskV1BookingContactsPrimaryPatch = (request?: DeltaMapperContactBase, ) => {

            const requestObj: Request<{
                request?: DeltaMapperContactBase, 
            }> = {
                url: '/api/nsk/v1/booking/contacts/primary',
                method: 'patch',
                data: {
                    request,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Creates a new primary contact based on configuration.
     * 
     * @param request The new contact.
     
     */
    public apiNskV1BookingContactsPrimaryPost = (request?: ContactRequest, ) => {

            const requestObj: Request<{
                request?: ContactRequest, 
            }> = {
                url: '/api/nsk/v1/booking/contacts/primary',
                method: 'post',
                data: {
                    request,
                }
            };
            return this.client.makeRequest(requestObj);
    }


    /**
     * Updates the primary contact.
     * 
     * @param request The modified contact request.
     
     */
    public apiNskV1BookingContactsPrimaryPut = (request?: ContactRequest, ) => {

            const requestObj: Request<{
                request?: ContactRequest, 
            }> = {
                url: '/api/nsk/v1/booking/contacts/primary',
                method: 'put',
                data: {
                    request,
                }
            };
            return this.client.makeRequest(requestObj);
    }

}
