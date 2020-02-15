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
import { PointOfSale } from './pointOfSale';


/**
 * Defines a booking comment.
 */
export interface BookingComment { 
    /**
     * Indicates where the comment will be seen.
     */
    type?: BookingComment.TypeEnum;
    /**
     * The point of sale for the comment.
     */
    pointOfSale?: PointOfSale;
    /**
     * The text of the comment.
     */
    text?: string;
    /**
     * The comment key.
     */
    commentKey?: string;
    /**
     * The created date of the comment.
     */
    createdDate?: Date;
}
export namespace BookingComment {
    export type TypeEnum = 'Default' | 'Itinerary' | 'Manifest' | 'Alert' | 'Archive';
    export const TypeEnum = {
        Default: 'Default' as TypeEnum,
        Itinerary: 'Itinerary' as TypeEnum,
        Manifest: 'Manifest' as TypeEnum,
        Alert: 'Alert' as TypeEnum,
        Archive: 'Archive' as TypeEnum
    };
}
