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
  ApplyBookingCreditRequestv2,
  ApplyCreditAccountRequest,
  ApplyCreditRequest,
  CreditAccount,
  CustomerCreditRefundRequest,
  DccRequestBasev2,
  DirectCurrencyConversionAvailability,
  IJsonResponse,
  InlineResponse2008,
  InlineResponse2009,
  OrganizationRefundRequest,
  Payment,
  PaymentFeeResponse,
  PaymentMethodRequest,
  PaymentRefundRequest,
  PaymentRequest,
  ThreeDSecurePaymentMethodRequestv2,
  ThreeDSecureResponse,
  VoucherInformation,
  VoucherPaymentRequest
} from "api-models";

import { BookingpaymentsService } from "../../base/api/index";

@injectable()
export class StoreBookingpaymentsService {
  constructor(
    @inject("Store") protected store: Store<any>,
    @inject("BookingpaymentsService")
    protected baseService: BookingpaymentsService
  ) {}

  /**
   * Deletes the payment.
   *
   */
  public async store_apiNskV1BookingPaymentsByPaymentKeyDelete(
    paymentKey: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPaymentsByPaymentKeyDelete(paymentKey, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingPaymentsByPaymentKeyDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets a specific payment.
   *
   */
  public async store_apiNskV1BookingPaymentsByPaymentKeyGet(
    paymentKey: string,
    headers?: Headers
  ): Promise<Payment> {
    const response = await this.baseService
      .apiNskV1BookingPaymentsByPaymentKeyGet(paymentKey, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingPaymentsByPaymentKeyGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves the booking payments on the booking in state.
   * Requires a booking in state.
   */
  public async store_apiNskV1BookingPaymentsGet(
    headers?: Headers
  ): Promise<Array<Payment>> {
    const response = await this.baseService
      .apiNskV1BookingPaymentsGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingPaymentsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves the booking payment methods available for a refund on the booking in state.
   * Requires a booking in state.
   */
  public async store_apiNskV1BookingPaymentsRefundsGet(
    headers?: Headers
  ): Promise<InlineResponse2008> {
    const response = await this.baseService
      .apiNskV1BookingPaymentsRefundsGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV1BookingPaymentsRefundsGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates an organization account refund for a payment from  the booking in state.
   *
   */
  public async store_apiNskV1BookingPaymentsRefundsOrganizationCreditPost(
    request?: OrganizationRefundRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPaymentsRefundsOrganizationCreditPost(
        request,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPaymentsRefundsOrganizationCreditPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a voucher payment on the booking in state.
   *
   */
  public async store_apiNskV1BookingPaymentsVoucherByVoucherPaymentReferenceDelete(
    voucherPaymentReference: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV1BookingPaymentsVoucherByVoucherPaymentReferenceDelete(
        voucherPaymentReference,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPaymentsVoucherByVoucherPaymentReferenceDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets information regarding a specific voucher code.
   *
   */
  public async store_apiNskV1BookingPaymentsVoucherGet(
    referenceCode: string,
    overrideRestrictions?: boolean,
    headers?: Headers
  ): Promise<VoucherInformation> {
    const response = await this.baseService
      .apiNskV1BookingPaymentsVoucherGet(
        referenceCode,
        overrideRestrictions,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV1BookingPaymentsVoucherGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves the booking payment methods available for the booking in state.
   * Requires a booking in state.
   */
  public async store_apiNskV2BookingPaymentsAvailableGet(
    headers?: Headers
  ): Promise<InlineResponse2008> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsAvailableGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsAvailableGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets credit available from a past booking.
   * See booking retrieve. This method uses the same validation rules.
   */
  public async store_apiNskV2BookingPaymentsBookingCreditGet(
    recordLocator: string,
    currencyCode?: string,
    emailAddress?: string,
    origin?: string,
    firstName?: string,
    lastName?: string,
    customerNumber?: string,
    departureDate?: Date,
    headers?: Headers
  ): Promise<CreditAccount> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsBookingCreditGet(
        recordLocator,
        currencyCode,
        emailAddress,
        origin,
        firstName,
        lastName,
        customerNumber,
        departureDate,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsBookingCreditGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Applies credit from a past booking.
   *
   */
  public async store_apiNskV2BookingPaymentsBookingCreditPost(
    request?: ApplyBookingCreditRequestv2,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsBookingCreditPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsBookingCreditPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets credit available by reference number and type.
   * This endpoint is for agents and can get credit available for any user or type.
   */
  public async store_apiNskV2BookingPaymentsCreditGet(
    referenceNumber: string,
    type: "Customer" | "Booking" | "Organization",
    currencyCode?: string,
    headers?: Headers
  ): Promise<CreditAccount> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsCreditGet(
        referenceNumber,
        type,
        currencyCode,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsCreditGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Applies credit by reference number and type.
   * This endpoint is for agents and can apply credit for any user or type.
   */
  public async store_apiNskV2BookingPaymentsCreditPost(
    request?: ApplyCreditAccountRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsCreditPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsCreditPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets credit available for the logged in user on the booking in state.
   * Depending on configuration, credit may be validated by the contacts and passengers on the booking.
   */
  public async store_apiNskV2BookingPaymentsCustomerCreditGet(
    currencyCode?: string,
    headers?: Headers
  ): Promise<CreditAccount> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsCustomerCreditGet(currencyCode, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsCustomerCreditGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Applies credit from the logged in customer to the booking in state.
   *
   */
  public async store_apiNskV2BookingPaymentsCustomerCreditPost(
    request?: ApplyCreditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsCustomerCreditPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsCustomerCreditPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets credit available for the logged in users organization.
   * Depending on configuration, credit may be validated by the contacts and passengers on the booking.
   */
  public async store_apiNskV2BookingPaymentsOrganizationCreditGet(
    currencyCode?: string,
    headers?: Headers
  ): Promise<CreditAccount> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsOrganizationCreditGet(
        currencyCode,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsOrganizationCreditGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Applies credit to the logged in user&#39;s organization.
   *
   */
  public async store_apiNskV2BookingPaymentsOrganizationCreditPost(
    request?: ApplyCreditRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsOrganizationCreditPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsOrganizationCreditPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a new external payment or prepaid payment on the booking in state.
   * &lt;p&gt;                      The payment fields are dynamic to the criteria of your payment provider. Here is an example request for a                      credit card payment that does not require address, zip, etc.                      { \&quot;amount\&quot;: 10, \&quot;currencyCode\&quot;: \&quot;USD\&quot;, \&quot;paymentFields\&quot;: {\&quot;ACCTNO\&quot;:\&quot;411111111111\&quot;, \&quot;EXPDATE\&quot;:\&quot;10/8/2017\&quot;,                      \&quot;CC::AccountHolderName\&quot;:\&quot;Bob Smith\&quot;, \&quot;CC::VerificationCode\&quot;:\&quot;111\&quot;}}                  &lt;/p&gt;  &lt;p&gt;                      A 202 (HTTP status code) response returns alternate data signifying that Three D Secure was enabled for this                      payment                      and is required for this payment type. The payment will need to be resent using the 3DS endpoint.                  &lt;/p&gt;  &lt;p&gt;                      If you would like to make a ThreeDSecure payment, you will need to have these headers populated:                      &lt;ul&gt;&lt;li&gt;                              User Agent                          &lt;/li&gt;&lt;li&gt;                              Ip Address                          &lt;/li&gt;&lt;li&gt;                              Accept                          &lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;
   */
  public async store_apiNskV2BookingPaymentsPost(
    request?: PaymentMethodRequest,
    termUrl?: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsPost(request, termUrl, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a customer credit for a specified customer.
   * Requires a booking in state and an agent token. Agents should use /refunds endpoint for booking credits.
   */
  public async store_apiNskV2BookingPaymentsRefundsCustomerCreditPost(
    request?: CustomerCreditRefundRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsRefundsCustomerCreditPost(
        request,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsRefundsCustomerCreditPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Deletes a voucher payment on the booking in state.
   *
   */
  public async store_apiNskV2BookingPaymentsVoucherByVoucherPaymentReferenceDelete(
    voucherPaymentReference: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV2BookingPaymentsVoucherByVoucherPaymentReferenceDelete(
        voucherPaymentReference,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV2BookingPaymentsVoucherByVoucherPaymentReferenceDelete
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets the available direct currency codes offer.
   *
   */
  public async store_apiNskV3BookingPaymentsByPaymentMethodDccGet(
    paymentMethod: string,
    amount: number,
    accountNumber: string,
    quotedCurrencyCode: string,
    headers?: Headers
  ): Promise<DirectCurrencyConversionAvailability> {
    const response = await this.baseService
      .apiNskV3BookingPaymentsByPaymentMethodDccGet(
        paymentMethod,
        amount,
        accountNumber,
        quotedCurrencyCode,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV3BookingPaymentsByPaymentMethodDccGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Retrieves the payment fee for the fee code.
   *
   */
  public async store_apiNskV3BookingPaymentsFeesByFeeCodeGet(
    feeCode: string,
    amount: number,
    currencyCode?: string,
    collectedCurrencyCode?: string,
    headers?: Headers
  ): Promise<PaymentFeeResponse> {
    const response = await this.baseService
      .apiNskV3BookingPaymentsFeesByFeeCodeGet(
        feeCode,
        amount,
        currencyCode,
        collectedCurrencyCode,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV3BookingPaymentsFeesByFeeCodeGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a new MCC payment.
   * This is affected by the booking currency code.
   */
  public async store_apiNskV3BookingPaymentsMccByCurrencyCodePost(
    currencyCode: string,
    request?: PaymentMethodRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV3BookingPaymentsMccByCurrencyCodePost(
        currencyCode,
        request,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV3BookingPaymentsMccByCurrencyCodePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a new MCC payment from a stored payment.
   * This is affected by the booking currency code.
   */
  public async store_apiNskV3BookingPaymentsMccByCurrencyCodeStoredPaymentByStoredPaymentKeyPost(
    currencyCode: string,
    storedPaymentKey: string,
    request?: PaymentRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV3BookingPaymentsMccByCurrencyCodeStoredPaymentByStoredPaymentKeyPost(
        currencyCode,
        storedPaymentKey,
        request,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV3BookingPaymentsMccByCurrencyCodeStoredPaymentByStoredPaymentKeyPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Gets the available multi-currency codes available.
   * This is affected by the booking currency code.
   */
  public async store_apiNskV3BookingPaymentsMccGet(
    headers?: Headers
  ): Promise<InlineResponse2009> {
    const response = await this.baseService
      .apiNskV3BookingPaymentsMccGet("body", headers)
      .toPromise();
    // TODO: Implement apiNskV3BookingPaymentsMccGet
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a refund for the booking in state.
   * Requires a booking in state. Credit shell payment types will default to a customer credit if logged in. If not  logged in a booking credit will be applied.
   */
  public async store_apiNskV3BookingPaymentsRefundsPost(
    request?: PaymentRefundRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV3BookingPaymentsRefundsPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV3BookingPaymentsRefundsPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a payment using the stored payment information for the booking in state.
   * Account Number and Expiration Date are stored.  With stored payments, payment fields may still be required to complete the transaction.  For example, a credit card that requires address information, this information is not stored with the stored  payment.
   */
  public async store_apiNskV3BookingPaymentsStoredPaymentByStoredPaymentKeyPost(
    storedPaymentKey: string,
    request?: PaymentRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV3BookingPaymentsStoredPaymentByStoredPaymentKeyPost(
        storedPaymentKey,
        request,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV3BookingPaymentsStoredPaymentByStoredPaymentKeyPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a new ThreeDSecure external payment or prepaid payment on the booking in state.
   * &lt;p&gt;                      A call to payments post should be made first and processed to verify a 3DS payment is required.                  &lt;/p&gt;  &lt;p&gt;                      If you would like to make a ThreeDSecure payment, you will need to provide a valid term url.                      You will also need to have these headers populated:                      &lt;ul&gt;&lt;li&gt;                              User Agent                          &lt;/li&gt;&lt;li&gt;                              Ip Address                          &lt;/li&gt;&lt;li&gt;                              Accept                          &lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;
   */
  public async store_apiNskV3BookingPaymentsThreeDSecurePost(
    request?: ThreeDSecurePaymentMethodRequestv2,
    termUrl?: string,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV3BookingPaymentsThreeDSecurePost(
        request,
        termUrl,
        "body",
        headers
      )
      .toPromise();
    // TODO: Implement apiNskV3BookingPaymentsThreeDSecurePost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a new voucher payment on the booking in state.
   *
   */
  public async store_apiNskV3BookingPaymentsVoucherPost(
    request?: VoucherPaymentRequest,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV3BookingPaymentsVoucherPost(request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV3BookingPaymentsVoucherPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }

  /**
   * Creates a new external payment with direct currency conversion.
   *
   */
  public async store_apiNskV4BookingPaymentsDccByDccKeyPost(
    dccKey: string,
    request?: DccRequestBasev2,
    headers?: Headers
  ): Promise<IJsonResponse> {
    const response = await this.baseService
      .apiNskV4BookingPaymentsDccByDccKeyPost(dccKey, request, "body", headers)
      .toPromise();
    // TODO: Implement apiNskV4BookingPaymentsDccByDccKeyPost
    // addResponsetoStore(this.store, response.data, true, true);
    return response;
  }
}
