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

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { inject, injectable } from "inversify";
import { Store } from "redux";
import {
  Credentials,
  IJsonResponse,
  NskSessionContext,
  NskTokenRequest,
  ServerTransferRequest,
  SingleSignOnCredentials,
  TokenRequest,
  TokenResponse
} from "api-models";

import { TokenService } from "../../base/api/index";
import { HttpResponse, Headers, IHttpClient } from "../../base/index";

@injectable()
export class StoreTokenService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("TokenService") protected baseService: TokenService
  ) {}

  /**
   * Sets the culture code for the lifetime of the token.
   * Note there is middleware that looks for \&quot;Culture\&quot; on every request in the headers or query string parameters.  These can be used if you want to set the culture for a single request only.
   */
  public async store_apiNskV1TokenCulturePost(
    defaultCultureCode?: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1TokenCulturePost(defaultCultureCode, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1TokenCulturePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Abandons the active token.
   *
   */
  public async store_apiNskV1TokenDelete(
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1TokenDelete("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1TokenDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Get the information about the current token.
   *
   */
  public async store_apiNskV1TokenGet(
    headers?: Headers
  ): Promise<NskSessionContext> {
    const response = await this.baseService
      .apiNskV1TokenGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1TokenGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates the general access token that will grant access to the API.
   * Security Note:  This endpoint has the ability to log in as any role assigned to a user  or that is allowed through impersonation settings. A user may still log  into a role that is not assigned to them if the impersonation settings  allow it.
   */
  public async store_apiNskV1TokenPost(
    request?: NskTokenRequest,
    headers?: Headers
  ): Promise<TokenResponse> {
    const response = await this.baseService
      .apiNskV1TokenPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1TokenPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Given a non-null request, upgrades the current session&#39;s logged in user.  Otherwise, keeps the active token alive.
   * Security Note:  This endpoint has the ability to log in as any role assigned to a user  or that is allowed through impersonation settings. A user may still log  into a role that is not assigned to them if the impersonation settings  allow it.
   */
  public async store_apiNskV1TokenPut(
    request?: Credentials,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1TokenPut(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1TokenPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Transfers the server context from NewSkies and returns a new token.
   * This endpoint returns a new token.  The new token must be applied in the  authorization header to access the transferred server context.
   */
  public async store_apiNskV1TokenServerTransferPost(
    request?: ServerTransferRequest,
    headers?: Headers
  ): Promise<TokenResponse> {
    const response = await this.baseService
      .apiNskV1TokenServerTransferPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1TokenServerTransferPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates the general access token that will grant access to the API.
   * In order to use single sign on, a single sign on token must first be  associated with a user.  Refer to the \&quot;user/singleSignOnToken\&quot; endpoints.
   */
  public async store_apiNskV1TokenSingleSignOnPost(
    credentials?: SingleSignOnCredentials,
    headers?: Headers
  ): Promise<TokenResponse> {
    const response = await this.baseService
      .apiNskV1TokenSingleSignOnPost(credentials, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1TokenSingleSignOnPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Given a non-null request, upgrades the current session&#39;s logged in user.  Otherwise, keeps the active token alive.
   * In order to use single sign on, a single sign on token must first be  associated with a user.  Refer to the \&quot;user/singleSignOnToken\&quot; endpoints.
   */
  public async store_apiNskV1TokenSingleSignOnPut(
    credentials?: SingleSignOnCredentials,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1TokenSingleSignOnPut(credentials, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1TokenSingleSignOnPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   *
   *
   */
  public async store_apiV1TokenDelete(
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiV1TokenDelete("body", headers)
      .toPromise();
    // TODO: Implement apiV1TokenDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   *
   *
   */
  public async store_apiV1TokenPost(
    request?: TokenRequest,
    headers?: Headers
  ): Promise<TokenResponse> {
    const response = await this.baseService
      .apiV1TokenPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiV1TokenPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   *
   *
   */
  public async store_apiV1TokenPut(headers?: Headers): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiV1TokenPut("body", headers)
      .toPromise();
    // TODO: Implement apiV1TokenPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
