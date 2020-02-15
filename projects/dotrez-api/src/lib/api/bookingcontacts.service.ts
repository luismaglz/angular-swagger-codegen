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

import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { Observable } from "rxjs";
import { Configuration } from "../configuration";
import { Contact } from "../model/contact";
import { ContactRequest } from "../model/contactRequest";
import { DeltaMapperContactBase } from "../model/deltaMapperContactBase";
import { IJsonResponse } from "../model/iJsonResponse";
import { InlineResponse2004 } from "../model/inlineResponse2004";
import { PhoneNumber } from "../model/phoneNumber";
import { PhoneNumberBase } from "../model/phoneNumberBase";
import { BASE_PATH } from "../variables";

@Injectable()
export class BookingcontactsService {
  protected basePath = "https://localhost";
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
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
    const form = "multipart/form-data";
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   * Deletes a specific contact on the booking.
   *
   * @param contactTypeCode The unique type code.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsByContactTypeCodeDelete(
    contactTypeCode: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodeDelete(
    contactTypeCode: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodeDelete(
    contactTypeCode: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodeDelete(
    contactTypeCode: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (contactTypeCode === null || contactTypeCode === undefined) {
      throw new Error(
        "Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodeDelete."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.delete<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Gets a specific contact on the booking.
   *
   * @param contactTypeCode The unique contact type code.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsByContactTypeCodeGet(
    contactTypeCode: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<Contact>;
  public apiNskV1BookingContactsByContactTypeCodeGet(
    contactTypeCode: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<Contact>>;
  public apiNskV1BookingContactsByContactTypeCodeGet(
    contactTypeCode: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<Contact>>;
  public apiNskV1BookingContactsByContactTypeCodeGet(
    contactTypeCode: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (contactTypeCode === null || contactTypeCode === undefined) {
      throw new Error(
        "Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodeGet."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Contact>(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Patches a specific contact on the booking.
   *
   * @param contactTypeCode The unique type code.
   * @param request The patched contact request.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsByContactTypeCodePatch(
    contactTypeCode: string,
    request?: DeltaMapperContactBase,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodePatch(
    contactTypeCode: string,
    request?: DeltaMapperContactBase,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePatch(
    contactTypeCode: string,
    request?: DeltaMapperContactBase,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePatch(
    contactTypeCode: string,
    request?: DeltaMapperContactBase,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (contactTypeCode === null || contactTypeCode === undefined) {
      throw new Error(
        "Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePatch."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      "application/json-patch+json",
      "application/json",
      "text/json",
      "application/_*+json"
    ];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.patch<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}`,
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
   * Deletes a specific phone number on a specific contact on the booking.
   *
   * @param contactTypeCode The unique contact type code.
   * @param phoneNumberType The phone number type.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (contactTypeCode === null || contactTypeCode === undefined) {
      throw new Error(
        "Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete."
      );
    }

    if (phoneNumberType === null || phoneNumberType === undefined) {
      throw new Error(
        "Required parameter phoneNumberType was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeDelete."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.delete<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}/phoneNumbers/${encodeURIComponent(String(phoneNumberType))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Gets the specific phone number from a specific contact on the booking.
   *
   * @param contactTypeCode The unique contact type code.
   * @param phoneNumberType The phone number type.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    observe?: "body",
    reportProgress?: boolean
  ): Observable<PhoneNumber>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<PhoneNumber>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<PhoneNumber>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (contactTypeCode === null || contactTypeCode === undefined) {
      throw new Error(
        "Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet."
      );
    }

    if (phoneNumberType === null || phoneNumberType === undefined) {
      throw new Error(
        "Required parameter phoneNumberType was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypeGet."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<PhoneNumber>(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}/phoneNumbers/${encodeURIComponent(String(phoneNumberType))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Updates a specific phone number on a specific contact on the booking.
   *
   * @param contactTypeCode The unique contact type code.
   * @param phoneNumberType The phone number type.
   * @param request The modified phone number.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    request?: PhoneNumberBase,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    request?: PhoneNumberBase,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    request?: PhoneNumberBase,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut(
    contactTypeCode: string,
    phoneNumberType: "Other" | "Home" | "Work" | "Mobile" | "Fax",
    request?: PhoneNumberBase,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (contactTypeCode === null || contactTypeCode === undefined) {
      throw new Error(
        "Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut."
      );
    }

    if (phoneNumberType === null || phoneNumberType === undefined) {
      throw new Error(
        "Required parameter phoneNumberType was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersByPhoneNumberTypePut."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      "application/json-patch+json",
      "application/json",
      "text/json",
      "application/_*+json"
    ];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.put<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}/phoneNumbers/${encodeURIComponent(String(phoneNumberType))}`,
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
   * Gets the collection of phone number for a specific contact on the booking.
   *
   * @param contactTypeCode The unique contact type code.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet(
    contactTypeCode: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<Array<PhoneNumber>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet(
    contactTypeCode: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<PhoneNumber>>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet(
    contactTypeCode: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<PhoneNumber>>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet(
    contactTypeCode: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (contactTypeCode === null || contactTypeCode === undefined) {
      throw new Error(
        "Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersGet."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Array<PhoneNumber>>(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}/phoneNumbers`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Creates a new phone number on a specific contact on the booking.
   *
   * @param contactTypeCode The unique contact type code.
   * @param request The new phone number.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost(
    contactTypeCode: string,
    request?: PhoneNumber,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost(
    contactTypeCode: string,
    request?: PhoneNumber,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost(
    contactTypeCode: string,
    request?: PhoneNumber,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost(
    contactTypeCode: string,
    request?: PhoneNumber,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (contactTypeCode === null || contactTypeCode === undefined) {
      throw new Error(
        "Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePhoneNumbersPost."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      "application/json-patch+json",
      "application/json",
      "text/json",
      "application/_*+json"
    ];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.post<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}/phoneNumbers`,
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
   * Updates a specific contact on the booking.
   *
   * @param contactTypeCode The unique type code.
   * @param request The modified contact.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsByContactTypeCodePut(
    contactTypeCode: string,
    request?: ContactRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsByContactTypeCodePut(
    contactTypeCode: string,
    request?: ContactRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePut(
    contactTypeCode: string,
    request?: ContactRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsByContactTypeCodePut(
    contactTypeCode: string,
    request?: ContactRequest,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (contactTypeCode === null || contactTypeCode === undefined) {
      throw new Error(
        "Required parameter contactTypeCode was null or undefined when calling apiNskV1BookingContactsByContactTypeCodePut."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      "application/json-patch+json",
      "application/json",
      "text/json",
      "application/_*+json"
    ];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.put<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts/${encodeURIComponent(
        String(contactTypeCode)
      )}`,
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
   * Gets all the contacts on the booking.
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsGet(
    observe?: "body",
    reportProgress?: boolean
  ): Observable<InlineResponse2004>;
  public apiNskV1BookingContactsGet(
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<InlineResponse2004>>;
  public apiNskV1BookingContactsGet(
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<InlineResponse2004>>;
  public apiNskV1BookingContactsGet(
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<InlineResponse2004>(
      `${this.basePath}/api/nsk/v1/booking/contacts`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Creates a new contact on the booking.
   *
   * @param request The new contact.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsPost(
    request?: Contact,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsPost(
    request?: Contact,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsPost(
    request?: Contact,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsPost(
    request?: Contact,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      "application/json-patch+json",
      "application/json",
      "text/json",
      "application/_*+json"
    ];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.post<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts`,
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
   * Delets the primary contact.
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsPrimaryDelete(
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsPrimaryDelete(
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryDelete(
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryDelete(
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.delete<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts/primary`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Gets the primary contact based on configuration.
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsPrimaryGet(
    observe?: "body",
    reportProgress?: boolean
  ): Observable<Contact>;
  public apiNskV1BookingContactsPrimaryGet(
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<Contact>>;
  public apiNskV1BookingContactsPrimaryGet(
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<Contact>>;
  public apiNskV1BookingContactsPrimaryGet(
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Contact>(
      `${this.basePath}/api/nsk/v1/booking/contacts/primary`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Patches the primary contact.
   *
   * @param request The patched contact request.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsPrimaryPatch(
    request?: DeltaMapperContactBase,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsPrimaryPatch(
    request?: DeltaMapperContactBase,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryPatch(
    request?: DeltaMapperContactBase,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryPatch(
    request?: DeltaMapperContactBase,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      "application/json-patch+json",
      "application/json",
      "text/json",
      "application/_*+json"
    ];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.patch<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts/primary`,
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
   * Creates a new primary contact based on configuration.
   *
   * @param request The new contact.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsPrimaryPost(
    request?: ContactRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsPrimaryPost(
    request?: ContactRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryPost(
    request?: ContactRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryPost(
    request?: ContactRequest,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      "application/json-patch+json",
      "application/json",
      "text/json",
      "application/_*+json"
    ];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.post<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts/primary`,
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
   * Updates the primary contact.
   *
   * @param request The modified contact request.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1BookingContactsPrimaryPut(
    request?: ContactRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<IJsonResponse>;
  public apiNskV1BookingContactsPrimaryPut(
    request?: ContactRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryPut(
    request?: ContactRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<IJsonResponse>>;
  public apiNskV1BookingContactsPrimaryPut(
    request?: ContactRequest,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      "text/plain",
      "application/json",
      "text/json"
    ];
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      "application/json-patch+json",
      "application/json",
      "text/json",
      "application/_*+json"
    ];
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.put<IJsonResponse>(
      `${this.basePath}/api/nsk/v1/booking/contacts/primary`,
      request,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
