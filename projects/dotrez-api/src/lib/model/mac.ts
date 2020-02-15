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
 * The MAC station model defines areas of related stations by region. //todo: Document and expand the MAC acronym
 */
export interface Mac { 
    /**
     * The inactive flag for this MAC station.
     */
    inActive?: boolean;
    /**
     * The code for this MAC station.
     */
    macCode: string;
    /**
     * The stations associated with this MAC.
     */
    macStations?: Array<string>;
    /**
     * The name for this MAC.
     */
    name: string;
}
