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

import {
  AccountChangePasswordRequest,
  AccountForgotPasswordRequest,
  IJsonResponse
} from 'api-models';
import { inject, injectable } from 'inversify';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Headers } from '../Headers';
import { HttpResponse } from '../HttpResponse';
import { IAPIConfiguration } from '../IAPIConfiguration';
import { IHttpClient } from '../IHttpClient';

@injectable()
export class AccountService {
  private basePath: string = 'https://localhost';

  constructor(
    @inject('IApiHttpClient') private httpClient: IHttpClient,
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration
  ) {
    if (this.APIConfiguration.basePath)
      this.basePath = this.APIConfiguration.basePath;
  }

  /**
     * Changes the accounts password.
     * 
     * @param request The change password request.
     
     */
  public apiNskV1AccountPasswordChangePost(
    request?: AccountChangePasswordRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1AccountPasswordChangePost(
    request?: AccountChangePasswordRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1AccountPasswordChangePost(
    request?: AccountChangePasswordRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/account/password/change`,
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
     * Invokes the forgot password reset for a specific account.
     * 
     * @param request The forgot password request.
     
     */
  public apiNskV1AccountPasswordResetPost(
    request?: AccountForgotPasswordRequest,
    observe?: 'body',
    headers?: Headers
  ): Observable<IJsonResponse>;
  public apiNskV1AccountPasswordResetPost(
    request?: AccountForgotPasswordRequest,
    observe?: 'response',
    headers?: Headers
  ): Observable<HttpResponse<IJsonResponse>>;
  public apiNskV1AccountPasswordResetPost(
    request?: AccountForgotPasswordRequest,
    observe: any = 'body',
    headers: Headers = {}
  ): Observable<any> {
    const response: Observable<HttpResponse<
      IJsonResponse
    >> = this.httpClient.post(
      `${this.basePath}/api/nsk/v1/account/password/reset`,
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
