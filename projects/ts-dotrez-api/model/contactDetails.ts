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
import { Name } from './name';
import { PhoneNumber } from './phoneNumber';


/**
 * The contact details for an organization.
 */
import * as Enums from '../types/enums';

export interface ContactDetails { 
    /**
     * The contact name.
     */
    name?: Name;
    /**
     * The available contact phone numbers.
     */
    phoneNumbers?: Array<PhoneNumber>;
}
