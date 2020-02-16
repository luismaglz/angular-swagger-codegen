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
 * Manifest leg operations comment model.
 */
export interface ManifestLegOperationComment { 
    /**
     * The comment type.
     */
    commentType?: ManifestLegOperationComment.CommentTypeEnum;
    /**
     * The agentID.
     */
    agentId?: number;
    /**
     * The comment date.
     */
    date?: Date;
    /**
     * The comment text.
     */
    comment?: string;
}
export namespace ManifestLegOperationComment {
    export type CommentTypeEnum = 'Default' | 'Reservation' | 'Operation' | 'PitLoad' | 'Irop' | 'AppsOverride' | 'ManualAppsOverride';
}
