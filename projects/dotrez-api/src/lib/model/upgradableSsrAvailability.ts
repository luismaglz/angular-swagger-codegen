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
import { BundleDiscountAmount } from "./bundleDiscountAmount";
import { BundleJourneySsr } from "./bundleJourneySsr";
import { BundleLegSsr } from "./bundleLegSsr";
import { BundleSegmentSsr } from "./bundleSegmentSsr";

/**
 * The upgradable bundle ssr availability model.
 */
export interface UpgradableSsrAvailability {
  /**
   * The available bundle leg ssrs.
   */
  legSsrs?: Array<BundleLegSsr>;
  /**
   * The ssr code that was upgraded.
   */
  upgradeFromSsrCode?: string;
  /**
   * The ssr code.
   */
  ssrCode?: string;
  /**
   * The available bundle segment ssrs.
   */
  segmentSsrs?: Array<BundleSegmentSsr>;
  /**
   * The currency code.
   */
  currencyCode?: string;
  /**
   * The available bundle journey ssr.
   */
  journeySsr?: BundleJourneySsr;
  /**
   * The discount percent.
   */
  discountPercent?: number;
  /**
   * The SSR number.
   */
  ssrNumber?: number;
  /**
   * Indicates if the service fee is waived.
   */
  isFeeWaived?: boolean;
  /**
   * The service bundle SSR discount amounts.
   */
  amounts?: Array<BundleDiscountAmount>;
}
