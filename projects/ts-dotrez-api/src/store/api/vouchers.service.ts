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
  Voucher,
  VoucherConfiguration,
  VoucherItem,
  VoucherUpdateRequest,
  VouchersSummaryResponse
} from "api-models";

import { VouchersService } from "../../base/api/index";

@injectable()
export class StoreVouchersService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("VouchersService") protected baseService: VouchersService
  ) {}

  /**
   * Searches for vouchers issued within the given date range.
   *
   */
  public async store_apiNskV1VouchersByDateGet(
    beginDate: Date,
    pageSize?: number,
    lastPageKey?: string,
    endDate?: Date,
    headers?: Headers
  ): Promise<VouchersSummaryResponse> {
    const response = await this.baseService
      .apiNskV1VouchersByDateGet(
        beginDate,
        pageSize,
        lastPageKey,
        endDate,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1VouchersByDateGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets vouchers associated with a voucher issuance.
   *
   */
  public async store_apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet(
    voucherIssuanceKey: string,
    headers?: Headers
  ): Promise<Array<VoucherItem>> {
    const response = await this.baseService
      .apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet(
        voucherIssuanceKey,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1VouchersByIssuanceByVoucherIssuanceKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a collection of vouchers based on the market information.
   *
   */
  public async store_apiNskV1VouchersByMarketGet(
    destination: string,
    origin: string,
    departureDate: Date,
    identifier: string,
    carrierCode: string,
    opSuffix?: string,
    headers?: Headers
  ): Promise<Array<VoucherItem>> {
    const response = await this.baseService
      .apiNskV1VouchersByMarketGet(
        destination,
        origin,
        departureDate,
        identifier,
        carrierCode,
        opSuffix,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1VouchersByMarketGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific voucher based upon the voucher key.
   *
   */
  public async store_apiNskV1VouchersByVoucherKeyGet(
    voucherKey: string,
    headers?: Headers
  ): Promise<Voucher> {
    const response = await this.baseService
      .apiNskV1VouchersByVoucherKeyGet(voucherKey, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1VouchersByVoucherKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Changes the voucher status.
   *
   */
  public async store_apiNskV1VouchersByVoucherKeyPut(
    voucherKey: string,
    request?: VoucherUpdateRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1VouchersByVoucherKeyPut(voucherKey, request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1VouchersByVoucherKeyPut
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific voucher configuration based on the configuration code.
   *
   */
  public async store_apiNskV1VouchersConfigurationByConfigurationCodeGet(
    configurationCode: string,
    headers?: Headers
  ): Promise<VoucherConfiguration> {
    const response = await this.baseService
      .apiNskV1VouchersConfigurationByConfigurationCodeGet(
        configurationCode,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1VouchersConfigurationByConfigurationCodeGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets all available voucher configurations.
   *
   */
  public async store_apiNskV1VouchersConfigurationGet(
    headers?: Headers
  ): Promise<Array<VoucherConfiguration>> {
    const response = await this.baseService
      .apiNskV1VouchersConfigurationGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1VouchersConfigurationGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets vouchers based upon data in the request.
   *
   */
  public async store_apiNskV1VouchersGet(
    customerNameFirstName: string,
    customerNameLastName: string,
    activeOnly: boolean,
    recordLocator?: string,
    customerNumber?: string,
    cultureCode?: string,
    headers?: Headers
  ): Promise<Array<VoucherItem>> {
    const response = await this.baseService
      .apiNskV1VouchersGet(
        customerNameFirstName,
        customerNameLastName,
        activeOnly,
        recordLocator,
        customerNumber,
        cultureCode,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1VouchersGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
