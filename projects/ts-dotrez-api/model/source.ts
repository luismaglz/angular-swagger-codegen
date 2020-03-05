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
 * Defines a travel commerce source.
 */
export interface Source { 
    /**
     * The unqiue source code.
     */
    sourceCode: string;
    /**
     * The culture code.
     */
    cultureCode?: string;
    /**
     * Description.
     */
    description?: string;
    /**
     * The website URL.
     */
    url?: string;
    /**
     * Discount code.
     */
    discountCode?: string;
    /**
     * Skin code.
     */
    skinCode?: string;
    /**
     * Active status.
     */
    inActive?: boolean;
}
