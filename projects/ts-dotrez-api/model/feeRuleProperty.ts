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
 * Fee rule property model.
 */

    import { FeeRuleProperty<CAP>operator</CAP> } from '../models/enums';
    import { FeeRuleProperty<CAP>type</CAP> } from '../models/enums';

export interface FeeRuleProperty { 
    /**
     * Gets or sets the fee property number of this fee rule property.
     */
    propertyNumber?: number;
    /**
     * Gets or sets the fee rule number of this fee rule property.
     */
    ruleNumber?: number;
    /**
     * Gets or sets the property operator of this fee rule property.
     */
    operator?: FeeRuleProperty<CAP>operator</CAP>;
    /**
     * Gets or sets the property type of this fee rule property.
     */
    type?: FeeRuleProperty<CAP>type</CAP>;
    /**
     * Gets or sets the property value of this fee rule property.
     */
    propertyValue?: string;
}
