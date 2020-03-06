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


/**
 * The base class for the infant.
 */

    import { InfantBase<CAP>gender</CAP> } from '../models/enums';

export interface InfantBase { 
    /**
     * The date of birth of the infant.
     */
    dateOfBirth?: Date;
    /**
     * The gender of the passenger.
     */
    gender?: InfantBase<CAP>gender</CAP>;
    /**
     * The name of the passenger.
     */
    name?: Name;
}
