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

/**
 * The sell service request (SSR) model.
 */
export interface Ssr {
  /**
   * The Ssr code.
   */
  ssrCode?: string;
  /**
   * The name.
   */
  name?: string;
  /**
   * The fee code.
   */
  feeCode?: string;
  /**
   * The Ssr nest code.
   */
  ssrNestCode?: string;
  /**
   * The trace queue code.
   */
  traceQueueCode?: string;
  /**
   * The Ssr type.
   */
  ssrType?: Ssr.SsrTypeEnum;
  /**
   * The in active.
   */
  inActive?: boolean;
  /**
   * The unit value.
   */
  unitValue?: number;
  /**
   * The limit per passenger.
   */
  limitPerPassenger?: number;
  /**
   * The boarding zone.
   */
  boardingZone?: number;
  /**
   * <b>Deprecated</b> - Please use api/nsk/v1/settings/general/codes endpoint to verify role based access instead.
   */
  allowed?: boolean;
  /**
   * The seat map code.
   */
  seatMapCode?: string;
  /**
   * The seat restriction.
   */
  seatRestriction?: Ssr.SeatRestrictionEnum;
  /**
   * The rule set name.
   */
  ruleSetName?: string;
}
export namespace Ssr {
  export type SsrTypeEnum =
    | "Standard"
    | "Infant"
    | "Meal"
    | "BaggageAllowance"
    | "TravelLineMeal";
  export type SeatRestrictionEnum =
    | "Undefined"
    | "AlwaysAllowed"
    | "DefaultAllowed"
    | "DefaultRestricted";
}
