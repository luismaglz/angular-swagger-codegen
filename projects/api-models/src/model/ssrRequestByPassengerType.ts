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
import { SsrDesignatorRequest } from './ssrDesignatorRequest';


/**
 * SSR request for a single passenger type.
 */
import * as Enums from '../enums';

export interface SsrRequestByPassengerType { 
    /**
     * The passenger type.
     */
    passengerType: string;
    /**
     * The Ssr code.
     */
    ssrs?: Array<SsrDesignatorRequest>;
}