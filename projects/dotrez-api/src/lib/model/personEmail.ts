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
 * Defines a specific person email.
 */
export interface PersonEmail {
  /**
   * The unique email key.
   */
  personEmailKey?: string;
  /**
   * The type code of the email address.
   */
  type: string;
  /**
   * The email address value.
   */
  email: string;
  /**
   * Flag indicating if the email is the default.
   */
  _default?: boolean;
}
