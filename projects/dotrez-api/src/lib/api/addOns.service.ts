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
import { ActivityProduct } from "../model/activityProduct";
import { ActivitySimpleRequest } from "../model/activitySimpleRequest";
import { AddOn } from "../model/addOn";
import { CarProduct } from "../model/carProduct";
import { HotelProduct } from "../model/hotelProduct";
import { HotelRequest } from "../model/hotelRequest";
import { ProductRequest } from "../model/productRequest";
import { QuoteCarRequest } from "../model/quoteCarRequest";
import { QuotedProduct } from "../model/quotedProduct";
import { QuoteHotelRequest } from "../model/quoteHotelRequest";
import { QuoteTokenRequest } from "../model/quoteTokenRequest";
import { SellCarRequest } from "../model/sellCarRequest";
import { SellHotelRequest } from "../model/sellHotelRequest";
import { SellTokenRequest } from "../model/sellTokenRequest";
import { BASE_PATH } from "../variables";

@Injectable()
export class AddOnsService {
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
   * Gets availability.
   * This is functionally a GET but POST is used to reduce URL length overhead.
   * @param request Activity simple query.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1AddOnsActivitiesAvailablePost(
    request?: ActivitySimpleRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<Array<ActivityProduct>>;
  public apiNskV1AddOnsActivitiesAvailablePost(
    request?: ActivitySimpleRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<ActivityProduct>>>;
  public apiNskV1AddOnsActivitiesAvailablePost(
    request?: ActivitySimpleRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<ActivityProduct>>>;
  public apiNskV1AddOnsActivitiesAvailablePost(
    request?: ActivitySimpleRequest,
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

    return this.httpClient.post<Array<ActivityProduct>>(
      `${this.basePath}/api/nsk/v1/addOns/activities/available`,
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
   * Sell request for an activity.
   *
   * @param request Items request.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1AddOnsActivitiesPost(
    request?: SellTokenRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<AddOn>;
  public apiNskV1AddOnsActivitiesPost(
    request?: SellTokenRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<AddOn>>;
  public apiNskV1AddOnsActivitiesPost(
    request?: SellTokenRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<AddOn>>;
  public apiNskV1AddOnsActivitiesPost(
    request?: SellTokenRequest,
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

    return this.httpClient.post<AddOn>(
      `${this.basePath}/api/nsk/v1/addOns/activities`,
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
   * Quote an activity.
   *
   * @param request Quote hotel request.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1AddOnsActivitiesQuotePost(
    request?: QuoteTokenRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<QuotedProduct>;
  public apiNskV1AddOnsActivitiesQuotePost(
    request?: QuoteTokenRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<QuotedProduct>>;
  public apiNskV1AddOnsActivitiesQuotePost(
    request?: QuoteTokenRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<QuotedProduct>>;
  public apiNskV1AddOnsActivitiesQuotePost(
    request?: QuoteTokenRequest,
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

    return this.httpClient.post<QuotedProduct>(
      `${this.basePath}/api/nsk/v1/addOns/activities/quote`,
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
   * Gets availability.
   * This is functionally a GET but POST is used to reduce URL length overhead.
   * @param request Activity simple query.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1AddOnsCarsAvailablePost(
    request?: ProductRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<Array<CarProduct>>;
  public apiNskV1AddOnsCarsAvailablePost(
    request?: ProductRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<CarProduct>>>;
  public apiNskV1AddOnsCarsAvailablePost(
    request?: ProductRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<CarProduct>>>;
  public apiNskV1AddOnsCarsAvailablePost(
    request?: ProductRequest,
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

    return this.httpClient.post<Array<CarProduct>>(
      `${this.basePath}/api/nsk/v1/addOns/cars/available`,
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
   * Sell request for a car.
   *
   * @param request Items request.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1AddOnsCarsPost(
    request?: SellCarRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<AddOn>;
  public apiNskV1AddOnsCarsPost(
    request?: SellCarRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<AddOn>>;
  public apiNskV1AddOnsCarsPost(
    request?: SellCarRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<AddOn>>;
  public apiNskV1AddOnsCarsPost(
    request?: SellCarRequest,
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

    return this.httpClient.post<AddOn>(
      `${this.basePath}/api/nsk/v1/addOns/cars`,
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
   * Quote car.
   *
   * @param request Quote hotel request.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1AddOnsCarsQuotePost(
    request?: QuoteCarRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<QuotedProduct>;
  public apiNskV1AddOnsCarsQuotePost(
    request?: QuoteCarRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<QuotedProduct>>;
  public apiNskV1AddOnsCarsQuotePost(
    request?: QuoteCarRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<QuotedProduct>>;
  public apiNskV1AddOnsCarsQuotePost(
    request?: QuoteCarRequest,
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

    return this.httpClient.post<QuotedProduct>(
      `${this.basePath}/api/nsk/v1/addOns/cars/quote`,
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
   * Gets availability.
   * This is functionally a GET but POST is used to reduce URL length overhead.
   * @param request Activity simple query.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1AddOnsHotelsAvailablePost(
    request?: HotelRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<Array<HotelProduct>>;
  public apiNskV1AddOnsHotelsAvailablePost(
    request?: HotelRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<HotelProduct>>>;
  public apiNskV1AddOnsHotelsAvailablePost(
    request?: HotelRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<HotelProduct>>>;
  public apiNskV1AddOnsHotelsAvailablePost(
    request?: HotelRequest,
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

    return this.httpClient.post<Array<HotelProduct>>(
      `${this.basePath}/api/nsk/v1/addOns/hotels/available`,
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
   * Sell request for a hotel.
   *
   * @param request Items request.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1AddOnsHotelsPost(
    request?: SellHotelRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<AddOn>;
  public apiNskV1AddOnsHotelsPost(
    request?: SellHotelRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<AddOn>>;
  public apiNskV1AddOnsHotelsPost(
    request?: SellHotelRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<AddOn>>;
  public apiNskV1AddOnsHotelsPost(
    request?: SellHotelRequest,
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

    return this.httpClient.post<AddOn>(
      `${this.basePath}/api/nsk/v1/addOns/hotels`,
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
   * Quote hotel.
   *
   * @param request Quote hotel request.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiNskV1AddOnsHotelsQuotePost(
    request?: QuoteHotelRequest,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<QuotedProduct>;
  public apiNskV1AddOnsHotelsQuotePost(
    request?: QuoteHotelRequest,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<QuotedProduct>>;
  public apiNskV1AddOnsHotelsQuotePost(
    request?: QuoteHotelRequest,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<QuotedProduct>>;
  public apiNskV1AddOnsHotelsQuotePost(
    request?: QuoteHotelRequest,
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

    return this.httpClient.post<QuotedProduct>(
      `${this.basePath}/api/nsk/v1/addOns/hotels/quote`,
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
