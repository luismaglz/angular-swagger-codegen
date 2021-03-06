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
import { ConsumerAddress } from './consumerAddress';
import { OrderParticipantNameUpdateRequest } from './orderParticipantNameUpdateRequest';
import { ParticipantDocument } from './participantDocument';


/**
 * Represents changes that can be made to a component order participant.
 */
import * as Enums from '../enums';

export interface OrderParticipantUpdateRequest { 
    /**
     * The name of the participant.
     */
    name?: OrderParticipantNameUpdateRequest;
    /**
     * The address of the participant.
     */
    address?: ConsumerAddress;
    /**
     * The date of birth of the participant.
     */
    dateOfBirth?: Date;
    /**
     * The email address of the participant.
     */
    emailAddress?: string;
    /**
     * The company name of the participant.
     */
    companyName?: string;
    /**
     * The type of participant (business or residential).
     */
    type?: string;
    /**
     * The participant description.
     */
    description?: string;
    /**
     * The participant document.
     */
    document?: ParticipantDocument;
    /**
     * The home phone number.
     */
    homePhone?: string;
}
