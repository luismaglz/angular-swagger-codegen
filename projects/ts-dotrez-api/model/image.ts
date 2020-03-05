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
 * Defines an available image.
 */

export interface Image { 
    /**
     * The unique key for this image.
     */
    imageKey: string;
    /**
     * File name.
     */
    fileName?: string;
    /**
     * File extension.
     */
    fileExtension?: string;
    /**
     * The binary image data.
     */
    data?: string;
    /**
     * The image description.
     */
    description?: string;
    /**
     * The image type code.
     */
    typeCode?: string;
    /**
     * Returns true if this image is the group default.
     */
    isDefault?: boolean;
}
