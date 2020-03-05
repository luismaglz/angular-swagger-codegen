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
import { HttpContext } from './httpContext';
import { HttpRequestHeaders } from './httpRequestHeaders';
import { IResponseCookies } from './iResponseCookies';
import { Stream } from './stream';



export interface HttpResponse { 
    readonly httpContext?: HttpContext;
    statusCode?: number;
    headers?: HttpRequestHeaders;
    body?: Stream;
    contentLength?: number;
    contentType?: string;
    readonly cookies?: IResponseCookies;
    readonly hasStarted?: boolean;
}
