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
import { Ssr } from './ssr';


/**
 * The SSR nest model.
 */
import * as Enums from '../types/enums';

export interface SsrNest { 
    /**
     * The SSR nest code.
     */
    ssrNestCode?: string;
    /**
     * The name.
     */
    name?: string;
    /**
     * The in active.
     */
    inActive?: boolean;
    /**
     * The SSR.
     */
    ssrs?: Array<Ssr>;
}
