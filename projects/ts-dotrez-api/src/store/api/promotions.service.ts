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
  IJsonResponse,
  Promotion,
  PromotionBase
} from "api-models";

import { PromotionsService } from "../../base/api/index";

@injectable()
export class StorePromotionsService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("PromotionsService") protected baseService: PromotionsService
  ) {}

  /**
   * Gets a promotion based on the promotion code.
   *
   */
  public async store_apiNskV1PromotionsByPromotionCodeGet(
    promotionCode: string,
    headers?: Headers
  ): Promise<Promotion> {
    const response = await this.baseService
      .apiNskV1PromotionsByPromotionCodeGet(promotionCode, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1PromotionsByPromotionCodeGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Evaluates a promotion code and optional organization code to determine if   the associated promotion is valid or not.
   * This validates the promotion code based on the logged-in user if the   organization code is not provided.
   */
  public async store_apiNskV1PromotionsByPromotionCodeValidateGet(
    promotionCode: string,
    organizationCode?: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1PromotionsByPromotionCodeValidateGet(
        promotionCode,
        organizationCode,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1PromotionsByPromotionCodeValidateGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets promotions based on data in the request.
   *
   */
  public async store_apiNskV1PromotionsGet(
    promotionCode?: string,
    organizationCode?: string,
    effectiveDate?: Date,
    cultureCode?: string,
    promotionCodeMatching?:
      | "StartsWith"
      | "EndsWith"
      | "Contains"
      | "ExactMatch",
    organizationCodeMatching?:
      | "StartsWith"
      | "EndsWith"
      | "Contains"
      | "ExactMatch",
    headers?: Headers
  ): Promise<Array<PromotionBase>> {
    const response = await this.baseService
      .apiNskV1PromotionsGet(
        promotionCode,
        organizationCode,
        effectiveDate,
        cultureCode,
        promotionCodeMatching,
        organizationCodeMatching,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1PromotionsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
