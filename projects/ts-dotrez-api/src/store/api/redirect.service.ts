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
import { RedirectResult } from "api-models";

import { RedirectService } from "../../base/api/index";
import { HttpResponse, Headers, IHttpClient } from "../../base/index";

@injectable()
export class StoreRedirectService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("RedirectService") protected baseService: RedirectService
  ) {}

  /**
   *
   *
   */
  public async store_apiV1RedirectGet(
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
    headers?: Headers
  ): Promise<any> {
    const response = await this.baseService
      .apiV1RedirectGet(
        domain,
        scheme,
        port,
        path,
        param1,
        value1,
        param2,
        value2,
        param3,
        value3,
        param4,
        value4,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiV1RedirectGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
