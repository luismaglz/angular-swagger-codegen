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



export interface Stream { 
    readonly canRead?: boolean;
    readonly canSeek?: boolean;
    readonly canTimeout?: boolean;
    readonly canWrite?: boolean;
    readonly length?: number;
    position?: number;
    readTimeout?: number;
    writeTimeout?: number;
}
