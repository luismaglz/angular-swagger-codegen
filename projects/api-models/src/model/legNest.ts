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
import { LegClass } from './legClass';


/**
 * A model representing a leg nest.
 */
import * as Enums from '../enums';

export interface LegNest { 
    /**
     * Gets or sets the adjusted capacity of the nest.
     */
    adjustedCapacity?: number;
    /**
     * Gets or sets the nest class nest.
     */
    classNest?: number;
    /**
     * Gets or sets the nest lid.
     */
    lid?: number;
    /**
     * Gets or sets the nest travel class code.
     */
    travelClassCode?: string;
    /**
     * Gets or sets the type of the nest.
     */
    nestType?: Enums.<ENUM>'Default'|'Net'|'Serial'|'OneBooking'</ENUM>;
    /**
     * Gets or sets the nest leg classes.
     */
    legClasses?: Array<LegClass>;
}
