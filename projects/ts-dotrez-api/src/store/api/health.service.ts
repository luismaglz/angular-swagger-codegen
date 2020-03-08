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
import { EnvironmentHealth } from "api-models";

import { HealthService } from "../../base/api/index";
import { HttpResponse, Headers, IHttpClient } from "../../base/index";

@injectable()
export class StoreHealthService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("HealthService") protected baseService: HealthService
  ) {}

  /**
   *
   *
   */
  public async store_apiV1HealthGet(
    headers?: Headers
  ): Promise<EnvironmentHealth> {
    const response = await this.baseService
      .apiV1HealthGet("body", headers)
      .toPromise();
    // TODO: Implement apiV1HealthGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
