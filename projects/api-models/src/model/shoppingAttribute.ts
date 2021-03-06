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
 * Model for a shopping attribute.
 */
import * as Enums from '../enums';

export interface ShoppingAttribute { 
    /**
     * Gets or sets the flag for inactive for this shopping attribute.
     */
    inActive?: boolean;
    /**
     * Gets or sets the description of this shopping attribute.
     */
    description?: string;
    /**
     * Gets or sets the name of this shopping attribute.
     */
    name?: string;
    /**
     * Gets or sets the code of this shopping attribute.
     */
    shoppingAttributeCode: string;
    /**
     * Gets or sets the list of group codes associated with this shopping attribute.
     */
    shoppingAttributeGroupCodes?: Array<string>;
    /**
     * Gets or sets the type of this shopping attribute.
     */
    shoppingAttributeType?: Enums.ShoppingAttributeType;
}
