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
import { WaitHandle } from './waitHandle';



export interface CancellationToken { 
    readonly isCancellationRequested?: boolean;
    readonly canBeCanceled?: boolean;
    readonly waitHandle?: WaitHandle;
}