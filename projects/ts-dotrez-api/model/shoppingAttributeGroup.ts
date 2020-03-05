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
 * Model for a shopping attribute groups.
 */

export interface ShoppingAttributeGroup { 
    /**
     * Gets or sets the inactive flag for this shopping attribute group.
     */
    inActive?: boolean;
    /**
     * Gets or sets the description for this shopping attribute group.
     */
    description?: string;
    /**
     * Gets or sets the name for this shopping attribute group.
     */
    name?: string;
    /**
     * Gets or sets the code for this shopping attribute group.
     */
    shoppingAttributeGroupCode: string;
}
