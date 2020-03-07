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
import { CustomerSettings } from './customerSettings';
import { ParticipantSettings } from './participantSettings';


/**
 * Defines a add ons field validation requirements.
 */
import * as Enums from '../types/enums';

export interface AddOnSettings { 
    /**
     * The unique add on key.
     */
    addOnKey?: string;
    /**
     * The order customers field validation.
     */
    customer?: CustomerSettings;
    /**
     * The order primary participant field validation.
     */
    primaryParticipant?: ParticipantSettings;
    /**
     * The order participant field validation.
     */
    participant?: ParticipantSettings;
}
