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

import { RedirectResult } from 'api-models';

import { IHttpClient } from '../IHttpClient';
import { IAPIConfiguration } from '../IAPIConfiguration';
import { HttpResponse } from '../HttpResponse';
import { Headers } from '../Headers';

import { COLLECTION_FORMATS } from '../variables';

@injectable()
export class RedirectService {
  private basePath: string = 'https://localhost';

  constructor(
    @inject('IApiHttpClient') private httpClient: IHttpClient,
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration
  ) {
    if (this.APIConfiguration.basePath)
      this.basePath = this.APIConfiguration.basePath;
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
    observe?: 'body',
    headers?: Headers
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
    observe?: 'response',
    headers?: Headers
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
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    let queryParameters: string[] = [];
    if (domain !== undefined) {
      queryParameters.push('domain=' + encodeURIComponent(String(domain)));
    }
    if (scheme !== undefined) {
      queryParameters.push('scheme=' + encodeURIComponent(String(scheme)));
    }
    if (port !== undefined) {
      queryParameters.push('port=' + encodeURIComponent(String(port)));
    }
    if (path !== undefined) {
      queryParameters.push('path=' + encodeURIComponent(String(path)));
    }
    if (param1 !== undefined) {
      queryParameters.push('param1=' + encodeURIComponent(String(param1)));
    }
    if (value1 !== undefined) {
      queryParameters.push('value1=' + encodeURIComponent(String(value1)));
    }
    if (param2 !== undefined) {
      queryParameters.push('param2=' + encodeURIComponent(String(param2)));
    }
    if (value2 !== undefined) {
      queryParameters.push('value2=' + encodeURIComponent(String(value2)));
    }
    if (param3 !== undefined) {
      queryParameters.push('param3=' + encodeURIComponent(String(param3)));
    }
    if (value3 !== undefined) {
      queryParameters.push('value3=' + encodeURIComponent(String(value3)));
    }
    if (param4 !== undefined) {
      queryParameters.push('param4=' + encodeURIComponent(String(param4)));
    }
    if (value4 !== undefined) {
      queryParameters.push('value4=' + encodeURIComponent(String(value4)));
    }

    const response: Observable<HttpResponse<any>> = this.httpClient.get(
      `${this.basePath}/api/v1/redirect?${queryParameters.join('&')}`,
      headers
    );
    if (observe == 'body') {
      return response.pipe(map(httpResponse => <any>httpResponse.response));
    }
    return response;
  }
}
