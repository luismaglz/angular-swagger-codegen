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
  VoucherIssuance,
  VoucherIssuanceRequest
} from "api-models";

import { VoucherIssuanceService } from "../../base/api/index";

@injectable()
export class StoreVoucherIssuanceService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("VoucherIssuanceService")
    protected baseService: VoucherIssuanceService
  ) {}

  /**
   * Gets a voucher issuance based upon the voucher issuance key.
   *
   */
  public async store_apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet(
    voucherIssuanceKey: string,
    headers?: Headers
  ): Promise<VoucherIssuance> {
    const response = await this.baseService
      .apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet(
        voucherIssuanceKey,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1VoucherIssuanceByVoucherIssuanceKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates vouchers based upon data in the request.
   *
   */
  public async store_apiNskV1VoucherIssuancePost(
    request?: VoucherIssuanceRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1VoucherIssuancePost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1VoucherIssuancePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
