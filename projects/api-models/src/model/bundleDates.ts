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


/**
 * The bundle dates model.
 */
import * as Enums from '../enums';

export interface BundleDates { 
    /**
     * The start date when the bundle application is effective.
     */
    effective?: Date;
    /**
     * The effective sales date.
     */
    effectiveSales?: Date;
    /**
     * The date when the bundle application is discontinued.
     */
    discontinue?: Date;
    /**
     * The discontinued sales date.
     */
    discontinueSales?: Date;
}