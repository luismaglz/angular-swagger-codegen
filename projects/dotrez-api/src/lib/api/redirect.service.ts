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
  HttpParams,
  HttpResponse
} from "@angular/common/http";
import { Inject, Injectable, Optional } from "@angular/core";
import { Observable } from "rxjs";
import { Configuration } from "../configuration";
import { CustomHttpUrlEncodingCodec } from "../encoder";
import { BASE_PATH } from "../variables";

@Injectable()
export class RedirectService {
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
   *
   *
   * @param domain
   * @param scheme
   * @param port
   * @param path
   * @param param1
   * @param value1
   * @param param2
   * @param value2
   * @param param3
   * @param value3
   * @param param4
   * @param value4
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public apiV1RedirectGet(
    domain?: string,
    scheme?: string,
    port?: number,
    path?: string,
    param1?: string,
    value1?: string,
    param2?: string,
    value2?: string,
    param3?: string,
    value3?: string,
    param4?: string,
    value4?: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<any>;
  public apiV1RedirectGet(
    domain?: string,
    scheme?: string,
    port?: number,
    path?: string,
    param1?: string,
    value1?: string,
    param2?: string,
    value2?: string,
    param3?: string,
    value3?: string,
    param4?: string,
    value4?: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<any>>;
  public apiV1RedirectGet(
    domain?: string,
    scheme?: string,
    port?: number,
    path?: string,
    param1?: string,
    value1?: string,
    param2?: string,
    value2?: string,
    param3?: string,
    value3?: string,
    param4?: string,
    value4?: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<any>>;
  public apiV1RedirectGet(
    domain?: string,
    scheme?: string,
    port?: number,
    path?: string,
    param1?: string,
    value1?: string,
    param2?: string,
    value2?: string,
    param3?: string,
    value3?: string,
    param4?: string,
    value4?: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (domain !== undefined && domain !== null) {
      queryParameters = queryParameters.set("domain", <any>domain);
    }
    if (scheme !== undefined && scheme !== null) {
      queryParameters = queryParameters.set("scheme", <any>scheme);
    }
    if (port !== undefined && port !== null) {
      queryParameters = queryParameters.set("port", <any>port);
    }
    if (path !== undefined && path !== null) {
      queryParameters = queryParameters.set("path", <any>path);
    }
    if (param1 !== undefined && param1 !== null) {
      queryParameters = queryParameters.set("param1", <any>param1);
    }
    if (value1 !== undefined && value1 !== null) {
      queryParameters = queryParameters.set("value1", <any>value1);
    }
    if (param2 !== undefined && param2 !== null) {
      queryParameters = queryParameters.set("param2", <any>param2);
    }
    if (value2 !== undefined && value2 !== null) {
      queryParameters = queryParameters.set("value2", <any>value2);
    }
    if (param3 !== undefined && param3 !== null) {
      queryParameters = queryParameters.set("param3", <any>param3);
    }
    if (value3 !== undefined && value3 !== null) {
      queryParameters = queryParameters.set("value3", <any>value3);
    }
    if (param4 !== undefined && param4 !== null) {
      queryParameters = queryParameters.set("param4", <any>param4);
    }
    if (value4 !== undefined && value4 !== null) {
      queryParameters = queryParameters.set("value4", <any>value4);
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

    return this.httpClient.get<any>(`${this.basePath}/api/v1/redirect`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
}
