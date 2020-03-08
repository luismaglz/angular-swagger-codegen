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
  HttpResponse,
  Headers,
  IHttpClient,
  AccountChangePasswordRequest,
  AccountForgotPasswordRequest,
  IJsonResponse
} from "api-models";

import { AccountService } from "../../base/api/index";

@injectable()
export class StoreAccountService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("AccountService") protected baseService: AccountService
  ) {}

  /**
   * Changes the accounts password.
   *
   */
  public async store_apiNskV1AccountPasswordChangePost(
    request?: AccountChangePasswordRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1AccountPasswordChangePost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1AccountPasswordChangePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Invokes the forgot password reset for a specific account.
   *
   */
  public async store_apiNskV1AccountPasswordResetPost(
    request?: AccountForgotPasswordRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1AccountPasswordResetPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1AccountPasswordResetPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
