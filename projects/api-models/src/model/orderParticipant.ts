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
import { Name } from './name';
import { ParticipantDocument } from './participantDocument';


/**
 * Defines a orders participant.
 */
import * as Enums from '../enums';

export interface OrderParticipant { 
    /**
     * The unique participant key.
     */
    participantKey?: string;
    /**
     * The participant description.
     */
    description?: string;
    /**
     * The name of the consumer.
     */
    name?: Name;
    /**
     * The participant type code.
     */
    participantTypeCode?: string;
    /**
     * The address of the consumer.
     */
    address?: ConsumerAddress;
    /**
     * Flag indicating if the participant is the primary.
     */
    isPrimary?: boolean;
    /**
     * The date of birth of the consumer.
     */
    dateOfBirth?: Date;
    /**
     * The participant document.
     */
    document?: ParticipantDocument;
    /**
     * The email address of the consumer.
     */
    emailAddress?: string;
    /**
     * The company name of the consumer.
     */
    companyName?: string;
    /**
     * The type of consumer (business or residential).
     */
    type?: string;
    /**
     * The home phone number.
     */
    homePhone?: string;
    /**
     * The work phone number.
     */
    workPhone?: string;
    /**
     * The fax phone number.
     */
    fax?: string;
}
