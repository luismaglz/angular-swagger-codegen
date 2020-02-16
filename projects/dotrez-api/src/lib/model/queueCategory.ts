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
 * The Queue Category model.
 */
export interface QueueCategory {
  /**
   * The queue category code of queue category.
   */
  queueCategoryCode?: string;
  /**
   * The name of the queue category
   */
  name?: string;
  /**
   * The InActive of QueueCategory.
   */
  inActive?: boolean;
  /**
   * The Allowed Class Of Service.
   */
  allowed?: boolean;
}
