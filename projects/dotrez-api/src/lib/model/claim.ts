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
import { ClaimsIdentity } from "./claimsIdentity";
import { InputParameters } from "./inputParameters";

export interface Claim {
  readonly issuer?: string;
  readonly originalIssuer?: string;
  properties?: InputParameters;
  readonly subject?: ClaimsIdentity;
  readonly type?: string;
  readonly value?: string;
  readonly valueType?: string;
}
