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
import { Carrier } from './carrier';


/**
 * Model representing the resource entries.
 */
import * as Enums from '../enums';

export interface ResourceEntriesCarrier { 
    /**
     * The expiration.
     */
    expiration?: Date;
    /**
     * The value.
     */
    values?: Array<Carrier>;
    /**
     * The ETag.
     */
    eTag?: string;
}
