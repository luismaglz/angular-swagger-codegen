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
 * The region identifier model.
 */
import * as Enums from '../enums';

export interface RegionIdentifier { 
    /**
     * The region type code.
     */
    regionTypeCode?: string;
    /**
     * The region type.
     */
    regionType?: Enums.RegionType;
    /**
     * The flag to indicate if this is not in the travel region.
     */
    exclude?: boolean;
}
