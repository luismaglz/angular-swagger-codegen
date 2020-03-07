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
import { Claim } from './claim';
import { ClaimsIdentity } from './claimsIdentity';
import { IIdentity } from './iIdentity';


import * as Enums from '../enums';

export interface ClaimsPrincipal { 
    readonly claims?: Array<Claim>;
    readonly identities?: Array<ClaimsIdentity>;
    readonly identity?: IIdentity;
}