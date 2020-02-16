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
import { ActionDescriptorProperties } from "./actionDescriptorProperties";
import { AuthenticationManager } from "./authenticationManager";
import { CancellationToken } from "./cancellationToken";
import { ClaimsPrincipal } from "./claimsPrincipal";
import { ConnectionInfo } from "./connectionInfo";
import { HttpRequest } from "./httpRequest";
import { HttpResponse } from "./httpResponse";
import { IServiceProvider } from "./iServiceProvider";
import { ISession } from "./iSession";
import { KeyValuePairTypeObject } from "./keyValuePairTypeObject";
import { WebSocketManager } from "./webSocketManager";

export interface HttpContext {
  readonly features?: Array<KeyValuePairTypeObject>;
  readonly request?: HttpRequest;
  readonly response?: HttpResponse;
  readonly connection?: ConnectionInfo;
  readonly webSockets?: WebSocketManager;
  readonly authentication?: AuthenticationManager;
  user?: ClaimsPrincipal;
  items?: ActionDescriptorProperties;
  requestServices?: IServiceProvider;
  requestAborted?: CancellationToken;
  traceIdentifier?: string;
  session?: ISession;
}
