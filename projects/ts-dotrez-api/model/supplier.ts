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
import { Address } from './address';
import { ConnectorType } from './connectorType';


/**
 * Defines a supplier.
 */

export interface Supplier { 
    /**
     * The unique supplier code.
     */
    code: string;
    /**
     * The name of the supplier.
     */
    name: string;
    /**
     * The address information.
     */
    address?: Address;
    /**
     * The connector type.
     */
    type?: ConnectorType;
}