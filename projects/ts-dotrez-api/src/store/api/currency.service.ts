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
import { CurrencyConversion, IJsonResponse } from "api-models";

import { CurrencyService } from "../../base/api/index";
import { HttpResponse, Headers, IHttpClient } from "../../base/index";

@injectable()
export class StoreCurrencyService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("CurrencyService") protected baseService: CurrencyService
  ) {}

  /**
   * Calculates currency conversions.
   *
   */
  public async store_apiNskV1CurrencyConverterGet(
    fromCurrencyCode: string,
    toCurrencyCode: string,
    amount: number,
    headers?: Headers
  ): Promise<CurrencyConversion> {
    const response = await this.baseService
      .apiNskV1CurrencyConverterGet(
        fromCurrencyCode,
        toCurrencyCode,
        amount,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1CurrencyConverterGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
