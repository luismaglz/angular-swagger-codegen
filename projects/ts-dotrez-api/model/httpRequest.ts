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
import { HostString } from './hostString';
import { HttpContext } from './httpContext';
import { HttpRequestHeaders } from './httpRequestHeaders';
import { KeyValuePairStringString } from './keyValuePairStringString';
import { KeyValuePairStringStringValues } from './keyValuePairStringStringValues';
import { QueryString } from './queryString';
import { Stream } from './stream';


export interface HttpRequest { 
    readonly httpContext?: HttpContext;
    method?: string;
    scheme?: string;
    isHttps?: boolean;
    host?: HostString;
    pathBase?: string;
    path?: string;
    queryString?: QueryString;
    query?: Array<KeyValuePairStringStringValues>;
    protocol?: string;
    headers?: HttpRequestHeaders;
    cookies?: Array<KeyValuePairStringString>;
    contentLength?: number;
    contentType?: string;
    body?: Stream;
    readonly hasFormContentType?: boolean;
    form?: Array<KeyValuePairStringStringValues>;
}
