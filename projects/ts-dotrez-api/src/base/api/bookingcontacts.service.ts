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

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { inject, injectable } from 'inversify';

import {
  Contact,
  ContactRequest,
  DeltaMapperContactBase,
  IJsonResponse,
  InlineResponse2004,
  PhoneNumber,
  PhoneNumberBase
} from 'api-models';

import { IHttpClient } from '../IHttpClient';
import { IAPIConfiguration } from '../IAPIConfiguration';
import { HttpResponse } from '../HttpResponse';
import { Headers } from '../Headers';

import { COLLECTION_FORMATS } from '../variables';

@injectable()
export class BookingcontactsService {
  private basePath: string = 'https://localhost';

  constructor(
    @inject('IApiHttpClient') private httpClient: IHttpClient,
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration
  ) {
    if (this.APIConfiguration.basePath)
      this.basePath = this.APIConfiguration.basePath;
  }

  /**
     * Deletes a specific contact on the booking.
     * 
     * @param contactTypeCode The unique type code.
     
     */
  public apiNskV1BookingContactsByContactTypeCodeDelete(
    contactTypeCode: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodeDelete(
    contactTypeCode: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodeDelete(
    contactTypeCode: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!contactTypeCode) {
      throw new Error(
        'Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodeDelete.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     
     */
  public apiNskV1BookingContactsByContactTypeCodeGet(
    contactTypeCode: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<Contact>;
  public apiNskV1BookingContactsByContactTypeCodeGet(
    contactTypeCode: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Contact>>;
  public apiNskV1BookingContactsByContactTypeCodeGet(
    contactTypeCode: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!contactTypeCode) {
      throw new Error(
        'Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodeGet.'
      );
    }

    const response: Observable<HttpResponse<Contact>> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(map(httpResponse => <Contact>httpResponse.response));
    }
    return response;
  }

  /**
     * Patches a specific contact on the booking.
     * 
     * @param contactTypeCode The unique type code.
     * @param request The patched contact request.
     
     */
  public apiNskV1BookingContactsByContactTypeCodePatch(
    contactTypeCode: string,
    request?: DeltaMapperContactBase,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodePatch(
    contactTypeCode: string,
    request?: DeltaMapperContactBase,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePatch(
    contactTypeCode: string,
    request?: DeltaMapperContactBase,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!contactTypeCode) {
      throw new Error(
        'Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePatch.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.patch(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Deletes a specific phone number on a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     * @param phoneNumberType The phone number type.
     
     */
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete(
    contactTypeCode: string,
    phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete(
    contactTypeCode: string,
    phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete(
    contactTypeCode: string,
    phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!contactTypeCode) {
      throw new Error(
        'Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete.'
      );
    }

    if (!phoneNumberType) {
      throw new Error(
        'Required parameter phoneNumberType was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}/phoneNumbers/${encodeURIComponent(String(phoneNumberType))}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets the specific phone number from a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     * @param phoneNumberType The phone number type.
     
     */
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet(
    contactTypeCode: string,
    phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',
    observe?: 'body',
    headers?: Headers
  ): Observable<PhoneNumber>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet(
    contactTypeCode: string,
    phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<PhoneNumber>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet(
    contactTypeCode: string,
    phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!contactTypeCode) {
      throw new Error(
        'Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet.'
      );
    }

    if (!phoneNumberType) {
      throw new Error(
        'Required parameter phoneNumberType was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet.'
      );
    }

    const response: Observable<HttpResponse<PhoneNumber>> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}/phoneNumbers/${encodeURIComponent(String(phoneNumberType))}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <PhoneNumber>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Updates a specific phone number on a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     * @param phoneNumberType The phone number type.
     * @param request The modified phone number.
     
     */
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut(
    contactTypeCode: string,
    phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',
    request?: PhoneNumberBase,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut(
    contactTypeCode: string,
    phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',
    request?: PhoneNumberBase,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut(
    contactTypeCode: string,
    phoneNumberType: 'Other' | 'Home' | 'Work' | 'Mobile' | 'Fax',
    request?: PhoneNumberBase,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!contactTypeCode) {
      throw new Error(
        'Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut.'
      );
    }

    if (!phoneNumberType) {
      throw new Error(
        'Required parameter phoneNumberType was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.put(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}/phoneNumbers/${encodeURIComponent(String(phoneNumberType))}`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets the collection of phone number for a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     
     */
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet(
    contactTypeCode: string,
    observe?: 'body',
    headers?: Headers
  ): Observable<Array<PhoneNumber>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet(
    contactTypeCode: string,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Array<PhoneNumber>>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet(
    contactTypeCode: string,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!contactTypeCode) {
      throw new Error(
        'Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet.'
      );
    }

    const response: Observable<HttpResponse<
      Array<PhoneNumber>
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}/phoneNumbers`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <Array<PhoneNumber>>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Creates a new phone number on a specific contact on the booking.
     * 
     * @param contactTypeCode The unique contact type code.
     * @param request The new phone number.
     
     */
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost(
    contactTypeCode: string,
    request?: PhoneNumber,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost(
    contactTypeCode: string,
    request?: PhoneNumber,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost(
    contactTypeCode: string,
    request?: PhoneNumber,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!contactTypeCode) {
      throw new Error(
        'Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}/phoneNumbers`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Updates a specific contact on the booking.
     * 
     * @param contactTypeCode The unique type code.
     * @param request The modified contact.
     
     */
  public apiNskV1BookingContactsByContactTypeCodePut(
    contactTypeCode: string,
    request?: ContactRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodePut(
    contactTypeCode: string,
    request?: ContactRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePut(
    contactTypeCode: string,
    request?: ContactRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    if (!contactTypeCode) {
      throw new Error(
        'Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePut.'
      );
    }

    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.put(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets all the contacts on the booking.
     * 
     
     */
  public apiNskV1BookingContactsGet(
    observe?: 'body',
    headers?: Headers
  ): Observable<InlineResponse2004>;
  public apiNskV1BookingContactsGet(
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<InlineResponse2004>>;
  public apiNskV1BookingContactsGet(
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      InlineResponse2004
    >> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/contacts`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <InlineResponse2004>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Creates a new contact on the booking.
     * 
     * @param request The new contact.
     
     */
  public apiNskV1BookingContactsPost(
    request?: Contact,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsPost(
    request?: Contact,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsPost(
    request?: Contact,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/booking/contacts`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Delets the primary contact.
     * 
     
     */
  public apiNskV1BookingContactsPrimaryDelete(
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsPrimaryDelete(
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryDelete(
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.delete(
      `${this.basePath}/api/nsk/v1/booking/contacts/primary`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Gets the primary contact based on configuration.
     * 
     
     */
  public apiNskV1BookingContactsPrimaryGet(
    observe?: 'body',
    headers?: Headers
  ): Observable<Contact>;
  public apiNskV1BookingContactsPrimaryGet(
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<Contact>>;
  public apiNskV1BookingContactsPrimaryGet(
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<Contact>> = this.httpClient.get(
      `${this.basePath}/api/nsk/v1/booking/contacts/primary`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(map(httpResponse => <Contact>httpResponse.response));
    }
    return response;
  }

  /**
     * Patches the primary contact.
     * 
     * @param request The patched contact request.
     
     */
  public apiNskV1BookingContactsPrimaryPatch(
    request?: DeltaMapperContactBase,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsPrimaryPatch(
    request?: DeltaMapperContactBase,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryPatch(
    request?: DeltaMapperContactBase,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.patch(
      `${this.basePath}/api/nsk/v1/booking/contacts/primary`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Creates a new primary contact based on configuration.
     * 
     * @param request The new contact.
     
     */
  public apiNskV1BookingContactsPrimaryPost(
    request?: ContactRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsPrimaryPost(
    request?: ContactRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryPost(
    request?: ContactRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/booking/contacts/primary`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }

  /**
     * Updates the primary contact.
     * 
     * @param request The modified contact request.
     
     */
  public apiNskV1BookingContactsPrimaryPut(
    request?: ContactRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsPrimaryPut(
    request?: ContactRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryPut(
    request?: ContactRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.put(
      `${this.basePath}/api/nsk/v1/booking/contacts/primary`,
      request,
      headers
    );
    if (observe == 'body') {
      return response.pipe(
        map(httpResponse => <IJsonResponse>httpResponse.response)
      );
    }
    return response;
  }
}
