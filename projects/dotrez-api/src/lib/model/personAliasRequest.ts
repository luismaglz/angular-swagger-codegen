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
 * Defines the person alias request.
 */
export interface PersonAliasRequest {
  /**
   * The type of alias.
   */
  type?: PersonAliasRequest.TypeEnum;
  /**
   * The given first name.
   */
  first?: string;
  /**
   * The given middle name.
   */
  middle?: string;
  /**
   * The given last name.
   */
  last?: string;
  /**
   * The title.
   */
  title?: string;
  /**
   * The suffix.
   */
  suffix?: string;
}
export namespace PersonAliasRequest {
  export type TypeEnum = "Alias" | "Variant";
}
