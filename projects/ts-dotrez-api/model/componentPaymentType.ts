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
 * Defines a component allowed payment type.
 */

    import { ComponentPaymentTypeModType } from '../types/enums';
    import { ComponentPaymentTypeExpiration } from '../types/enums';
    import { ComponentPaymentTypeCvv } from '../types/enums';
    import { ComponentPaymentTypeName } from '../types/enums';
    import { ComponentPaymentTypeIssueNumber } from '../types/enums';

export interface ComponentPaymentType { 
    /**
     * The payment method type code.
     */
    type?: string;
    /**
     * The payment description.
     */
    description?: string;
    /**
     * The modulus check to perform.
     */
    modType?: ComponentPaymentTypeModType;
    /**
     * The field usage for expiration date.
     */
    expiration?: ComponentPaymentTypeExpiration;
    /**
     * The field usage for CVV.
     */
    cvv?: ComponentPaymentTypeCvv;
    /**
     * The field usage for card holder name.
     */
    name?: ComponentPaymentTypeName;
    /**
     * The field usage for issue number.
     */
    issueNumber?: ComponentPaymentTypeIssueNumber;
}